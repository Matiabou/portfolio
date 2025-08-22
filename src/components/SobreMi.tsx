import { FaLaptopCode } from "react-icons/fa";
import { Skill } from "./Skill";

export const AboutSection: React.FC = () => {
  const skills = [
    "HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", 
    "Git", "GitHub", "Trello", "Figma"
  ];

  return (
    <section id="sobre-mi" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Sobre mí
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-balance text-gray-300 mb-6">
              Con React o diferentes tecnologías, mi enfoque es crear webs intuitivas y atractivas, para garantizar una buena experiencia de usuario.
            </p>
            <p className="text-lg text-balance text-gray-300 mb-8">
              Actualmente curso el terciario de ORT para ser Analista de Sistemas y también aprendo de manera autodidacta, llevando mis conocimientos a proyectos tangibles.
            </p>
            <div className="flex justify-center flex-wrap gap-3">
              {skills.map((skill, index) => (
                <Skill key={index} skill={skill} />
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="w-80 h-80 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mx-auto flex items-center justify-center text-6xl font-bold">
              <FaLaptopCode size={120} className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};