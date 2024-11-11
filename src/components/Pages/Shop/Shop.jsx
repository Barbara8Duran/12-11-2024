import ItemList from "../../ItemList/ItemList"
import Banner from "../../Banner/Banner"

export default function ShopPage(){
    
    return(
        <>
            <h2>¡Adopta Gatos!</h2>
            <p>Ellos te necesitan</p>

            <ItemList />
            <Banner
            title="Haz una donación"
            subtitle="Ayuda a los adorables felinos!"
            backgroundImage="/mw-banner.jpg"
            height="30vh"
            width="100%"
            h1PaddingTop="60px"
            />
        </>
    )}