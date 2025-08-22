import { ProjectCard } from "./CardProyecto";
import type { Project } from "./Objects";

export const ProjectsSection: React.FC = () => {
  const projects: Project[] = [
    {
      title: "E-commerce Platform",
      description: "Plataforma de comercio electrónico completa con React, Node.js y MongoDB",
      tech: ["React", "TypeScript", "Node.js", "MongoDB"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
      demo: "#",
      github: "#"
    },
    {
      title: "Task Management App",
      description: "Aplicación de gestión de tareas con funcionalidades avanzadas y diseño responsive",
      tech: ["Next.js", "TypeScript", "Figma", "Git"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
      demo: "#",
      github: "#"
    },
    {
      title: "Weather Dashboard",
      description: "Dashboard meteorológico con visualización de datos en tiempo real",
      tech: ["React", "JavaScript", "HTML", "CSS"],
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=250&fit=crop",
      demo: "#",
      github: "#"
    }
  ];

  return (
    <section id="proyectos" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Proyectos
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};