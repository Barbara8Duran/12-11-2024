import './Navbar.css'
import {Link} from "react-router-dom"
import React, {useState} from "react"
import SearchBar from '../SearchBar/SearchBar'


export default function Navbar(){
    const [menuOpen, setMenuOpen] = useState(false)
    const [categoryMenuOpen, setCategoryMenuOpen] = useState(false);
    return(
        <>
            <nav>
                <div className='menu' onClick={() => {
                        setMenuOpen(!menuOpen)}}>
                        <span></span>
                        <span></span>
                        <span></span>
                </div>
                <ul className={menuOpen ? "open" : ""}>
                    <li>
                        <Link to="/">Inicio</Link>
                    </li>
                    <li>
                        <Link to="/shop">Tienda</Link>
                    </li>
                    <li>
                        <Link to="/contacts">Contactos</Link>
                    </li>
                    <li><Link to="/about">About</Link>
                    </li>
                    <li><Link to="/cart">Carrito</Link>
                    </li>
                    <li className="category-bar">
                        <button 
                        className="category-button" 
                        onClick={() => setCategoryMenuOpen(!categoryMenuOpen)}>Categorías</button>
                        {categoryMenuOpen && (
                        <div className="dropdown-menu">
                            <a href="/category/gato-enojado">Gato Enojado</a>
                            <a href="/category/gato-perdido">Gato Perdido</a>
                            <a href="/category/gato-triste">Gato Triste</a>
                            <a href="/category/gato-confundido">Gato Confundido</a>
                        </div>
                        )}
                    </li>  
                </ul>
                <div className='search'>
                    <SearchBar/>
                </div>
                
            </nav>
        </>);
}