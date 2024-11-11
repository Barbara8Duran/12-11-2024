import "./Loading.css"
import { BounceLoader } from "react-spinners"

export default function Loading(){
    return(
        <div className="load">
            <BounceLoader color="#e4b3c6" size="65"/>
        </div>
    )
}