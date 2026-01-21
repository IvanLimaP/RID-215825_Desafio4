import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const projects = [
    {
        id: 1,
        title: "Projeto Carmo Country Clube",
        description:
            "Projeto  pessoal focado em colocar em pratica o meu aprendizado, fazendo um design diferente do comum.",
        image: "../../public/imagens/imgClube.png",
        route: "https://carmocountryclub.netlify.app/",
    },
    {
        id: 2,
        title: "Site Corretora Thamara Peres",
        description:
            "um projeto pessoal mas tambem profissional que logo estará no ar para ajudar os clientes a encontrarem mais irformações sobre os imoveis a venda e para entrar em contato com a corretora Thamara Peres.",
        image: "../../public/imagens/imgCorretora.png",
        route: "https://thamaraperescorretora.netlify.app/",
    },
    {
        id: 3,
        title: "Projeto desafio 02 escola DNC",
        description:
            "um projeto pessoal mas tambem profissional que logo estará no ar para ajudar o clientes encontrarem mais irformações sobre os imoveis a venda e para entrar em contato com a corretora Thamara Peres.",
        image: "../../public/imagens/imgSiteDev.png",
        route: "https://rid215825desafio2.netlify.app/",
    },
    
    
];

export default function ProjectsCard() {
    return (
        <section className="sectionProjectsCard">
            <p className="subTitleTexto subTitleBlog">Projetos</p>

            <div className="flex flex-col gap-8">
                {projects.map((project) => (
                    <motion.div
                        key={project.id}
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Link
                            to={project.route}
                            className="linkProjectsCard textProjectsCard"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="imgProjectsCard"
                            />

                            <div className="">
                                <h3 className="">
                                    {project.title}
                                </h3>
                                <p className="">
                                    {project.description}
                                </p>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

