import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    const { name, image, type, averageWeight, moreInfo, getPokemonInfoFunction } = this.props;
    const { value, measurementUnit } = averageWeight;
    return (
      <div onClick={() => getPokemonInfoFunction(moreInfo)}>
        <p>{name}</p>
        <p>Type {type}</p>
        <p>Average Weight {value} {measurementUnit}</p>
        <img src={image} alt={name} />
      </div>
    )
  }
}

Pokemon.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string.isRequired,
  type: PropTypes.string,
  moreInfo: PropTypes.string.isRequired,
  averageWeight: PropTypes.shape({
    value: PropTypes.number,
    measurementUnit: PropTypes.string
  }).isRequired
}

export default Pokemon;
