import './Logo.css'

export default function Logo(){
    const Logo = '/logo.png'
    return(
    <>
        <a href="/" className="milogo"><img src={Logo} alt="Logo"/></a>  
    </>)
}