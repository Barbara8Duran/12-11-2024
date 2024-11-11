import './Main.css'
import Banner from '../Banner/Banner'

export default function Main(){
    return(
    <>
        <main className='banner-m'>
            <div className='banner1'>
            <Banner
            title="Bienvenido a Nuestro Sitio"
            subtitle="Ofrecemos los mejores servicios"
            backgroundImage="./gato1.jpg"
            height="350px"
            width="450px"
            borderRadius="8px"
            h1PaddingTop='170px'
            />
            </div>
            <div className='banner2'>
            <Banner
            title="Promoción Especial"
            subtitle="¡No te pierdas nuestras ofertas!"
            backgroundImage="./gato2.jpg"
            height="350px"
            width="400px"
            borderRadius="8px"
            h1PaddingTop='170px'
            />
            </div>
            <div className='banner3'>
            <Banner
            title="Promoción Especial"
            subtitle="¡No te pierdas nuestras ofertas!"
            backgroundImage="./gato3.jpg"
            height="350px"
            width="450px"
            borderRadius="8px"
            h1PaddingTop='170px' 
            />
            </div>
            <div className='banner4'>
            <Banner
            title="Promoción Especial"
            subtitle="¡No te pierdas nuestras ofertas!"
            backgroundImage="./gato4.jpeg"
            height="300px"
            width="700px"
            borderRadius="8px"
            h1PaddingTop='100px' 
            />
            </div>
        </main>
    </>)
}