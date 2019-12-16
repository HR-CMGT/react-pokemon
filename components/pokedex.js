class PokeDex extends React.Component {
    constructor() {
        super()
        this.state = { 
            pokemon: [{name:"Ekans"}, {name:"Charmander"}, {name:"Snorlax"}]
        }
    }

    /*
    async loadPokemon() {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=9`)
        const json = await response.json()
        console.log(json.results)
    }
    */   

    render() {
        let thumbs = this.state.pokemon.map((pokemon, i) =>
            <div key={i}>{pokemon.name}</div>
        )

        return (
            <div className="pokedex">
                <div>
                    <button>Load next 9 Pokémon</button>
                </div>
                <div>
                    Caught: 0
                </div>
                <div className="thumbnails">
                    {thumbs}
                </div>
            </div>
        )   
    }
}