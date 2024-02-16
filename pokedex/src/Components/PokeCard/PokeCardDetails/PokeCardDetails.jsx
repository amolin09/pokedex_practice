import PokeCardFavorite from "./PokeCardFavorite"
import "./PokeCardDetails.css"

export default function PokeCardDetails({pokeName, pokeType}){
    
    return(
        <div className="details">
            <div className="detailBlock" id="detailText">
                <h3 className="pokemonName">{pokeName}</h3>
                <p className="pokemonType">{pokeType}</p>
            </div>
            <PokeCardFavorite/>
        </div>
    )
}