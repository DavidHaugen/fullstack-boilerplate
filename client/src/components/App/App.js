import React, { Component } from 'react';
import ApiService from '../../services/api-service'
import './App.css';

class App extends Component {

  state = {
    stuff: ''
  }

  componentDidMount() {
    ApiService.getStuff()
      .then(res => {
        this.setState({
          stuff: res
        })
      })
  }
  render() {
    const message = this.state.stuff.message;
    
    return (
      <div className="App">
        {message} 
      </div>
    );
  }
}

export default App;
