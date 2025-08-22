import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import type { Project } from "./Objects";

export const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className="bg-slate-800/50 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-purple-400/20">
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-48 object-cover"
    />
    <div className="p-6">
      <h3 className="text-xl font-bold mb-3 text-purple-400">{project.title}</h3>
      <p className="text-gray-300 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((tech, i) => (
          <span key={i} className="bg-purple-600/20 text-purple-400 px-2 py-1 rounded text-sm">
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        <a
          href={project.demo}
          className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
        >
          <FiExternalLink size={18} />
          Demo
        </a>
        <a
          href={project.github}
          className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
        >
          <FaGithub size={18} />
          Código
        </a>
      </div>
    </div>
  </div>
);