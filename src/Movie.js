import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

// dumb component: only exists to return something.
// They don't have states, render function, lifecycles.

function Movie({title, poster}) {
  return (
    <div>
        <h2>{title}</h2>
        <MoviePoster poster={poster}/>
    </div>
  )
}

function MoviePoster({poster}) {
  return (
    <div>
      <img src={poster} width="200" alt=""/>
    </div>
  )
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
}

MoviePoster.propTypes = {
  poster: PropTypes.string.isRequired,
}

export default Movie;
