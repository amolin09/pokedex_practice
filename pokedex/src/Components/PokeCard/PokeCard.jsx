import "./PokeCard.css"
import "./PokeCardDetails/PokeCardDetails.css"
import PokeCardDetails from "./PokeCardDetails/PokeCardDetails"

export default function PokeCard({pokeNum, pokeName, pokeType1, pokeType2, isFavorite, toggleFavoritePokemon, handleOpenPokeModal}){
    const pokeImgSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeNum}.png`
    
    return(
        <div className="PokeCard" id={pokeNum} >
            <div className="imgContainer" id={pokeNum} onClick={handleOpenPokeModal}>
            <img src = {pokeImgSrc} alt=''/>
            </div>
            <PokeCardDetails pokeNum={pokeNum} pokeName={pokeName} pokeType1={pokeType1} pokeType2={pokeType2} isFavorite={isFavorite} toggleFavoritePokemon={toggleFavoritePokemon}/>
        </div>
    )
}