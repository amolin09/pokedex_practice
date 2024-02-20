import "./PokeCard.css"
import "./PokeCardDetails/PokeCardDetails.css"
import PokeCardDetails from "./PokeCardDetails/PokeCardDetails"

export default function PokeCard({pokeNum, pokeName, pokeType1, pokeType2, isFavorite, toggleFavoritePokemon}){
    const pokeImgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeNum}.png`
    
    return(
        <div className="PokeCard">
            <div className="imgContainer">
            <img src = {pokeImgSrc} alt=''/>
            </div>
            <PokeCardDetails pokeNum={pokeNum} pokeName={pokeName} pokeType1={pokeType1} pokeType2={pokeType2} isFavorite={isFavorite} toggleFavoritePokemon={toggleFavoritePokemon}/>
        </div>
    )
}