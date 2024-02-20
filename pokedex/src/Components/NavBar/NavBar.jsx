import "./NavBar.css"

function NavBar({type, changeType, favoriteFilter, toggleFavoritesOnly}){
//needs to be moved to PokeDex 
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

// const [type, setType] = useState(typesList[0].value)
//needs to be moved to Pokedex
    return(
        <div className="Nav">
            <div className="controls">
                Pokemon!
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
            
        </div>
    )
}

export default NavBar