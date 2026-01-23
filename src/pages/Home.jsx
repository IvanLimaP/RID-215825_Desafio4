import { useState } from 'react'
import Card from '../components/Card'
import usePageTitle from '../hooks/UsePageTitle'
import ProjectsCard from '../components/ProjectsCard'
import { Link } from 'react-router-dom'


export default function Home() {
    // Hook useState para controle de destaque de cards
    const [highlight, setHighlight] = useState(null)


    usePageTitle('Portfólio | Ivan Lima')


    return (
        <main className="container">

            {/* Seção principal (Hero) */}
            <section className="hero">
                <h2>Olá, eu sou Ivan</h2>
                <h1>Desenvolvedor Front End</h1>
                <p>
                    Desenvolvedor especializado em aplicações web modernas utilizando CSS, HTML, JavaScript, TypeScript e React,
                    com foco em usabilidade, performance e boas práticas de código.
                </p>
                <Link className='btn primary' to="/contact">Entre em Contato</Link>
            </section>

            {/* Seção de Cards */}
            <section className="cards">
                <p className='subTitleBlog'>Blog</p>
                <p></p>
                <div onMouseEnter={() => setHighlight(1)} onMouseLeave={() => setHighlight(null)}>
                    <Card
                        title="Design System"
                        text="Criação de sistemas visuais reutilizáveis e escaláveis para produtos digitais."
                        link="/blog"
                        active={highlight === 1}
                    />
                </div>


                <div onMouseEnter={() => setHighlight(2)} onMouseLeave={() => setHighlight(null)}>
                    <Card
                        title="Figma Icons"
                        text="Processo profissional de design e exportação de ícones no Figma."
                        link="/blog"
                        active={highlight === 2}
                    />
                </div>
            </section>

            {/* Seção de projets Card */}
            <section>
               <ProjectsCard/>

            </section>
        </main>
    )
}