import usePageTitle from '../hooks/UsePageTitle'


export default function Contact() {
    usePageTitle('Contato')


    return (
        <main className="container">
            <h1>Contato</h1>
            <p>Email: joao.silva@email.com</p>
        </main>
    )
}