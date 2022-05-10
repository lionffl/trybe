import './App.css';
import React from 'react';

class App extends React.Component {

  eventOne = () => console.log('This is an event from button 1');
  eventTwo = () => console.log('This is an event from button 2');
  eventThree = () => console.log('This is an event from button 3');

  render() {
    return (
      <div className="App">
        <button onClick={this.eventOne}>1</button>
        <button onClick={this.eventTwo}>2</button>
        <button onClick={this.eventThree}>3</button>
      </div>
    );
  }
}
export default App;
