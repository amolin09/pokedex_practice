import PokeCard from "../PokeCard/PokeCard"
import { useState, useEffect } from "react"
import PokeModal from "../PokeModal/pokeModal"
import "./Body.css"
import axios from "axios";

export default function Body({type, favoriteFilter, database, toggleFavoritePokemon, searchValue}){
    let [fetchedPokeData, setFetchedPokeData] = useState([]);
    const [singlePokeData, setSinglePokeData] = useState({});
    const [pokePicker, setPokePicker] = useState(0)
    const [openPokeModal, setOpenPokeModal] = useState(false);

    const basePokeURL = `https://pokeapi.co/api/v2/pokemon`;

    // useEffect(()=>{

    //     console.log(singlePokeData)
    // })

    const getPokeData = async(pokeId) => {
        
         return axios.get(basePokeURL + '/' + pokeId)
        .then((res)=>{
            setFetchedPokeData([...fetchedPokeData, res.data])
            return res.data;
        })
    }
    
    const handleOpenPokeModal = async (e) => {

        let pokeId = Number(e.currentTarget.id)
        setPokePicker(pokeId)
        let pokeEntryExists = fetchedPokeData.some((obj) => obj.id === pokeId)
        console.log(pokeEntryExists)
        if(!pokeEntryExists){
            const data = await getPokeData(pokeId)
            setSinglePokeData(data)
        }
        else{
            setSinglePokeData(fetchedPokeData.find((obj) => obj.id === pokeId))
        }
        console.log(fetchedPokeData)
        setOpenPokeModal(true)
    }

    const handleClosePokeModal = () => setOpenPokeModal(false);   



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

    let filteredPokeData = database;

    if(favoriteFilter === true){
        filteredPokeData = filteredPokeData.filter((pokemon)=>pokemon.isFavorite===true)
    }

    if(type !== "All"){
        filteredPokeData = filteredPokeData.filter((pokemon)=>pokemon.pokeType1 === type||pokemon.pokeType2 === type)
    }

    if(searchValue !== ""){
        filteredPokeData = filteredPokeData.filter(searchNameFilter)
    }

    PokeData = filteredPokeData.map((pokemon)=>{
        return(
            <PokeCard key={pokemon.pokeNum} pokeNum={pokemon.pokeNum} pokeName={pokemon.pokeName} pokeType1={pokemon.pokeType1} pokeType2={pokemon.pokeType2} isFavorite={pokemon.isFavorite} toggleFavoritePokemon={toggleFavoritePokemon} handleOpenPokeModal={handleOpenPokeModal}/>
        )
    })

    return(
        <div className="Body">
            {PokeData.length === 0? <h1 className="no-results">No Results Found</h1>: <></>}
            {PokeData}
            {openPokeModal ? <PokeModal openPokeModal={openPokeModal} handleClosePokeModal={handleClosePokeModal} pokePicker={pokePicker} pokeData={singlePokeData}/> : <></>}
        </div>
    )

}