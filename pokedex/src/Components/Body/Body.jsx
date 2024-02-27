import PokeCard from "../PokeCard/PokeCard"
// import { useState, useEffect } from "react"
import "./Body.css"
// import db from "../../pokemonDatabase"
// import axios from "axios";

export default function Body({type, favoriteFilter, database, toggleFavoritePokemon, searchValue}){

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

    let PokeData = []

    const searchNameFilter = (pokemon) =>{
        let upperSearchValue = searchValue.toUpperCase()
        let pokemonName = pokemon.pokeName;
        let upperPokemonName = pokemonName.toUpperCase()
        if(upperPokemonName.startsWith(upperSearchValue)){
            return true
        }
        else{
            return false
        }
    }

    if(searchValue===""){

        if(type==="All"){
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
        }}
        else{
            const pokeDataTypeFilter = database.filter((pokemon)=> pokemon.pokeType1 === type||pokemon.pokeType2 === type)
            if(favoriteFilter === true){ 
    
                const favoritePokeData = pokeDataTypeFilter.filter((pokemon) => pokemon.isFavorite === true)
                PokeData = favoritePokeData.map((pokemon)=>{
                    return(
                        <PokeCard key={pokemon.pokeNum} pokeNum={pokemon.pokeNum} pokeName={pokemon.pokeName} pokeType1={pokemon.pokeType1} pokeType2={pokemon.pokeType2} isFavorite={pokemon.isFavorite} toggleFavoritePokemon={toggleFavoritePokemon}/>
                                    
                    )})
            }
            else{
                PokeData = pokeDataTypeFilter.map((pokemon)=> {
                    return(
                        <PokeCard key={pokemon.pokeNum} pokeNum={pokemon.pokeNum} pokeName={pokemon.pokeName} pokeType1={pokemon.pokeType1} pokeType2={pokemon.pokeType2} isFavorite={pokemon.isFavorite} toggleFavoritePokemon={toggleFavoritePokemon}/>
                                
                    )})
        }
        }

    }
    else{

        if(type==="All"){
            if(favoriteFilter === true){ 
    
                const favoritePokeData = database.filter((pokemon) => pokemon.isFavorite === true)
                const nameFilteredPokeData = favoritePokeData.filter(searchNameFilter)
                PokeData = nameFilteredPokeData.map((pokemon)=>{
                    return(
                        <PokeCard key={pokemon.pokeNum} pokeNum={pokemon.pokeNum} pokeName={pokemon.pokeName} pokeType1={pokemon.pokeType1} pokeType2={pokemon.pokeType2} isFavorite={pokemon.isFavorite} toggleFavoritePokemon={toggleFavoritePokemon}/>
                                    
                    )})
            }
            else{
                const nameFilteredDatabase = database.filter(searchNameFilter)
                PokeData = nameFilteredDatabase.map((pokemon)=> {
                    return(
                        <PokeCard key={pokemon.pokeNum} pokeNum={pokemon.pokeNum} pokeName={pokemon.pokeName} pokeType1={pokemon.pokeType1} pokeType2={pokemon.pokeType2} isFavorite={pokemon.isFavorite} toggleFavoritePokemon={toggleFavoritePokemon}/>
                                
                    )})
        }}
        else{
            const pokeDataTypeFilter = database.filter((pokemon)=> pokemon.pokeType1 === type||pokemon.pokeType2 === type)
            if(favoriteFilter === true){ 
    
                const favoritePokeData = pokeDataTypeFilter.filter((pokemon) => pokemon.isFavorite === true)
                const nameFilteredPokeData = favoritePokeData.filter(searchNameFilter)
                PokeData = nameFilteredPokeData.map((pokemon)=>{
                    return(
                        <PokeCard key={pokemon.pokeNum} pokeNum={pokemon.pokeNum} pokeName={pokemon.pokeName} pokeType1={pokemon.pokeType1} pokeType2={pokemon.pokeType2} isFavorite={pokemon.isFavorite} toggleFavoritePokemon={toggleFavoritePokemon}/>
                                    
                    )})
            }
            else{
                const nameFilteredPokeData = pokeDataTypeFilter.filter(searchNameFilter)
                PokeData = nameFilteredPokeData.map((pokemon)=> {
                    return(
                        <PokeCard key={pokemon.pokeNum} pokeNum={pokemon.pokeNum} pokeName={pokemon.pokeName} pokeType1={pokemon.pokeType1} pokeType2={pokemon.pokeType2} isFavorite={pokemon.isFavorite} toggleFavoritePokemon={toggleFavoritePokemon}/>
                                
                    )})
        }
        }

    }

    return(
        <div className="Body">
            {PokeData.length === 0? <h1 className="no-results">No Results Found</h1>: <></>}
            {PokeData}
        </div>
    )
    
}