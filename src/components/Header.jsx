import { Link } from 'react-router-dom'


export default function Header() {
    return (
        <header className="header">
            <nav className="nav">
                <Link to="/">Home</Link>
                <Link to="/projects">Projetos</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/contact">Contato</Link>
            </nav>
        </header>
    )
}