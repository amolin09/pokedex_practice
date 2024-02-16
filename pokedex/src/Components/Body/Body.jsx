import PokeCard from "../PokeCard/PokeCard"
import { useState, useEffect } from "react"
import "./Body.css"
import db from "../../"
import axios from "axios";

export default function Body(){

    const  pokeURL = "https://pokeapi.co/api/v2/pokemon/?limit=200"

    let [pokeData, setPokeData] = useState([]);

    useEffect(()=>{
        getPokeData()
    }, [])

    const getPokeData = async() => {
        axios.get(pokeURL)
        .then((res)=>{
            setPokeData(res.data.results)
        })
    }

    const pokedex = pokeData.map((pokemon, id)=> {
        return(
            <PokeCard key={id+1} pokeNum={id+1} pokeName={pokemon.name}/>
                        
        )})

    return(
        <div className="Body">{pokedex}</div>
    )
    
}