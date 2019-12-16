class Card extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            image:"",
            height:0,
            weight:0
        }
    }

    componentDidMount() {
        
    }

    render() {
        return (
            <div className="card">
                <div>Bulbasaur</div>
                <div><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" /></div>
                <div>
                    Height: 0<br/>
                    Weight: 0
                </div>
                <div><button>Catch!</button></div>
            </div>
        );
    }
}