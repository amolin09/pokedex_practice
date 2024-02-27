import "./NavBar.css"
import { Input } from "@mui/base/Input";

function NavBar({typesList, type, changeType, favoriteFilter, toggleFavoritesOnly, searchValue, changeSearchValue}){
//needs to be moved to PokeDex 


// const [type, setType] = useState(typesList[0].value)
//needs to be moved to Pokedex
    return(
        <div className="Nav">
            <div className="controls">
                
                    Pokemon
                
            </div>
            
            <div className="controls">
                <label htmlFor="type">Filter by Type</label>
                    <select value={type} onChange={changeType}>
                        {typesList.map(o => (<option key={o.value} value={o.value}>{o.value}</option>))}
                   </select>
            </div>

            <div className="controls">
                <button onClick={toggleFavoritesOnly}>Filter Favorites</button>
                {favoriteFilter ? <>Showing Favorites Only</> : <></>}
            </div>
            
            <div className="controls">
                <Input value={searchValue} onChange={changeSearchValue} placeholder="Search by Name"/>
            </div>
        </div>
    )
}

export default NavBar