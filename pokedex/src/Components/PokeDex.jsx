import NavBar from './NavBar/NavBar.jsx';
import Footer from './Footer/Footer.jsx';
import Body from './Body/Body.jsx';
import db from "../pokemonDatabase.js"
import { useState } from 'react';

export default function PokeDex(){

    const [favoritesOnly, setFavoritesOnly] = useState(false);
    const [database, setDatabase] = useState(db)

    const toggleFavoritesOnly = () =>{
        setFavoritesOnly(f => !f)
        
    }

    const toggleFavoritePokemon = (pokeNum) =>{
        const newDatabase = [...database];
        const favoritedPokemon = newDatabase.find((pokemon)=> pokemon.pokeNum === pokeNum)
        favoritedPokemon.isFavorite = !favoritedPokemon.isFavorite;
        setDatabase(newDatabase)
    
    }  

    return(
        <>
          <NavBar favoriteFilter={favoritesOnly} toggleFavoritesOnly={toggleFavoritesOnly}/>
          <Body favoriteFilter={favoritesOnly} database={database} toggleFavoritePokemon={toggleFavoritePokemon}/>
          <Footer/>
        </>
      
      )
}