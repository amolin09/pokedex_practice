import FavoriteBorderOutlined from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from '@mui/icons-material/Favorite'
import "./PokeCardDetails.css"
import { useState } from 'react'
import { red } from '@mui/material/colors'


export default function PokeCardFavorite({pokeNum, isFavorite, toggleFavoritePokemon}){

    const [favorite, setFavorite] = useState(isFavorite)

    const toggleFavorite = () =>{
        setFavorite(favorite => !favorite)
        toggleFavoritePokemon(pokeNum)
    }

    return(
        <div className="detailBlock" id="favoriteIcon">
            <div id="iconContainer" onClick = {toggleFavorite}>
                {favorite ? <FavoriteIcon sx={{ color: red[500]}}/> : <FavoriteBorderOutlined sx={{ color: red[500] }}/>}
            </div>
        </div>
    )
}