import React from "react";
import Pokemon from "../components/Pokemon";
import pokemons from '../data'


class Pokedex extends React.Component {
  render() {
    const pokedex = pokemons.map((pokemon) => <Pokemon key={pokemon.id} pokemon={pokemon} />);
    return (
      <>
        <h1>Pokedex</h1>
        <section className="pokedex">{pokedex}</section>
      </>
    )
  }
}

export default Pokedex;