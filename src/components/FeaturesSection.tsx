export default function FeaturesSection() {
  return (
    <section id="fonctionnalites" className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12">
      {/* Texte des fonctionnalités */}
      <div className="w-full md:w-1/2 max-w-lg mx-auto md:mx-0 text-center md:text-left">
        <h2 className="text-2xl font-bold mb-6">Fonctionnalités clé</h2>
        <ul className="space-y-4">
          {[
            "Numérisation polyvalente",
            "OCR multilingue",
            "Extraction d'entités nommées",
            "Analyse sémantique",
            "Gestion des données"
          ].map((feature, index) => (
            <li key={index} className="flex items-start gap-3 text-lg font-medium text-gray-900">
              <span className="w-6 h-6 flex items-center justify-center bg-green-500 text-white rounded-full text-sm flex-shrink-0">
                ✔
              </span>
              <span className="leading-snug">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Image avec les annotations */}
      <div className="relative w-full md:w-1/2 max-w-lg mx-auto mt-8 md:mt-0">
        {/* Image principale */}
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img src="/images/ocr.svg" alt="Laptop" className="w-full grayscale" />
        </div>

        {/* Annotation "Sélectionnez un document" */}
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 md:left-auto md:-left-12 bg-white shadow-md px-4 py-2 rounded-lg w-44">
          <span className="text-gray-400 text-xs">Sélectionnez</span>
          <span className="text-black font-bold block">Document 1</span>
          <button className="bg-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full self-end">
            Numériser
          </button>
        </div>

        {/* Annotation "Prédiction 1.7" */}
        <div className="absolute top-12 right-1/2 transform translate-x-1/2 md:right-auto md:-right-10 bg-white shadow-md px-3 py-1 rounded-lg flex items-center space-x-2">
          <span className="text-gray-700 text-sm">Prédiction</span>
          <span className="text-black font-bold">1.7</span>
          <span className="text-green-500">✔</span>
        </div>

        {/* Annotation "Taux de réussite maximal" */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 md:left-auto md:-left-10 bg-white shadow-md px-4 py-2 rounded-lg flex items-center space-x-2">
          <span className="text-green-500">✔</span>
          <span className="text-gray-700 text-sm">Taux de réussite maximal</span>
        </div>
      </div>
    </section>
  );
}
