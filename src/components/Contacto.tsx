import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

export const ContactSection: React.FC = () => (
  <section id="contacto" className="py-20">
    <div className="max-w-4xl mx-auto px-4 text-center">
      <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
        Contacto
      </h2>
      <p className="text-lg text-gray-300 mb-12">
        ¿Interesado en trabajar juntos? ¡Me encantaría conocer tu proyecto!
      </p>
      <div className="flex justify-center gap-8 mb-12">
        <a
          href="mailto:matias@ejemplo.com"
          className="flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-6 py-3 rounded-lg transition-all duration-200"
        >
          <IoMail size={20} />
          Email
        </a>
        <a
          href="https://linkedin.com/in/matias-aboudara"
          className="flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-6 py-3 rounded-lg transition-all duration-200"
        >
          <FaLinkedin size={20} />
          LinkedIn
        </a>
        <a
          href="https://github.com/matiasaboudara"
          className="flex items-center gap-3 bg-gradient-to-r from-gray-600 to-slate-600 hover:from-gray-700 hover:to-slate-700 px-6 py-3 rounded-lg transition-all duration-200"
        >
          <FaGithub size={20} />
          GitHub
        </a>
      </div>
    </div>
  </section>
);