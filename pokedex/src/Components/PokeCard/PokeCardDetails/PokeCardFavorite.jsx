import FavoriteBorderOutlined from "@mui/icons-material/FavoriteBorderOutlined";
import "./PokeCardDetails.css"
import { red } from '@mui/material/colors'


export default function PokeCardFavorite(){
    return(
        <div className="detailBlock" id="favoriteIcon">
            <div id="iconContainer">
             <FavoriteBorderOutlined sx={{ color: red[500] }}/>
            </div>
        </div>
    )
}