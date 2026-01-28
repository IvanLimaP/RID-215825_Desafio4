import "../styles/Blog.css"

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const noticias = [
    {
        id: 1,
        title: "Educação corporativa",
        description:
            "Case Foursys: Veja como a Foursys aumentou a receita em 300% e reduziu o churn investindo em educação corporativa.",
        image: "https://fiquepordentro.ensinoeinstein.com/wp-content/uploads/2022/11/Educacao-Corporativa-alinhada-a-estratagia-de-gestao-de-pessoas-780x470.jpg",
        route: "https://www.rocketseat.com.br/blog/artigos/post/case-foursys-educacao-corporativa-300-receita?xcod=%7B%22u%22%3A%2241aa6080-6f96-4d5f-904a-4d89181b247c%22%2C%22url%22%3A%22www.rocketseat.com.br%2Fblog%22%2C%22r%22%3A%22www.google.com%2F%22%2C%22v%22%3A1%7D&utm_content=%7B%22url%22%3A%22www.rocketseat.com.br%2Fblog%22%2C%22v%22%3A1%7D",
    },
    {
        id: 2,
        title: "Prompt React IA",
        description:
            "Design para React com IA: o prompt exato para acelerar seu front-end. Copie o prompt de IA que o Diego Fernandes usa.",
        image: "https://www.valuehost.com.br/blog/wp-content/uploads/2024/06/ia-para-programar.jpeg.webp",
        route: "https://www.rocketseat.com.br/blog/artigos/post/design-para-react-ia-prompt?xcod=%7B%22u%22%3A%2241aa6080-6f96-4d5f-904a-4d89181b247c%22%2C%22url%22%3A%22www.rocketseat.com.br%2Fblog%22%2C%22r%22%3A%22www.google.com%2F%22%2C%22v%22%3A1%7D&utm_content=%7B%22url%22%3A%22www.rocketseat.com.br%2Fblog%22%2C%22v%22%3A1%7D",
    },
    {
        id: 3,
        title: "Devops",
        description:
            "De DevOps para AIOps: ferramentas práticas para a próxima era das operações. Desvende a transição de DevOps para AIOps com ferramentas práticas. Explore como a IA otimiza.",
        image: "https://datascience.aero/wp-content/themes/yootheme/cache/devops-aiops-85-aef86fdb.jpeg",
        route: "https://www.rocketseat.com.br/blog/artigos/post/de-devops-para-aiops-ferramentas-praticas?xcod=%7B%22u%22%3A%2241aa6080-6f96-4d5f-904a-4d89181b247c%22%2C%22url%22%3A%22www.rocketseat.com.br%2Fblog%22%2C%22r%22%3A%22www.google.com%2F%22%2C%22v%22%3A1%7D&utm_content=%7B%22url%22%3A%22www.rocketseat.com.br%2Fblog%22%2C%22v%22%3A1%7D",
    },


];

export default function CardsNews() {
    return (
        <section className="sectionProjectsCard">
            <p className="subTitleTexto subTitleBlog">Noticias em Destaque</p>

            <div className="flex flex-col gap-8">
                {noticias.map((noticia) => (
                    <motion.div
                        key={noticia.id}
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Link
                            to={noticia.route}
                            className="linkProjectsCard textProjectsCard"
                        >
                            <img
                                src={noticia.image}
                                alt={noticia.title}
                                className="imgProjectsCard"
                            />
                            <div className="">
                                <h3 className="subTitleH3">
                                    {noticia.title}
                                </h3>
                                <p className="">
                                    {noticia.description}
                                </p>
                                 <p className="p-rocketSeat">by RocketSeat Blog</p>

                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

