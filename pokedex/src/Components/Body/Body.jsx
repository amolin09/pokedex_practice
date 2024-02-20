import PokeCard from "../PokeCard/PokeCard"
// import { useState, useEffect } from "react"
import "./Body.css"
// import db from "../../pokemonDatabase"
// import axios from "axios";

export default function Body({favoriteFilter, database, toggleFavoritePokemon}){

    // const  pokeURL = "https://pokeapi.co/api/v2/pokemon/?limit=151"

    // let [pokeData, setPokeData] = useState([]);

    // useEffect(()=>{
    //     getPokeData()
    // }, [])

    // const getPokeData = async() => {
    //     axios.get(pokeURL)
    //     .then((res)=>{
    //         setPokeData(res.data.results)
    //     })
    // }

    let PokeData = [];

    if(favoriteFilter === true){ 

        const favoritePokeData = database.filter((pokemon) => pokemon.isFavorite === true)
        PokeData = favoritePokeData.map((pokemon)=>{
            return(
                <PokeCard key={pokemon.pokeNum} pokeNum={pokemon.pokeNum} pokeName={pokemon.pokeName} pokeType1={pokemon.pokeType1} pokeType2={pokemon.pokeType2} isFavorite={pokemon.isFavorite} toggleFavoritePokemon={toggleFavoritePokemon}/>
                            
            )})
    }
    else{
        PokeData = database.map((pokemon)=> {
            return(
                <PokeCard key={pokemon.pokeNum} pokeNum={pokemon.pokeNum} pokeName={pokemon.pokeName} pokeType1={pokemon.pokeType1} pokeType2={pokemon.pokeType2} isFavorite={pokemon.isFavorite} toggleFavoritePokemon={toggleFavoritePokemon}/>
                        
            )})
        }

    

    return(
        <div className="Body">{PokeData}</div>
    )
    
}