import './Footer.css'

export default function Footer(){
    return(<>
    <footer className="piepagina">
        <div className='col'>
            <img src="./logo.png" alt="logo" />
            <h4>Contact</h4>
            <p><strong>Address: </strong> Lorem Ipsum</p>
            <p><strong>Phone: </strong> Lorem Ipsum</p>
            <p><strong>Hours: </strong> Lorem Ipsum</p>
        </div>
        <div className="col">
            <h4>About</h4>
            <a href="#">Sobre Nosotros</a>
            <a href="#">Información de Envío</a>
            <a href="#">Política de Privacidad</a>
            <a href="#">Terminos y Condiciones</a>
            <a href="#">Contactanos</a>

        </div>

        <div className="col">
            <h4>Mi Cuenta</h4>
            <a href="#">Registrate</a>
            <a href="#">Ver Carrito</a>
            <a href="#">Mi Lista de Deseos</a>
            <a href="#">Rastrea mi Pedido</a>
            <a href="#">Ayuda</a>
        </div>

        <div className="col payments">
            <h4>Formas de Pago</h4>
            <p>Formas de Pago Seguras</p>
            <img src="/pay.png" alt="" />
        </div>
        <div className="copyright">
            <p>2024, barby</p>
        </div>
        
    </footer>

    </>)
}