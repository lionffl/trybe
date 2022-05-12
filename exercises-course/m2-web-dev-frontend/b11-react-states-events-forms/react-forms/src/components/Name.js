import React, { Component } from 'react'

class Name extends Component {
  
  render() {
    const { handleChange, inputName } = this.props;
    return (
      <>
        <label>
            Name: <br />
            <input type="text" name="inputName" value={inputName} onChange={handleChange} />
          </label>
          
      </>
    )
  }
}

export default Name;
