import { useState, useEffect } from 'react'
import './ContactForm.css'

//COMPONENTS
import Button from '../buttonContactForm/ButtonContactForm'

function ContactForm() {


    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })
    const [isFormValid, setIsFormValid] = useState(false)
    const [formSubmitLoading, setFormSubmitLoading] = useState(false)
    const [formSubmitted, setFormSubmitted] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (isFormValid) {
            setFormSubmitLoading(true)
            try {
                const response = await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify({...formData, access_key: "06671f76-c66a-41a3-8363-49d08e6dc3bd"})
                })

                if (response.ok) {
                    setFormSubmitted(true)
                }else {
                    alert('Erro ao enviar!')
                }
            } catch (e) {
                alert('Error: ', e)
            } finally {
                setFormSubmitLoading(false)
            }
        
        } 
    }

    useEffect(() => {

        const isValidEmail = (email) => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            return emailRegex.test(email)
        }


        const isValid = formData?.name?.trim() || "" &&
            formData?.email?.trim() || "" &&
            isValidEmail(formData.email) &&
            formData?.message?.trim() || ""

       setIsFormValid(isValid)
    }, [formData])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }


    return (
        <div className="containerContactForm">
            <div className="contact-form d-flex fd-column al-center">
                <h2>Preencha o formulário para entrar em contato</h2>
                <form onSubmit={handleSubmit}>
                    <div className="d-flex form-group">
                        <input
                            className="form-input"
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Name *"
                            onChange={handleChange}
                        />
                        <input
                            className="form-input"
                            type="text"
                            id="email"
                            name="email"
                            placeholder="Email *"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="d-flex form-group">
                        <textarea
                            className="form-input"
                            id="message"
                            name="message"
                            placeholder="Mensagem *"
                            onChange={handleChange}
                            rows="4"
                        ></textarea>
                    </div>
                    <div className="al-center jc-end d-flex form-group">
                        {formSubmitted && <p className="text-primary">Sucesso</p>}
                        <Button className="buttonContact" type="submit" disabled={!isFormValid || formSubmitLoading} >Enviar</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactForm