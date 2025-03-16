import { Stethoscope, Gavel, BookOpen, Banknote } from "lucide-react";

export default function UseCasesSection() {
  const useCases = [
    {
      id: 1,
      icon: <Stethoscope className="w-7 h-7 text-green-600" />,
      title: "Médical",
      description:
        "Idéal pour la gestion et l'archivage des dossiers médicaux et administratifs en milieu hospitalier ou cabinet médical.",
    },
    {
      id: 2,
      icon: <Gavel className="w-7 h-7 text-green-600" />,
      title: "Juridique",
      description:
        "Solution complète pour les cabinets d'avocats et les études notariales qui ont besoin de traiter de grandes quantités de documents.",
    },
    {
      id: 3,
      icon: <BookOpen className="w-7 h-7 text-green-600" />,
      title: "Éducation",
      description:
        "Parfait pour les établissements d'enseignement qui souhaitent numériser et organiser leurs archives pédagogiques.",
    },
    {
      id: 4,
      icon: <Banknote className="w-7 h-7 text-green-600" />,
      title: "Financier",
      description:
        "Permet aux institutions financières de traiter efficacement les formulaires, contrats et autres documents administratifs.",
    },
  ];

  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Cas d'utilisation</h2>
        <p className="mb-12">
          Notre système est particulièrement adapté aux entreprises et services qui travaillent avec de nombreux documents physiques. Grâce à sa flexibilité, il peut être personnalisé pour les besoins spécifiques de chaque secteur d'activité. Voici les principaux cas d'utilisation :
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((useCase) => (
            <div
              key={useCase.id}
              className="bg-white text-gray-800 p-6 rounded-lg shadow-lg"
            >
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-2 rounded-full mr-3 flex items-center justify-center">
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-semibold">{useCase.title}</h3>
              </div>
              <p className="text-gray-600">{useCase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
