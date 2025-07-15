import "../styles/Inicio.css";
import { LinkedinLogo, MailLogo } from "./Icons";

export function Inicio() {
    return (
        <>
            <section>
                <div>
                    <h2>Hey, soy Matías</h2>
                    <h1 data-text="Desarrollador Frontend">Desarrollador Frontend</h1>
                    <h2>Creando páginas web únicas</h2>
                    <div className="social-icons">
                        <a className="Logo" href="https://www.linkedin.com/in/mat%C3%ADas-aboudara/" target="_blank" rel="noopener noreferrer">
                            <LinkedinLogo width={32} height={32}/>  
                        </a>
                        <a className="Logo" href="mailto:matiasaboudara@gmail.com" target="_blank" rel="noopener noreferrer">
                            <MailLogo width={32} height={32}/>
                        </a>
                    </div>    
                </div>
                <img src="/src/assets/img/Me.webp" alt="Yo" className="profile-image" />
            </section>
        </>
    );
}
