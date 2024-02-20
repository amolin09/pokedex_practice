import PokeCardFavorite from "./PokeCardFavorite"
import "./PokeCardDetails.css"

export default function PokeCardDetails({pokeNum, pokeName, pokeType1, pokeType2, isFavorite, toggleFavoritePokemon}){
    
    return(
        <div className="details">
            <div className="detailBlock" id="detailText">
                <h3 className="pokemonName">{pokeName}</h3>
                {pokeType2 ? <p className="pokemonType">{pokeType1}, {pokeType2}</p> : <p className="pokemonType">{pokeType1}</p>}
            </div>
            <PokeCardFavorite pokeNum={pokeNum} isFavorite={isFavorite} toggleFavoritePokemon={toggleFavoritePokemon}/>
        </div>
    )
}