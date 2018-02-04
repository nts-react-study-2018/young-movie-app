import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

function _renderGenres(genre_array, key) {
  const result = genre_array.map((item, index) => {
    return (
      <li
        className="item_movie_genre"
        key={`${key}_genre_${index+1}`}>{item}</li>
    )
  });
  return result;
}

// dumb component: only exists to return something.
// They don't have states, render function, lifecycles.

function Movie({
  title,
  poster,
  genres,
  overview,
  parentKey
}) {
  return (
    <div className="item_movie">
      <div className="item_movie_col">
        <h2 className="item_movie_title">{title}</h2>
        <MovieGenres genres={genres} parentKey={parentKey}/>
        <p className="item_movie_overview">{overview}</p>
      </div>
      <div className="item_movie_col">
        <MoviePoster poster={poster}/>
      </div>
    </div>
  )
}

function MoviePoster({ poster }) {
  return (
    <div className="item_movie_poster_container">
      <h3>Poster</h3>
      <img
        className="item_movie_poster"
        src={poster}
        width="300"
        alt=""/>
    </div>
  )
}

function MovieGenres({ genres, parentKey }) {
  return (
    <div className="item_movie_genre_container">
      <h3>Genres</h3>
      <ul className="item_movie_genre_list">
        {_renderGenres(genres, parentKey)}
      </ul>
    </div>
  )
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  overview: PropTypes.string.isRequired,
}

export default Movie;
