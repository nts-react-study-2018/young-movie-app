import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

class Movie extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
  }

  render() {
    return (
      <li>
        <h2>{this.props.title}</h2>
        <MoviePoster poster={this.props.poster}/>
      </li>
    );
  }
}

class MoviePoster extends Component {
  render() {
    return (
      <div>
        <img src={this.props.poster} width="200" alt=""/>
      </div>
    );
  }
}

export default Movie;
