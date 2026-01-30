import usePageTitle from '../hooks/UsePageTitle'
import ProjectsCard from '../components/ProjectsCard'
import '../styles/Blog.css'

export default function Projects() {
    usePageTitle('Projetos')


    return (
        <main className="container">
            <section className='containerProjeto02'>
                <h1 className='titleBlog02'>Principais Projetos do GitHub</h1>
                <img className='imgLogoGit' src="../../public/imagens/gitLogo.png" alt="" />
            </section>
            <ProjectsCard/>
        </main>
    )
}