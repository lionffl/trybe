import React, { Component } from 'react'

class Form extends Component {
  state = {
    inputName: '',
    inputEmail: '',
    favoriteGame: '',
    textAreaInput: '',
    checkbox: false
  }

  handleChange = (event) => {
    this.setState({ 
      [event.target.name]: event.target.type === 'checkbox' ? event.target.checked : event.target.value })
  }

  render() {
    const { inputEmail, inputName, textAreaInput } = this.state;
    return (
      <div className='form-container'>
        <form>
          <h2>A Simple Form</h2>
          <fieldset className='form'>
          <label>
            Name: <br />
            <input type="text" name="inputName" value={inputName} onChange={this.handleChange} />
          </label>
          <label>
            Email: <br />
            <input name="inputEmail" type="email" value={inputEmail} onChange={this.handleChange}/>
          </label>
          <label>
            Favorite Game Genre:<br />
            <select name="favoriteGame" onChange={this.handleChange}>
              <option value="RTS">RTS</option>
              <option value="FPS">FPS</option>
            </select>
          </label>
          <label>
            Suggestions:<br />
            <textarea name="textAreaInput" resize="none" cols="25" rows="5" value={textAreaInput} onChange={this.handleChange} />
          </label>
          <label>
            I agree
            <input name="checkbox" type="checkbox" onChange={this.handleChange} />
          </label>
          <button>Submit</button>
          </fieldset>
        </form>
      </div>
    )
  }
}

export default Form
