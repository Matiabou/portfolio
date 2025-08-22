import { GoHome } from "react-icons/go";
import { FaRegUser } from "react-icons/fa6";
import { IoBriefcaseOutline } from "react-icons/io5";
import { LiaAwardSolid } from "react-icons/lia";
import { FiMessageSquare } from "react-icons/fi";
import type { NavItem } from "./Objects";

export const Navigation: React.FC<{
  activeSection: string;
  isScrolled: boolean;
  scrollToSection: (sectionId: string) => void;
}> = ({ activeSection, isScrolled, scrollToSection }) => {
  const navItems: NavItem[] = [
    { id: 'inicio', label: 'Inicio', size: 2, icon: GoHome },
    { id: 'sobre-mi', label: 'Sobre mí', icon: FaRegUser },
    { id: 'proyectos', label: 'Proyectos', icon: IoBriefcaseOutline },
    { id: 'certificaciones', label: 'Certificaciones', icon: LiaAwardSolid },
    { id: 'contacto', label: 'Contacto', icon: FiMessageSquare }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="w-16">
          <img src="public/Logo.svg" className="text-purple-400 w-10">
          </img>
          </div>
          <div className="hidden lg:flex gap-10">
            {navItems.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`flex cursor-pointer items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                  activeSection === id
                    ? 'text-purple-400 bg-purple-400/10'
                    : 'text-gray-300 hover:text-purple-400 hover:bg-purple-400/5'
                }`}
              >
                <Icon size={18} />
                <span>{label}</span>
              </button>
            ))}
          </div>
          <div className="flex flex-row-reverse w-16">
            <button className="text-gray-300 hover:text-purple-400 hover:bg-purple-400/5">ES</button>
          </div>
        </div>
      </div>
    </nav>
  );
};