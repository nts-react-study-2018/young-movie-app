import React, {Component} from 'react';
import './Movie.css';

class Movie extends Component {
  render() {
    return (
      <li>
        <h2>Movie</h2>
        <MoviePoster/>
      </li>
    );
  }
}

class MoviePoster extends Component {
  render() {
    return (
      <div>
        <img src="https://pbs.twimg.com/media/C_j4udWXYAEQ_Jv.jpg" width="150" alt=""/>
      </div>
    );
  }
}

export default Movie;
