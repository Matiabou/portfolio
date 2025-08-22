import { CertificationCard } from "./Certificacion";
import type { Certification } from "./Objects";

export const CertificationsSection: React.FC = () => {
  const certifications: Certification[] = [
    {
      title: "React Developer Certification",
      issuer: "Meta",
      date: "2024",
      credential: "ABC123456"
    },
    {
      title: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      date: "2023",
      credential: "DEF789012"
    },
    {
      title: "Frontend Web Development",
      issuer: "Platzi",
      date: "2023",
      credential: "GHI345678"
    }
  ];

  return (
    <section id="certificaciones" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Certificaciones
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <CertificationCard key={index} certification={cert} />
          ))}
        </div>
      </div>
    </section>
  );
};