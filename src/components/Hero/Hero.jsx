import './Hero.css'
import { useNavigate } from 'react-router-dom';

export default function Hero() {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/shop');
    };

    return (
        <>
            <section className="hero">
                <h4>Gatos de todas las Razas</h4>
                <h1>Adopta los que quieras!</h1>
                <p>Dales una mejor vida</p>
                <button onClick={handleButtonClick}>Adoptar</button>
            </section>
        </>
    );
}