import React, { Component } from 'react'
import Name from './Name'
import Email from './Email'

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
      [event.target.name]: event.target.type === 'checkbox' ? event.target.checked : event.target.value
    })
  }

  handleSubmit = (event) => event.preventDefault();
  
  render() {
    const { inputEmail, inputName, textAreaInput } = this.state;
    return (
      <div className='form-container'>
        <form onSubmit={this.handleSubmit}>
          <h2>A Simple Form</h2>
          <fieldset className='form'>
            <Name
              handleChange={this.handleChange}
              inputName={inputName}
            />
            <Email
              handleChange={this.handleChange}
              inputEmail={inputEmail}
            />
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
            <input type="submit" />
          </fieldset>
        </form>
      </div>
    )
  }
}

export default Form
