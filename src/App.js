import React, {Component} from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Movie App</h1>
        <ul>
          <Movie/>
          <Movie/>
          <Movie/>
        </ul>
      </div>
    );
  }
}

export default App;
