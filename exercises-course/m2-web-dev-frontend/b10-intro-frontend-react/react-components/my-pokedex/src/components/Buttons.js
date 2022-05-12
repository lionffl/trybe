import React, { Component } from 'react'

class Buttons extends Component {
  render() {
    const { setFilterFunction, onClickFunction, filtredPokemons } = this.props
    return (
      <>
        <button className="btn" onClick={() => onClickFunction(filtredPokemons)}>Next Pokemon</button>
        <section className="filter-buttons">
          <button onClick={setFilterFunction} className="btn" name="">No filter</button>
          <button onClick={setFilterFunction} className="btn" name="Fire">Only Fire</button>
          <button onClick={setFilterFunction} className="btn" name="Psychic">Only Psychic</button>
          <button onClick={setFilterFunction} className="btn" name="Normal">Only Normal</button>
          <button onClick={setFilterFunction} className="btn" name="Poison">Only Poison</button>
          <button onClick={setFilterFunction} className="btn" name="Electric">Only Electric</button>
        </section>
      </>
    )
  }
}

export default Buttons;
