FROM node:21-alpine AS builder

# Définir le dossier de travail
WORKDIR /app

# Installer les paquets nécessaires (libc, curl, SSL)
RUN apk add --no-cache libc6-compat curl ca-certificates

# Copier uniquement les métadonnées de dépendances
COPY package.json ./

# Installer les dépendances (pas de lockfile ici)
RUN npm install --legacy-peer-deps

# Copier le reste du code source
COPY . .

# Désactiver la télémétrie Next.js
ENV NEXT_TELEMETRY_DISABLED=1

# Construire l'application Next.js
RUN npm run build

# ---------- Runner ----------
FROM node:21-alpine AS runner

ENV NODE_ENV=production

# Dossier de travail pour l'application
WORKDIR /app

# Créer un utilisateur sécurisé pour exécuter l’app
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Copier les fichiers nécessaires à l'exécution
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/package.json ./

# Installer les dépendances de production
RUN npm install --only=production --legacy-peer-deps && npm cache clean --force

# Utiliser un utilisateur non-root pour la sécurité
USER nextjs

# Port d’écoute
EXPOSE 3000

# Variables d’environnement
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Commande de démarrage
CMD ["npm", "start"]
