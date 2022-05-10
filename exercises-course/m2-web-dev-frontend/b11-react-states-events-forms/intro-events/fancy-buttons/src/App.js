import './App.css';
import React from 'react';

class App extends React.Component {

  state = {
    text: '',
    textScreen: '',
    counter: 0,
  }
  
  eventOne = () => console.log('This is an event from button 1');
  eventTwo = () => console.log('This is an event from button 2');
  eventThree = () => console.log('This is an event from button 3');
  changeTextAndCounter = () => {
    this.setState({ textScreen: this.state.text })
    this.setState((prevState,) => ({ counter: prevState.counter + 1 }))
  }
  handleChange = (event) => this.setState({ text: event.target.value });
  render() {
    return (
      <div className="App">
        <button onClick={this.eventOne}>1</button>
        <button onClick={this.eventTwo}>2</button>
        <button onClick={this.eventThree}>3</button>
        <input type='text' onChange={this.handleChange} />
        <button onClick={this.changeTextAndCounter}>Print text</button>
        <p>state.text: {this.state.text}</p>
        <p>state.textScreen: {this.state.textScreen}</p>
        <p>counter: {this.state.counter}</p>
      </div>
    );
  }
}
export default App;
