import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => (
    <header>
        <h1>{props.title}</h1>
        <SearchForm/>
    </header>
)

const Footer = () => (
    <footer>
        <p>Pokedex by MasterTos</p>
        <p>Reference www.pokego.org/pokedex/</p>
    </footer>
)

const SearchForm = () => {
    return (
        <form>
            <input type="text"/>
            <button type="submit">Search</button>
        </form>
    )
}

const Content = (props) => (
    <section>
        <Items items={props.items}/>
    </section>
)

const Pokemons = (props) => {
    console.log(props.pokemons)
    return (
        <table>
            {props
                .pokemons
                .map(pokemon => (<PokemonDetail
                    number={pokemon.number}
                    pic={pokemon.pic}
                    name={pokemon.name}
                    type={pokemon.type}
                    rarity={pokemon.rarity}/>))}
        </table>
    )
}

const Image = (props) => (
    <img src={props.pic} alt=""/>
)

const PokemonDetail = (props) => (
    <tr>
        <th>{props.number}</th>
        <th>{props.pic}</th>
        <th>{props.name}</th>
        <th>{props.type}</th>
        <th>{props.rarity}</th>
    </tr>
)

const App = () => {
    const title = 'My Pokedex'
    const pokemons = [
        {
            number: "#",
            pic: "Picture",
            name: "Name",
            type: "Type",
            rarity: "Rarity"
        }, {
            number: "#001",
            pic: <Image pic="/img/001.png"/>,
            name: "Bulbasaur",
            type: "Grass / Poison",
            rarity: "Uncommon"
        }, {
            number: "#002",
            pic: <Image pic="/img/002.png"/>,
            name: "Ivysaur",
            type: "Grass / Poison",
            rarity: "Very Rare"
        }, {
            number: "#003",
            pic: <Image pic="/img/003.png"/>,
            name: "Venusaur",
            type: "Grass / Poison",
            rarity: "Super Rare"
        }, {
            number: "#004",
            pic: <Image pic="/img/004.png"/>,
            name: "Charmander",
            type: "Fire",
            rarity: "Rare"
        }, {
            number: "#005",
            pic: <Image pic="/img/005.png"/>,
            name: "Charmeleon",
            type: "Fire",
            rarity: "Super Rare"
        }, {
            number: "#006",
            pic: <Image pic="/img/006.png"/>,
            name: "Charizard",
            type: "Fire",
            rarity: "Super Rare"
        }
    ]
    return (
        <section>
            <Header title={title}/>
            <Pokemons pokemons={pokemons}/>
            <Footer/>
        </section>
    )
}

const element = document.getElementById('app')
ReactDOM.render(
    <App/>, element)
