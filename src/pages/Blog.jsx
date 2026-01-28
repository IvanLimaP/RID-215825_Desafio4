import usePageTitle from '../hooks/UsePageTitle'
import useScrollTop from '../hooks/UseScrollTop'
import CardsNews from '../components/CardsNews'
import '../styles/Blog.css'

export default function Blog() {
    usePageTitle('Blog')
    useScrollTop()


    return (
        <main className="container">
            <h1 className='titleBlog02'>Saiba mais sobre o mundo da Programação. Veja algumas notícias e fique por dentro</h1>
            <section className='containerBanner'>
                <img className='imgBanner' src="../../public/imagens/imgBlog01.jpg" alt="" />
                <h2 className='subTitleBlog02' >O kit do engenheiro de IA: ferramentas e carreira</h2>
                <p className='p-Blog02'>Descubra as ferramentas essenciais (n8n, Supabase, LangFlow) para se tornar um Engenheiro de IA, ganhar em dólar e criar automações robustas. 
                <br /> Clique em <a href="https://www.rocketseat.com.br/blog">ROCKETSEAT BLOG</a> e saiba mais sobre o assunto.</p>
            </section>
            <section>
                <CardsNews/>
                
            </section>
        </main>
    )
}