import React from "react";
import getPokemonInfo from "./getPokemonInfo";

class Pokemon extends React.Component {
  render(){

    const pokemon = this.props.pokemon;
    const { value, measurementUnit } = pokemon.averageWeight;

    return (
    <article className="pokemon">
      <img src={pokemon.image} alt={pokemon.name} onClick={getPokemonInfo}></img>
      <h4>{pokemon.name}</h4>
      <p>Element/Type: {pokemon.type}</p>
      <p>Weight: {value} {measurementUnit}</p>
    </article>
    )
  }
}

export default Pokemon;