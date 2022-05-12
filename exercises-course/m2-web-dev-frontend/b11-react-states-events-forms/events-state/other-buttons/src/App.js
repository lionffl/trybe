// import logo from './logo.svg';
import React from 'react';
import './App.css';

class App extends React.Component {

  state = {
    counter: 0,
  }

  changeColor = (event) => {
    if (this.state.counter % 2 === 0) {
      event.target.style.backgroundColor = 'green';
      console.log(event.target.style.backgroundColor)
    } else {
      event.target.style.backgroundColor = 'lightgrey'
      console.log(event.target.style.backgroundColor)
    }
  }

  incCounter = (event) => {
    this.setState({ counter: this.state.counter + 1 });
    this.changeColor(event);
  }

  decCounter = (event) => {
    this.setState({ counter: this.state.counter - 1 });
    this.changeColor(event);
  }

  resetCounter = () => this.setState({ counter: 0 });

  render() {
    return (
      <div className="App">
        <button onClick={this.incCounter}>+ Button</button><br /><br />
        <button onClick={this.decCounter}>- Button</button><br /><br />
        <button onClick={this.resetCounter}>Reset Button</button>
        <p>Counter: {this.state.counter}</p>
      </div>
    );
  }
}

export default App;
