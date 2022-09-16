import React from 'react';
import Buttons from './Buttons';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {

  constructor(props) {
    super(props);
    this.pokemonBorderRef = React.createRef();
  };

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

  changeStyleByPokemonType = (pokemonType) => {
    this.pokemonBorderRef.current.className = `pokemon ${pokemonType}`;
  }

  setFilter = (event) => {
    const pokemonType = event.target.name;
    this.setState({
      pokemonIndex: 0,
      pokedex: this.props.pokemons,
      pokemonElementFilter: pokemonType
    })
    this.changeStyleByPokemonType(pokemonType)
  }

  getPokemonInfo = (moreInfo) => {
    window.open(`${moreInfo}`, '_blank')
  }

  render() {
    const { pokedex, pokemonIndex, pokemonElementFilter } = this.state;
    const filtredPokemons = pokedex.filter((pokemon) => !pokemonElementFilter ? pokemon.type : pokemon.type === pokemonElementFilter)
    return (
      <>
        <div ref={this.pokemonBorderRef} className="pokemon">
          <Pokemon
            getPokemonInfoFunction={this.getPokemonInfo}
            name={filtredPokemons[pokemonIndex].name}
            type={filtredPokemons[pokemonIndex].type}
            averageWeight={filtredPokemons[pokemonIndex].averageWeight}
            image={filtredPokemons[pokemonIndex].image}
            moreInfo={filtredPokemons[pokemonIndex].moreInfo}
          />
        </div>
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
