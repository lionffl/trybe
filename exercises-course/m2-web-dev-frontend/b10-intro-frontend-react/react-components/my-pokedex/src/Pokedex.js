import React from "react";
import pokemons from "./data";
import Pokemon from "./Pokemon";

class Pokedex extends React.Component {
  render() {
    const pokedex = pokemons.map((pokemon) => {
      return <Pokemon key={pokemon.id} pokemon={pokemon} />
    });
    return (
      <div className="pokedex">
       {pokedex}
      </div>
    )
  }
}

export default Pokedex;