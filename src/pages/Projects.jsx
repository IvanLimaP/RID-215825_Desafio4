import usePageTitle from '../hooks/UsePageTitle'


export default function Projects() {
    usePageTitle('Projetos')


    return (
        <main className="container">
            <h1>Projetos</h1>
            <p>Dashboards, portfólios e aplicações reais.</p>
        </main>
    )
}