import React from 'react';
import Buttons from './Buttons';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {

  state = {
    pokemonIndex: 0,
    pokedex: this.props.pokemons,
    pokemonElementFilter: ''
  }

  getNextPokemon = (filtredPokemons) => {
    const { pokemonIndex } = this.state;
    this.setState({
      pokedex: filtredPokemons,
      pokemonIndex: filtredPokemons.length === 1 ? 0 : pokemonIndex >= filtredPokemons.length - 1 ? 0 : pokemonIndex + 1
    })
  }

  setFilter = (event) => {
    this.setState({
      pokemonIndex: 0,
      pokedex: this.props.pokemons,
      pokemonElementFilter: event.target.name
    })
  }

  getPokemonInfo = (moreInfo) => {
    window.open(`${moreInfo}`, '_blank')
  }

  render() {
    const { pokedex, pokemonIndex, pokemonElementFilter } = this.state;
    const filtredPokemons = pokedex.filter((pokemon) => !pokemonElementFilter ? pokemon.type : pokemon.type === pokemonElementFilter)
    return (
      <>
        <Pokemon
          getPokemonInfoFunction={this.getPokemonInfo}
          name={filtredPokemons[pokemonIndex].name}
          type={filtredPokemons[pokemonIndex].type}
          averageWeight={filtredPokemons[pokemonIndex].averageWeight}
          image={filtredPokemons[pokemonIndex].image}
          moreInfo={filtredPokemons[pokemonIndex].moreInfo}
        />
        <Buttons
          onClickFunction={this.getNextPokemon}
          setFilterFunction={this.setFilter}
          filtredPokemons={filtredPokemons}
        />
      </>
    )
  }
}

export default Pokedex;