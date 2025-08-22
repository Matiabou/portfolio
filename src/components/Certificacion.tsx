import { LiaAwardSolid } from "react-icons/lia";
import type { Certification } from "./Objects";

export const CertificationCard: React.FC<{ certification: Certification }> = ({ certification }) => (
  <div className="bg-gradient-to-br from-purple-600/10 to-pink-600/10 border border-purple-400/30 rounded-lg p-6 hover:transform hover:scale-105 transition-all duration-300">
    <div className="flex items-center mb-4">
      <LiaAwardSolid className="text-purple-400 mr-3" size={24} />
      <h3 className="text-xl font-bold text-purple-400">{certification.title}</h3>
    </div>
    <p className="text-gray-300 mb-2">{certification.issuer}</p>
    <p className="text-gray-400 text-sm mb-2">{certification.date}</p>
    <p className="text-gray-500 text-sm">ID: {certification.credential}</p>
  </div>
);