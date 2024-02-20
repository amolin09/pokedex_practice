import "./NavBar.css"
// import { useState } from "react"

function NavBar({favoriteFilter, toggleFavoritesOnly}){

 
    return(
        <div className="Nav">
            <div className="controls">
                Pokemon!
            </div>
            
            <div className="controls">
                <label htmlFor="type">Filter by Type</label>
                    <select name="type" id="type">
                        <option value="">None</option>
                        <option value="Normal">Normal</option>
                        <option value="Fire">Fire</option>
                        <option value="Water">Water</option>
                        <option value="Electric">Electric</option>
                        <option value="Grass">Grass</option>
                        <option value="Ice">Ice</option>
                        <option value="Fighting">Fighting</option>
                        <option value="Poison">Poison</option>
                        <option value="Ground">Ground</option>
                        <option value="Flying">Flying</option>
                        <option value="Psychic">Psychic</option>
                        <option value="Bug">Bug</option>
                        <option value="Rock">Rock</option>
                        <option value="Ghost">Ghost</option>
                        <option value="Dragon">Dragon</option>
                        <option value="Dark">Dark</option>
                        <option value="Steel">Steel</option>
                        <option value="Fairy">Fairy</option>
                   </select>
            </div>

            <div className="controls">
                <button onClick={toggleFavoritesOnly}>Filter Favorites</button>
                {favoriteFilter ? <>Showing Favorites Only</> : <></>}
            </div>
            
        </div>
    )
}

export default NavBar