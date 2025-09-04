import { FaChevronDown } from "react-icons/fa6";

export const HeroSection: React.FC<{ scrollToSection: (sectionId: string) => void }> = ({ scrollToSection }) => (
  <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br "></div>
    <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
      <div className="mb-8">
        <img
          src="src/assets/img/Me.webp"
          alt="Matías Aboudara"
          className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover mx-auto border-4 border-purple-400 shadow-lg">
        </img>
      </div>
      <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
        Matías Aboudara
      </h1>
      <p className="text-xl md:text-2xl text-gray-300 mb-8">
        Desarrollador Frontend
      </p>
      <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
        Creando experiencias web modernas y atractivas con las últimas tecnologías
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          onClick={() => scrollToSection('proyectos')}
          className="cursor-pointer bg-gradient-to-r from-purple-600 to-pink-600 hover:scale-110 px-8 py-3 rounded-lg transition-all duration-200 font-semibold"
        >
          Ver Proyectos
        </button>
        <button
          onClick={() => scrollToSection('contacto')}
          className="cursor-pointer border border-purple-400 text-purple-400 hover:bg-purple-400 hover:scale-110 hover:text-white px-8 py-3 rounded-lg transition-all duration-200 font-semibold"
        >
          Contacto
        </button>
      </div>
    </div>
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <FaChevronDown size={32} className="text-purple-400" />
    </div>
    {/* Fade inferior para suavizar transición de fondo */}
   
  </section>
);