import usePageTitle from '../hooks/UsePageTitle'
import ContactForm from '../components/contactForm/ContactForm'


export default function Contact() {
    usePageTitle('Contato')

    return (
        <main className="container">
           <ContactForm />
        </main>
    )
}