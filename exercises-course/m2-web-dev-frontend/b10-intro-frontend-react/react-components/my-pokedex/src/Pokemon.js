import React from "react";
import getPokemonInfo from "./getPokemonInfo";

class Pokemon extends React.Component {
  render(){

    const pokemon = this.props.pokemon;
    const { value, measurementUnit } = pokemon.averageWeight;

    return (
    <div className="pokemon">
      <img src={pokemon.image} alt={pokemon.name} onClick={getPokemonInfo}></img>
      <h3>{pokemon.name}</h3>
      <p>Element/Type: {pokemon.type}</p>
      <p>Weight: {value} {measurementUnit}</p>
    </div>
    )
  }
}

export default Pokemon;