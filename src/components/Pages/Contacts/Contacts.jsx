import "./Contacts.css"
import Banner from "../../Banner/Banner"


export default function ContactsPage(){
    
    return(
        <>
            <div className="contact-container">
                <div className="contact-page">
                    <h2>Contact Us</h2>
                    <form className="contact-form">
                        <label htmlFor="name">Nombre</label>
                        <input type="text" id="name" name="name" placeholder="Ingresa tu nombre" required />

                        <label htmlFor="email">Correo</label>
                        <input type="email" id="email" name="email" placeholder="Ingresa tu correo" required />

                        <label htmlFor="phone">Teléfono</label>
                        <input type="tel" id="phone" name="phone" placeholder="Ingresa tu teléfono" required />

                        <button className="contact-button" type="submit">Enviar</button>
                    </form>
                </div>
            </div>
        </>
    )
};