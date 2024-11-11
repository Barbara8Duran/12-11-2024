import "./Home.css"

import Hero from "../../Hero/Hero"
import Main from "../../Main/Main"
import InputBanner from "../../InputBanner/InputBanner"

export default function HomePage(){
    
    return(
        <div className="home"> 
        <Hero/>
        <Main/>
        <InputBanner
        title="Adopta!"
        backgroundImage="/mw-banner.jpg" />
        </div>
    )
};