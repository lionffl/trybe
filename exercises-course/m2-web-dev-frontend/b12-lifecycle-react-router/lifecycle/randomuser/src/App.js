import React, { Component } from 'react';
import './App.css';


class App extends Component {

  state = {
    user: undefined,
  }

  fetchUser = async () => {
    const endPoint = 'https://api.randomuser.me/'
    const response = await fetch(endPoint)
    const responseJson = await response.json();
    this.setState({ user: responseJson.results[0] });
    console.log(this.state.user)
  }

  componentDidMount() {
    this.fetchUser();
  }
  
  render() {
    const { user } = this.state;
    return (
      <div className="App">
       {user.name}
      </div>
    );
  }

}

export default App;
