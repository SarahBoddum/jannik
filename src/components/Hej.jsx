import billede from "../assets/linkedin.png"
export default function Hej(props){
    return( 
        <div>
            <h2>Hej med dig, {props.navn} du er {props.alder} år gammel</h2>
            <img src={billede} alt="moi"/>
        </div>
    )
}