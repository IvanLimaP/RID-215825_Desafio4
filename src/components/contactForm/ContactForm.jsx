import './ContactForm.css'

//COMPONENTS
import Button from '../buttonContactForm/ButtonContactForm'


function ContactForm() {

    
return (
    <div className="containerContactForm">
            <div className="contact-form d-flex fd-column al-center">
                <h2>Preencha o formulário para entrar em contato</h2>
                <form>
                    <div className="d-flex form-group">
                        <input
                            className="form-input"
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Name *"
                            
                        />
                        <input
                            className="form-input"
                            type="text"
                            id="email"
                            name="email"
                            placeholder="Email *"
                            
                        />
                    </div>
                    <div className="d-flex form-group">
                        <textarea
                            className="form-input"
                            id="message"
                            name="message"
                            placeholder="Mensagem *"
                            
                            rows="4"
                        ></textarea>
                    </div>
                    <div className="al-center jc-end d-flex form-group">
                        <Button className="buttonContact" >Enviar</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactForm