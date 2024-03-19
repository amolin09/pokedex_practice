import "./NavBar.css"
import { Input } from "@mui/base/Input";

function NavBar({typesList, type, changeType, favoriteFilter, toggleFavoritesOnly, searchValue, changeSearchValue, resetFilters}){

    return(
        <div className="Nav">
            <div className="controls">
                <span id="pokemon-title" onClick={resetFilters}>Pokemon</span>    
            </div>
            
            <div className="controls">
                <label htmlFor="type">Filter by Type</label>
                    <select value={type} onChange={changeType}>
                        {typesList.map(o => (<option key={o.value} value={o.value}>{o.value}</option>))}
                   </select>
            </div>

            <div className="controls">
                <Input value={searchValue} onChange={changeSearchValue} placeholder="Search by Name"/>
            </div>

            <div className="controls">
                <button onClick={toggleFavoritesOnly}>Toggle Favorites</button>
                {favoriteFilter ? <span style= {{marginLeft: "10px", color: "white", textDecorationLine: "underline"}}>Showing Favorites Only</span> : <></>}
            </div>
            
            
        </div>
    )
}

export default NavBar