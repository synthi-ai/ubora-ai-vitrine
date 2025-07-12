FROM node:21-alpine AS builder

WORKDIR /app
RUN apk add --no-cache libc6-compat curl ca-certificates

COPY package.json  ./

RUN npm ci --legacy-peer-deps
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

FROM node:21-alpine AS runner
ENV NODE_ENV=production

WORKDIR /app
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs
    
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder /app/package.json ./
COPY --from=builder ./

RUN npm ci --only=production --legacy-peer-deps && npm cache clean --force

USER nextjs

EXPOSE 3000

ENV PORT=3000

ENV HOSTNAME="0.0.0.0"

CMD ["npm", "start"]
