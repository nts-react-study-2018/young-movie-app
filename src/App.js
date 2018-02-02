import React, {Component} from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    console.log(fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=52ee229af86240d8b73edfe0864260be&language=en-US&page=1'));
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((item, index) => {
      return <Movie {...item} />
    });
    return movies;
  }

  render() {
    return (
      <div className="App">
        {this.state.movies.length > 0 ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}

export default App;
