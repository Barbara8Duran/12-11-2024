import './Item.css'
import { Link } from 'react-router-dom'


export default function Item({id, name, price, img}){
    return(
        <>
            <div className='prods'>
                <Link to={`/products/${id}`}><img src={img} alt="Imagenes Gatos" /></Link>
            <div className='text'>
                <Link to={`/products/${id}`}>{name}</Link>
            </div>
            <h4>${price}</h4>
            </div>
        </>
    )
}