import "./PokeCard.css"
import "./PokeCardDetails/PokeCardDetails.css"
import PokeCardDetails from "./PokeCardDetails/PokeCardDetails"

export default function PokeCard({pokeNum, pokeName, pokeType}){
    const pokeImgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeNum}.png`
    
    return(
        <div className="PokeCard">
            <div className="imgContainer">
            <img src = {pokeImgSrc} alt=''/>
            </div>
            <PokeCardDetails pokeName={pokeName} pokeType={pokeType}/>
        </div>
    )
}