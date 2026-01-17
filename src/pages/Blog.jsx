import usePageTitle from '../hooks/UsePageTitle'
import useScrollTop from '../hooks/UseScrollTop'


export default function Blog() {
    usePageTitle('Blog')
    useScrollTop()


    return (
        <main className="container">
            <h1>Blog</h1>
            <p>Artigos sobre design, frontend e tecnologia.</p>
        </main>
    )
}