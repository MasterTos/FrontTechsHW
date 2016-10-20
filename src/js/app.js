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
            pic: "",
            name: "Bulbasaur",
            type: "Grass / Poison",
            rarity: "Uncommon"
        }, {
            number: "#002",
            pic: "",
            name: "Ivysaur",
            type: "Grass / Poison",
            rarity: "Very Rare"
        }, {
            number: "#003",
            pic: "",
            name: "Venusaur",
            type: "Grass / Poison",
            rarity: "Super Rare"
        }, {
            number: "#004",
            pic: "",
            name: "Charmander",
            type: "Fire",
            rarity: "Rare"
        }, {
            number: "#005",
            pic: "",
            name: "Charmeleon",
            type: "Fire",
            rarity: "Super Rare"
        }, {
            number: "#006",
            pic: "",
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
