import React, { Component } from 'react'

class Email extends Component {

  render() {
    const { handleChange, inputEmail } = this.props;
    return (
      <>
        <label>
          Email: <br />
          <input name="inputEmail" type="email" value={inputEmail} onChange={handleChange} />
        </label>
      </>
    )
  }
}

export default Email;