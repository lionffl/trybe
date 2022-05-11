import React from "react";
import Pokemon from "../components/Pokemon";
import pokemons from '../data'


class Pokedex extends React.Component {
  
  state = {
    pokemonIndex: 0,
  }

  nextPokemon = () => {
    if (this.state.pokemonIndex >= pokemons.length-1) this.setState({ pokemonIndex: 0 });
    else { this.setState({ pokemonIndex: this.state.pokemonIndex + 1 }) };
}
  render() {
    const pokedex = pokemons.map((pokemon) => <Pokemon key={pokemon.id} pokemon={pokemon} />);
    return (
      <>
        <h1>Pokedex</h1>
        <section className="pokedex">
          {pokedex[this.state.pokemonIndex]}
          <button onClick={this.nextPokemon} className="next-btn">Next Pokemon</button>
        </section>
      </>
    )
  }
}

export default Pokedex;