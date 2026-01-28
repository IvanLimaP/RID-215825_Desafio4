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
                        title="Educação corporativa"
                        text="Case Foursys: Veja como a Foursys aumentou a receita em 300% e reduziu o churn investindo em educação corporativa."
                        link="/blog"
                        active={highlight === 1}
                    />
                </div>


                <div onMouseEnter={() => setHighlight(2)} onMouseLeave={() => setHighlight(null)}>
                    <Card
                        title="Devops"
                        text="De DevOps para AIOps: ferramentas práticas para a próxima era das operações. Desvende a transição de DevOps para AIOps com ferramentas práticas."
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