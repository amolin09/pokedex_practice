const db = [
    {pokeNum: 1, pokeName: "Bulbasaur", pokeType1: "Grass", pokeType2: "Poison", isFavorite: false}, 
    {pokeNum: 2, pokeName: "Ivysaur", pokeType1: "Grass", pokeType2: "Poison", isFavorite: false}, 
    {pokeNum: 3, pokeName: "Venusaur", pokeType1: "Grass", pokeType2: "Poison", isFavorite: false}, 
    {pokeNum: 4, pokeName: "Charmander", pokeType1: "Fire", isFavorite: false}, 
    {pokeNum: 5, pokeName: "Charmeleon", pokeType1: "Fire", isFavorite: false}, 

    {pokeNum: 6, pokeName: "Charizard", pokeType1: "Fire", pokeType2: "Flying", isFavorite: false}, 
    {pokeNum: 7, pokeName: "Squirtle", pokeType1: "Water", isFavorite: false}, 
    {pokeNum: 8, pokeName: "Wartortle", pokeType1: "Water", isFavorite: false}, 
    {pokeNum: 9, pokeName: "Blastoise", pokeType1: "Water", isFavorite: false}, 
    {pokeNum: 10, pokeName: "Caterpie", pokeType1: "Bug", isFavorite: false},

    {pokeNum: 11, pokeName: "Metapod", pokeType1: "Bug", isFavorite: false}, 
    {pokeNum: 12, pokeName: "Butterfree", pokeType1: "Bug", pokeType2: "Flying", isFavorite: false}, 
    {pokeNum: 13, pokeName: "Weedle", pokeType1: "Bug", pokeType2: "Poison", isFavorite: false}, 
    {pokeNum: 14, pokeName: "Kakuna", pokeType1: "Bug", pokeType2: "Poison", isFavorite: false}, 
    {pokeNum: 15, pokeName: "Beedrill", pokeType1: "Bug", pokeType2: "Poison", isFavorite: false},

    {pokeNum: 16, pokeName: "Pidgey", pokeType1: "Normal", pokeType2: "Flying", isFavorite: false}, 
    {pokeNum: 17, pokeName: "Pidgeotto", pokeType1: "Normal", pokeType2: "Flying", isFavorite: false}, 
    {pokeNum: 18, pokeName: "Pidgeot", pokeType1: "Normal", pokeType2: "Flying", isFavorite: false}, 
    {pokeNum: 19, pokeName: "Rattata", pokeType1: "Normal", isFavorite: false}, 
    {pokeNum: 20, pokeName: "Raticate", pokeType1: "Normal", isFavorite: false},

    {pokeNum: 21, pokeName: "Spearow", pokeType1: "Normal", pokeType2: "Flying", isFavorite: false}, 
    {pokeNum: 22, pokeName: "Fearow", pokeType1: "Normal", pokeType2: "Flying", isFavorite: false}, 
    {pokeNum: 23, pokeName: "Ekans", pokeType1: "Poison", isFavorite: false}, 
    {pokeNum: 24, pokeName: "Arbok", pokeType1: "Poison", isFavorite: false}, 
    {pokeNum: 25, pokeName: "Pikachu", pokeType1: "Electric", isFavorite: false},

    {pokeNum: 26, pokeName: "Raichu", pokeType1: "Electric", isFavorite: false}, 
    {pokeNum: 27, pokeName: "Sandshrew", pokeType1: "Ground", isFavorite: false}, 
    {pokeNum: 28, pokeName: "Sandslash", pokeType1: "Ground", isFavorite: false}, 
    {pokeNum: 29, pokeName: "Nidoran", pokeType1: "Poison", isFavorite: false}, 
    {pokeNum: 30, pokeName: "Nidorina", pokeType1: "Poison", isFavorite: false},

    {pokeNum: 31, pokeName: "Nidoqueen", pokeType1: "Poison", pokeType2: "Ground", isFavorite: false}, 
    {pokeNum: 32, pokeName: "Nidoran", pokeType1: "Poison", isFavorite: false}, 
    {pokeNum: 33, pokeName: "Nidorino", pokeType1: "Poison", isFavorite: false}, 
    {pokeNum: 34, pokeName: "Nidoking", pokeType1: "Poison", pokeType2: "Ground", isFavorite: false}, 
    {pokeNum: 35, pokeName: "Clefairy", pokeType1: "Fairy", isFavorite: false}, 

    {pokeNum: 36, pokeName: "Clefable", pokeType1: "Fairy", isFavorite: false}, 
    {pokeNum: 37, pokeName: "Vulpix", pokeType1: "Fire", isFavorite: false}, 
    {pokeNum: 38, pokeName: "Ninetales", pokeType1: "Fire", isFavorite: false}, 
    {pokeNum: 39, pokeName: "Jigglypuff", pokeType1: "Normal", pokeType2: "Fairy", isFavorite: false}, 
    {pokeNum: 40, pokeName: "Wigglytuff", pokeType1: "Normal", pokeType2: "Fairy", isFavorite: false},

    {pokeNum: 41, pokeName: "Zubat", pokeType1: "Poison", pokeType2: "Flying", isFavorite: false}, 
    {pokeNum: 42, pokeName: "Golbat", pokeType1: "Poison", pokeType2: "Flying", isFavorite: false}, 
    {pokeNum: 43, pokeName: "Oddish", pokeType1: "Grass", pokeType2:  "Poison", isFavorite: false}, 
    {pokeNum: 44, pokeName: "Gloom", pokeType1: "Grass", pokeType2: "Poison", isFavorite: false}, 
    {pokeNum: 45, pokeName: "Vileplume", pokeType1: "Grass", pokeType2: "Poison", isFavorite: false},

    {pokeNum: 46, pokeName: "Paras", pokeType1: "Bug", pokeType2: "Grass", isFavorite: false}, 
    {pokeNum: 47, pokeName: "Parasect", pokeType1: "Bug", pokeType2: "Grass", isFavorite: false}, 
    {pokeNum: 48, pokeName: "Venonat", pokeType1: "Bug", pokeType2: "Poison", isFavorite: false}, 
    {pokeNum: 49, pokeName: "Venomoth", pokeType1: "Bug", pokeType2: "Poison", isFavorite: false}, 
    {pokeNum: 50, pokeName: "Diglett", pokeType1: "Ground", isFavorite: false},

    {pokeNum: 51, pokeName: "Dugtrio", pokeType1: "Ground", isFavorite: false}, 
    {pokeNum: 52, pokeName: "Meowth", pokeType1: "Normal", isFavorite: false}, 
    {pokeNum: 53, pokeName: "Persian", pokeType1: "Normal", isFavorite: false}, 
    {pokeNum: 54, pokeName: "Psyduck", pokeType1: "Water", isFavorite: false}, 
    {pokeNum: 55, pokeName: "Golduck", pokeType1: "Water", isFavorite: false},

    {pokeNum: 56, pokeName: "Mankey", pokeType1: "Fighting", isFavorite: false}, 
    {pokeNum: 57, pokeName: "Primeape", pokeType1: "Fighting", isFavorite: false}, 
    {pokeNum: 58, pokeName: "Growlithe", pokeType1: "Fire", isFavorite: false}, 
    {pokeNum: 59, pokeName: "Arcanine", pokeType1: "Fire", isFavorite: false}, 
    {pokeNum: 60, pokeName: "Poliwag", pokeType1: "Water", isFavorite: false},

    {pokeNum: 61, pokeName: "Poliwhirl", pokeType1: "Water", isFavorite: false}, 
    {pokeNum: 62, pokeName: "Poliwrath", pokeType1: "Water", pokeType2: "Fighting", isFavorite: false}, 
    {pokeNum: 63, pokeName: "Abra", pokeType1: "Psychic", isFavorite: false}, 
    {pokeNum: 64, pokeName: "Kadabra", pokeType1: "Psychic", isFavorite: false}, 
    {pokeNum: 65, pokeName: "Alakazam", pokeType1: "Psychic", isFavorite: false}, 

    {pokeNum: 66, pokeName: "Machop", pokeType1: "Fighting", isFavorite: false}, 
    {pokeNum: 67, pokeName: "Machoke", pokeType1: "Fighting", isFavorite: false}, 
    {pokeNum: 68, pokeName: "Machamp", pokeType1: "Fighting", isFavorite: false}, 
    {pokeNum: 69, pokeName: "Bellsprout", pokeType1: "Grass", pokeType2: "Poison", isFavorite: false}, 
    {pokeNum: 70, pokeName: "Weepinbell", pokeType1: "Grass", pokeType2: "Poison", isFavorite: false},

    {pokeNum: 71, pokeName: "Victreebel", pokeType1: "Grass", pokeType2: "Poison", isFavorite: false}, 
    {pokeNum: 72, pokeName: "Tentacool", pokeType1: "Water", pokeType2: "Poison", isFavorite: false}, 
    {pokeNum: 73, pokeName: "Tentacruel", pokeType1: "Water", pokeType2: "Poison", isFavorite: false}, 
    {pokeNum: 74, pokeName: "Geodude", pokeType1: "Rock", pokeType2: "Ground", isFavorite: false}, 
    {pokeNum: 75, pokeName: "Graveler", pokeType1: "Rock", pokeType2: "Ground", isFavorite: false},

    {pokeNum: 76, pokeName: "Golem", pokeType1: "Rock", pokeType2: "Ground", isFavorite: false}, 
    {pokeNum: 77, pokeName: "Ponyta", pokeType1: "Fire", isFavorite: false}, 
    {pokeNum: 78, pokeName: "Rapidash", pokeType1: "Fire", isFavorite: false}, 
    {pokeNum: 79, pokeName: "Slowpoke", pokeType1: "Water", pokeType2: "Psychic", isFavorite: false}, 
    {pokeNum: 80, pokeName: "Slowbro", pokeType1: "Water", pokeType2: "Psychic", isFavorite: false},

    {pokeNum: 81, pokeName: "Magnemite", pokeType1: "Electric", pokeType2: "Steel", isFavorite: false}, 
    {pokeNum: 82, pokeName: "Magneton", pokeType1: "Electric", pokeType2: "Steel", isFavorite: false}, 
    {pokeNum: 83, pokeName: "Farfetch'd", pokeType1: "Normal", pokeType2: "Flying", isFavorite: false}, 
    {pokeNum: 84, pokeName: "Doduo", pokeType1: "Normal", pokeType2: "Flying", isFavorite: false}, 
    {pokeNum: 85, pokeName: "Dodrio", pokeType1: "Normal", pokeType2: "Flying", isFavorite: false},

    {pokeNum: 86, pokeName: "Seel", pokeType1: "Water", isFavorite: false}, 
    {pokeNum: 87, pokeName: "Dewgong", pokeType1: "Water", pokeType2:  "Ice", isFavorite: false}, 
    {pokeNum: 88, pokeName: "Grimer", pokeType1: "Poison", isFavorite: false}, 
    {pokeNum: 89, pokeName: "Muk", pokeType1: "Poison", isFavorite: false}, 
    {pokeNum: 90, pokeName: "Shellder", pokeType1: "Water", isFavorite: false},

    {pokeNum: 91, pokeName: "Cloyster", pokeType1: "Water", pokeType2: "Ice", isFavorite: false}, 
    {pokeNum: 92, pokeName: "Gastly", pokeType1: "Ghost", pokeType2: "Poison", isFavorite: false}, 
    {pokeNum: 93, pokeName: "Haunter", pokeType1: "Ghost", pokeType2: "Poison", isFavorite: false}, 
    {pokeNum: 94, pokeName: "Gengar", pokeType1: "Ghost", pokeType2: "Poison", isFavorite: false}, 
    {pokeNum: 95, pokeName: "Onix", pokeType1: "Rock", pokeType2: "Ground", isFavorite: false}, 

    {pokeNum: 96, pokeName: "Drowzee", pokeType1: "Psychic", isFavorite: false}, 
    {pokeNum: 97, pokeName: "Hypno", pokeType1: "Psychic", isFavorite: false}, 
    {pokeNum: 98, pokeName: "Krabby", pokeType1: "Water", isFavorite: false}, 
    {pokeNum: 99, pokeName: "Kingler", pokeType1: "Water", isFavorite: false}, 
    {pokeNum: 100, pokeName: "Voltorb", pokeType1: "Electric", isFavorite: false},

    {pokeNum: 101, pokeName: "Electrode", pokeType1: "Electric", isFavorite: false}, 
    {pokeNum: 102, pokeName: "Exeggcute", pokeType1: "Grass", pokeType2: "Psychic", isFavorite: false}, 
    {pokeNum: 103, pokeName: "Exeggutor", pokeType1: "Grass", pokeType2: "Psychic", isFavorite: false}, 
    {pokeNum: 104, pokeName: "Cubone", pokeType1: "Ground", isFavorite: false}, 
    {pokeNum: 105, pokeName: "Marowak", pokeType1: "Ground", isFavorite: false},

    {pokeNum: 106, pokeName: "Hitmonlee", pokeType1: "Fighting", isFavorite: false}, 
    {pokeNum: 107, pokeName: "Hitmonchan", pokeType1: "Fighting", isFavorite: false}, 
    {pokeNum: 108, pokeName: "Lickitung", pokeType1: "Normal", isFavorite: false}, 
    {pokeNum: 109, pokeName: "Koffing", pokeType1: "Poison", isFavorite: false}, 
    {pokeNum: 110, pokeName: "Weezing", pokeType1: "Poison", isFavorite: false},

    {pokeNum: 111, pokeName: "Rhyhorn", pokeType1: "Ground", pokeType2: "Rock", isFavorite: false}, 
    {pokeNum: 112, pokeName: "Rhydon", pokeType1: "Ground", pokeType2: "Rock", isFavorite: false}, 
    {pokeNum: 113, pokeName: "Chansey", pokeType1: "Normal", isFavorite: false}, 
    {pokeNum: 114, pokeName: "Tangela", pokeType1: "Grass", isFavorite: false}, 
    {pokeNum: 115, pokeName: "Kangaskhan", pokeType1: "Normal", isFavorite: false},

    {pokeNum: 116, pokeName: "Horsea", pokeType1: "Water", isFavorite: false}, 
    {pokeNum: 117, pokeName: "Seadra", pokeType1: "Water", isFavorite: false}, 
    {pokeNum: 118, pokeName: "Goldeen", pokeType1: "Water", isFavorite: false}, 
    {pokeNum: 119, pokeName: "Seaking", pokeType1: "Water", isFavorite: false}, 
    {pokeNum: 120, pokeName: "Staryu", pokeType1: "Water", isFavorite: false},

    {pokeNum: 121, pokeName: "Starmie", pokeType1: "Water", pokeType2: "Psychic", isFavorite: false}, 
    {pokeNum: 122, pokeName: "Mr. Mime", pokeType1: "Psychic", pokeType2: "Fairy", isFavorite: false}, 
    {pokeNum: 123, pokeName: "Scyther", pokeType1: "Bug", pokeType2: "Flying", isFavorite: false}, 
    {pokeNum: 124, pokeName: "Jynx", pokeType1: "Ice", pokeType2: "Psychic", isFavorite: false}, 
    {pokeNum: 125, pokeName: "Electabuzz", pokeType1: "Electric", isFavorite: false}, 

    {pokeNum: 126, pokeName: "Magmar", pokeType1: "Fire", isFavorite: false}, 
    {pokeNum: 127, pokeName: "Pinsir", pokeType1: "Bug", isFavorite: false}, 
    {pokeNum: 128, pokeName: "Tauros", pokeType1: "Normal", isFavorite: false}, 
    {pokeNum: 129, pokeName: "Magikarp", pokeType1: "Water", isFavorite: false}, 
    {pokeNum: 130, pokeName: "Gyarados", pokeType1: "Water", pokeType2: "Flying", isFavorite: false},

    {pokeNum: 131, pokeName: "Lapras", pokeType1: "Water", pokeType2: "Ice", isFavorite: false}, 
    {pokeNum: 132, pokeName: "Ditto", pokeType1: "Normal", isFavorite: false}, 
    {pokeNum: 133, pokeName: "Eevee", pokeType1: "Normal", isFavorite: false}, 
    {pokeNum: 134, pokeName: "Vaporeon", pokeType1: "Water", isFavorite: false}, 
    {pokeNum: 135, pokeName: "Jolteon", pokeType1: "Flareon", isFavorite: false},

    {pokeNum: 136, pokeName: "Flareon", pokeType1: "Fire", isFavorite: false}, 
    {pokeNum: 137, pokeName: "Porygon", pokeType1: "Normal", isFavorite: false}, 
    {pokeNum: 138, pokeName: "Omanyte", pokeType1: "Rock", pokeType2: "Water", isFavorite: false}, 
    {pokeNum: 139, pokeName: "Omastar", pokeType1: "Rock", pokeType2: "Water", isFavorite: false}, 
    {pokeNum: 140, pokeName: "Kabuto", pokeType1: "Rock", pokeType2: "Water", isFavorite: false},

    {pokeNum: 141, pokeName: "Kabutops", pokeType1: "Rock", pokeType2: "Water", isFavorite: false}, 
    {pokeNum: 142, pokeName: "Aerodactyl", pokeType1: "Rock", pokeType2: "Flying", isFavorite: false}, 
    {pokeNum: 143, pokeName: "Snorlax", pokeType1: "Normal", isFavorite: false}, 
    {pokeNum: 144, pokeName: "Articuno", pokeType1: "Ice", pokeType2: "Flying", isFavorite: false}, 
    {pokeNum: 145, pokeName: "Zapdos", pokeType1: "Electric", pokeType2: "Flying", isFavorite: false},

    {pokeNum: 146, pokeName: "Moltres", pokeType1: "Fire", pokeType2: "Flying", isFavorite: false}, 
    {pokeNum: 147, pokeName: "Dratini", pokeType1: "Dragon", isFavorite: false}, 
    {pokeNum: 148, pokeName: "Dragonair", pokeType1: "Dragon", isFavorite: false}, 
    {pokeNum: 149, pokeName: "Dragonite", pokeType1: "Dragon", pokeType2: "Flying", isFavorite: false}, 
    {pokeNum: 150, pokeName: "Mewtwo", pokeType1: "Psychic", isFavorite: false}, 
    {pokeNum: 151, pokeName: "Mew", pokeType1: "Psychic", isFavorite: false}
]

export default db;

