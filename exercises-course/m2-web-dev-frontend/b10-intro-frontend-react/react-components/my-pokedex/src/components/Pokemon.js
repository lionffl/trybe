import React from "react";
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  
  getPokemonInfo = (moreInfo) => window.open(moreInfo, '_blank');
  
  render() {
    
    const pokemon = this.props.pokemon
    const { name, type, image, moreInfo } = pokemon;
    const { value, measurementUnit } = pokemon.averageWeight;

    return (
      <article className="pokemon">
        <img src={image} alt={name} onClick={() => this.getPokemonInfo(moreInfo)} />
        <h4>{name}</h4>
        <p>Element/Type: {type}</p>
        <p>Weight: {value} {measurementUnit}</p>
      </article>
    )
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      value: PropTypes.number,
      measurementUnit: PropTypes.string
    })
  })
}

export default Pokemon;
