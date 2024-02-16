import PokeCard from "../PokeCard/PokeCard"
import "./Body.css"

export default function Body(){
    
    const db = [{pokeNum: 1, pokeName: "Bulbasaur", pokeType: "Grass, Poison"}, 
                {pokeNum: 2, pokeName: "Ivysaur", pokeType: "Grass, Poison"}, 
                {pokeNum: 3, pokeName: "Venusaur", pokeType: "Grass, Poison"}, 
                {pokeNum: 4, pokeName: "Charmander", pokeType: "Fire"}, 
                {pokeNum: 5, pokeName: "Charmeleon", pokeType: "Fire"}, 

                {pokeNum: 6, pokeName: "Charizard", pokeType: "Fire, Flying"}, 
                {pokeNum: 7, pokeName: "Squirtle", pokeType: "Water"}, 
                {pokeNum: 8, pokeName: "Wartortle", pokeType: "Water"}, 
                {pokeNum: 9, pokeName: "Blastoise", pokeType: "Water"}, 
                {pokeNum: 10, pokeName: "Caterpie", pokeType: "Bug"},

                {pokeNum: 11, pokeName: "Metapod", pokeType: "Bug"}, 
                {pokeNum: 12, pokeName: "Butterfree", pokeType: "Bug, Flying"}, 
                {pokeNum: 13, pokeName: "Weedle", pokeType: "Bug, Poison"}, 
                {pokeNum: 14, pokeName: "Kakuna", pokeType: "Bug, Poison"}, 
                {pokeNum: 15, pokeName: "Beedrill", pokeType: "Bug, Poison"},

                {pokeNum: 16, pokeName: "Pidgey", pokeType: "Normal, Flying"}, 
                {pokeNum: 17, pokeName: "Pidgeotto", pokeType: "Normal, Flying"}, 
                {pokeNum: 18, pokeName: "Pidgeot", pokeType: "Normal, Flying"}, 
                {pokeNum: 19, pokeName: "Rattata", pokeType: "Normal"}, 
                {pokeNum: 20, pokeName: "Raticate", pokeType: "Normal"},

                {pokeNum: 21, pokeName: "Spearow", pokeType: "Normal, Flying"}, 
                {pokeNum: 22, pokeName: "Fearow", pokeType: "Normal, Flying"}, 
                {pokeNum: 23, pokeName: "Ekans", pokeType: "Poison"}, 
                {pokeNum: 24, pokeName: "Arbok", pokeType: "Poison"}, 
                {pokeNum: 25, pokeName: "Pikachu", pokeType: "Electric"},

                {pokeNum: 26, pokeName: "Raichu", pokeType: "Electric"}, 
                {pokeNum: 27, pokeName: "Sandshrew", pokeType: "Ground"}, 
                {pokeNum: 28, pokeName: "Sandslash", pokeType: "Ground"}, 
                {pokeNum: 29, pokeName: "Nidoran", pokeType: "Poison"}, 
                {pokeNum: 30, pokeName: "Nidorina", pokeType: "Poison"},

                {pokeNum: 31, pokeName: "Nidoqueen", pokeType: "Poison, Ground"}, 
                {pokeNum: 32, pokeName: "Nidoran", pokeType: "Poison"}, 
                {pokeNum: 33, pokeName: "Nidorino", pokeType: "Poison"}, 
                {pokeNum: 34, pokeName: "Nidoking", pokeType: "Poison, Ground"}, 
                {pokeNum: 35, pokeName: "Clefairy", pokeType: "Fairy"}, 

                {pokeNum: 36, pokeName: "Clefable", pokeType: "Fairy"}, 
                {pokeNum: 37, pokeName: "Vulpix", pokeType: "Fire"}, 
                {pokeNum: 38, pokeName: "Ninetales", pokeType: "Fire"}, 
                {pokeNum: 39, pokeName: "Jigglypuff", pokeType: "Normal, Fairy"}, 
                {pokeNum: 40, pokeName: "Wigglytuff", pokeType: "Normal, Fairy"},

                {pokeNum: 41, pokeName: "Zubat", pokeType: "Poison, Flying"}, 
                {pokeNum: 42, pokeName: "Golbat", pokeType: "Poison, Flying"}, 
                {pokeNum: 43, pokeName: "Oddish", pokeType: "Grass, Poison"}, 
                {pokeNum: 44, pokeName: "Gloom", pokeType: "Grass, Poison"}, 
                {pokeNum: 45, pokeName: "Vileplume", pokeType: "Grass, Poison"},

                {pokeNum: 46, pokeName: "Paras", pokeType: "Bug, Grass"}, 
                {pokeNum: 47, pokeName: "Parasect", pokeType: "Bug, Grass"}, 
                {pokeNum: 48, pokeName: "Venonat", pokeType: "Bug, Poison"}, 
                {pokeNum: 49, pokeName: "Venomoth", pokeType: "Bug, Poison"}, 
                {pokeNum: 50, pokeName: "Diglett", pokeType: "Ground"},

                {pokeNum: 51, pokeName: "Dugtrio", pokeType: "Ground"}, 
                {pokeNum: 52, pokeName: "Meowth", pokeType: "Normal"}, 
                {pokeNum: 53, pokeName: "Persian", pokeType: "Normal"}, 
                {pokeNum: 54, pokeName: "Psyduck", pokeType: "Water"}, 
                {pokeNum: 55, pokeName: "Golduck", pokeType: "Water"},

                {pokeNum: 56, pokeName: "Mankey", pokeType: "Fighting"}, 
                {pokeNum: 57, pokeName: "Primeape", pokeType: "Fighting"}, 
                {pokeNum: 58, pokeName: "Growlithe", pokeType: "Fire"}, 
                {pokeNum: 59, pokeName: "Arcanine", pokeType: "Fire"}, 
                {pokeNum: 60, pokeName: "Poliwag", pokeType: "Water"},

                {pokeNum: 61, pokeName: "Poliwhirl", pokeType: "Water"}, 
                {pokeNum: 62, pokeName: "Poliwrath", pokeType: "Water, Fighting"}, 
                {pokeNum: 63, pokeName: "Abra", pokeType: "Psychic"}, 
                {pokeNum: 64, pokeName: "Kadabra", pokeType: "Psychic"}, 
                {pokeNum: 65, pokeName: "Alakazam", pokeType: "Psychic"}, 

                {pokeNum: 66, pokeName: "Machop", pokeType: "Fighting"}, 
                {pokeNum: 67, pokeName: "Machoke", pokeType: "Fighting"}, 
                {pokeNum: 68, pokeName: "Machamp", pokeType: "Fighting"}, 
                {pokeNum: 69, pokeName: "Bellsprout", pokeType: "Grass, Poison"}, 
                {pokeNum: 70, pokeName: "Weepinbell", pokeType: "Grass, Poison"},

                {pokeNum: 71, pokeName: "Victreebel", pokeType: "Grass, Poison"}, 
                {pokeNum: 72, pokeName: "Tentacool", pokeType: "Water, Poison"}, 
                {pokeNum: 73, pokeName: "Tentacruel", pokeType: "Water, Poison"}, 
                {pokeNum: 74, pokeName: "Geodude", pokeType: "Rock, Ground"}, 
                {pokeNum: 75, pokeName: "Graveler", pokeType: "Rock, Ground"},

                {pokeNum: 76, pokeName: "Golem", pokeType: "Rock, Ground"}, 
                {pokeNum: 77, pokeName: "Ponyta", pokeType: "Fire"}, 
                {pokeNum: 78, pokeName: "Rapidash", pokeType: "Fire"}, 
                {pokeNum: 79, pokeName: "Slowpoke", pokeType: "Water, Psychic"}, 
                {pokeNum: 80, pokeName: "Slowbro", pokeType: "Water, Psychic"},

                {pokeNum: 81, pokeName: "Magnemite", pokeType: "Electric, Steel"}, 
                {pokeNum: 82, pokeName: "Magneton", pokeType: "Electric, Steel"}, 
                {pokeNum: 83, pokeName: "Farfetch'd", pokeType: "Normal, Flying"}, 
                {pokeNum: 84, pokeName: "Doduo", pokeType: "Normal, Flying"}, 
                {pokeNum: 85, pokeName: "Dodrio", pokeType: "Normal, Flying"},

                {pokeNum: 86, pokeName: "Seel", pokeType: "Water"}, 
                {pokeNum: 87, pokeName: "Dewgong", pokeType: "Water, Ice"}, 
                {pokeNum: 88, pokeName: "Grimer", pokeType: "Poison"}, 
                {pokeNum: 89, pokeName: "Muk", pokeType: "Poison"}, 
                {pokeNum: 90, pokeName: "Shellder", pokeType: "Water"},

                {pokeNum: 91, pokeName: "Cloyster", pokeType: "Water, Ice"}, 
                {pokeNum: 92, pokeName: "Gastly", pokeType: "Ghost, Poison"}, 
                {pokeNum: 93, pokeName: "Haunter", pokeType: "Ghost, Poison"}, 
                {pokeNum: 94, pokeName: "Gengar", pokeType: "Ghost, Poison"}, 
                {pokeNum: 95, pokeName: "Onix", pokeType: "Rock, Ground"}, 

                {pokeNum: 96, pokeName: "Drowzee", pokeType: "Psychic"}, 
                {pokeNum: 97, pokeName: "Hypno", pokeType: "Psychic"}, 
                {pokeNum: 98, pokeName: "Krabby", pokeType: "Water"}, 
                {pokeNum: 99, pokeName: "Kingler", pokeType: "Water"}, 
                {pokeNum: 100, pokeName: "Voltorb", pokeType: "Electric"},

                {pokeNum: 101, pokeName: "Electrode", pokeType: "Electric"}, 
                {pokeNum: 102, pokeName: "Exeggcute", pokeType: "Grass, Psychic"}, 
                {pokeNum: 103, pokeName: "Exeggutor", pokeType: "Grass, Psychic"}, 
                {pokeNum: 104, pokeName: "Cubone", pokeType: "Ground"}, 
                {pokeNum: 105, pokeName: "Marowak", pokeType: "Ground"},

                {pokeNum: 106, pokeName: "Hitmonlee", pokeType: "Fighting"}, 
                {pokeNum: 107, pokeName: "Hitmonchan", pokeType: "Fighting"}, 
                {pokeNum: 108, pokeName: "Lickitung", pokeType: "Normal"}, 
                {pokeNum: 109, pokeName: "Koffing", pokeType: "Poison"}, 
                {pokeNum: 110, pokeName: "Weezing", pokeType: "Poison"},

                {pokeNum: 111, pokeName: "Rhyhorn", pokeType: "Ground, Rock"}, 
                {pokeNum: 112, pokeName: "Rhydon", pokeType: "Ground, Rock"}, 
                {pokeNum: 113, pokeName: "Chansey", pokeType: "Normal"}, 
                {pokeNum: 114, pokeName: "Tangela", pokeType: "Grass"}, 
                {pokeNum: 115, pokeName: "Kangaskhan", pokeType: "Normal"},

                {pokeNum: 116, pokeName: "Horsea", pokeType: "Water"}, 
                {pokeNum: 117, pokeName: "Seadra", pokeType: "Water"}, 
                {pokeNum: 118, pokeName: "Goldeen", pokeType: "Water"}, 
                {pokeNum: 119, pokeName: "Seaking", pokeType: "Water"}, 
                {pokeNum: 120, pokeName: "Staryu", pokeType: "Water"},

                {pokeNum: 121, pokeName: "Starmie", pokeType: "Water, Psychic"}, 
                {pokeNum: 122, pokeName: "Mr. Mime", pokeType: "Psychic, Fairy"}, 
                {pokeNum: 123, pokeName: "Scyther", pokeType: "Bug, Flying"}, 
                {pokeNum: 124, pokeName: "Jynx", pokeType: "Ice, Psychic"}, 
                {pokeNum: 125, pokeName: "Electabuzz", pokeType: "Electric"}, 

                {pokeNum: 126, pokeName: "Magmar", pokeType: "Fire"}, 
                {pokeNum: 127, pokeName: "Pinsir", pokeType: "Bug"}, 
                {pokeNum: 128, pokeName: "Tauros", pokeType: "Normal"}, 
                {pokeNum: 129, pokeName: "Magikarp", pokeType: "Water"}, 
                {pokeNum: 130, pokeName: "Gyarados", pokeType: "Water, Flying"},

                {pokeNum: 131, pokeName: "Lapras", pokeType: "Water, Ice"}, 
                {pokeNum: 132, pokeName: "Ditto", pokeType: "Normal"}, 
                {pokeNum: 133, pokeName: "Eevee", pokeType: "Normal"}, 
                {pokeNum: 134, pokeName: "Vaporeon", pokeType: "Water"}, 
                {pokeNum: 135, pokeName: "Jolteon", pokeType: "Flareon"},

                {pokeNum: 136, pokeName: "Flareon", pokeType: "Fire"}, 
                {pokeNum: 137, pokeName: "Porygon", pokeType: "Normal"}, 
                {pokeNum: 138, pokeName: "Omanyte", pokeType: "Rock, Water"}, 
                {pokeNum: 139, pokeName: "Omastar", pokeType: "Rock, Water"}, 
                {pokeNum: 140, pokeName: "Kabuto", pokeType: "Rock, Water"},

                {pokeNum: 141, pokeName: "Kabutops", pokeType: "Rock, Water"}, 
                {pokeNum: 142, pokeName: "Aerodactyl", pokeType: "Rock, Flying"}, 
                {pokeNum: 143, pokeName: "Snorlax", pokeType: "Normal"}, 
                {pokeNum: 144, pokeName: "Articuno", pokeType: "Ice, Flying"}, 
                {pokeNum: 145, pokeName: "Zapdos", pokeType: "Electric, Flying"},

                {pokeNum: 146, pokeName: "Moltres", pokeType: "Fire, Flying"}, 
                {pokeNum: 147, pokeName: "Dratini", pokeType: "Dragon"}, 
                {pokeNum: 148, pokeName: "Dragonair", pokeType: "Dragon"}, 
                {pokeNum: 149, pokeName: "Dragonite", pokeType: "Dragon, Flying"}, 
                {pokeNum: 150, pokeName: "Mewtwo", pokeType: "Psychic"}, 
                {pokeNum: 151, pokeName: "Mew", pokeType: "Psychic"}
            ]

            // const waterCheck = (pokemon) => {
            //     return pokemon.pokeType === "Water"
            // }

            // const waterFilter = db.filter(waterCheck)

           const pokedex = db.map((pokemon)=> {
            return(
                       <PokeCard key={pokemon.pokeNum} pokeNum={pokemon.pokeNum} pokeName={pokemon.pokeName} pokeType={pokemon.pokeType}/>
        )})
            return(
                <div className="Body">{pokedex}</div>
                    
            )
    
}