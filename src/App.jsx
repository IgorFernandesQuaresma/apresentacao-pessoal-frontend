import React from 'react';
import './App.css';
import astronauta from '../public/astronauta.svg';
import githubIcon from '../public/github.svg';
import instagramIcon from '../public/instagram.svg';
import linkedinIcon from '../public/linkedin.svg';
import Footer from './components/footer/Footer';


function App() {
return (
        <>
        <main>
            <section id="aboutMe">
            <div className="aboutMe__img">
                <img className="aboutMe__img_link" src={astronauta} alt="Capacete de astronauta" width="200" height="200" />
            </div>

            <div className="aboutMe__sobre">
                <h1>Quem sou eu</h1>
                <div>
                <p className="aboutMe__sobre__paragrafo">
                Desenvolvedor full stack com sólida experiência em tecnologias como JavaScript, 
                HTML, CSS, TypeScript, MySQL, Bootstrap, Scss, Node, React e Metodologias Ágeis. 
                Experiência prévia como Gerente de Restaurantes, 
                desenvolvendo habilidades de gestão de equipes e comunicação. 
                Perfil comunicativo, resiliente e persistente, 
                com capacidade para superar obstáculos e manter uma comunicação assertiva.
                </p>
                <div className="aboutMe__sobre__botoes">
                    <button className="aboutMe__sobre__btn">
                    <a className="aboutMe__sobre__btn__link" href="https://github.com/IgorFernandesQuaresma" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </button>
                    <h2 className="seguidores"></h2>
                    <h2 className="seguindo"></h2>
                </div>
                </div>
            </div>
            </section>

            <section id="contato">
            <div className="contato__textos">
                <h1>Habilidades</h1>
                <div className="contato__paragrafo">
                <p>
                Tecnológicas: HTML, CSS, Bootstrap, Scss, Node.js, MySQL, JavaScript, React, Nest.js, WordPress, Metodologias Ágeis
                </p>
                </div>

                <div className="contato__icones">
                <a href="https://github.com/IgorFernandesQuaresma" target="_blank" rel="noopener noreferrer">
                    <img src={githubIcon} alt="Icone do GitHub" />
                </a>
                <a href="https://www.instagram.com/ifernandes.q" target="_blank" rel="noopener noreferrer">
                    <img src={instagramIcon} alt="Icone do Instagram" />
                </a>
                <a href="https://www.linkedin.com/in/ifernandesq" target="_blank" rel="noopener noreferrer">
                    <img src={linkedinIcon} alt="Icone do Linkedin" />
                </a>
                </div>
            </div>
            </section>
        </main>

        <Footer />
        </>
);
}

export default App;
