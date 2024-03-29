import NavBar from './NavBar/NavBar.jsx';
import Footer from './Footer/Footer.jsx';
import Body from './Body/Body.jsx';
import db from "../pokemonDatabase.js"
import { useState } from 'react';

export default function PokeDex(){

  const typesList = [
    {value: "All"}, 
    {value: "Normal"},
    {value: "Fire"},
    {value: "Water"},
    {value: "Electric"},
    {value: "Grass"},
    {value: "Ice"},
    {value: "Fighting"},
    {value: "Poison"},
    {value: "Ground"},
    {value: "Flying"},
    {value: "Psychic"},
    {value: "Bug"},
    {value: "Rock"},
    {value: "Ghost"},
    {value: "Dragon"},
    {value: "Dark"},
    {value: "Steel"},
    {value: "Fairy"},
]

  const [type, setType] = useState(typesList[0].value)

  const changeType = (e) =>{
    setType(e.target.value)
  }

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

  const [searchValue, setSearchValue] = useState("");

  const changeSearchValue = (e) =>{
    setSearchValue(e.target.value)
  }

  const resetFilters = () =>{
    setType(typesList[0].value)
    setFavoritesOnly(false)
    setSearchValue("")
    window.scrollTo(0,0)
  }

  return(
      <>
        <NavBar typesList={typesList} type={type} changeType={changeType} favoriteFilter={favoritesOnly} toggleFavoritesOnly={toggleFavoritesOnly} searchValue={searchValue} changeSearchValue={changeSearchValue} resetFilters={resetFilters}/>
        <Body type={type} favoriteFilter={favoritesOnly} database={database} toggleFavoritePokemon={toggleFavoritePokemon} searchValue={searchValue}/>
        <Footer/>
      </>
      
    )
}