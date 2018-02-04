import React from 'react';
import PropTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis';
import './Movie.css';

function _renderGenres(genre_array, key) {
  const result = genre_array.map((item, index) => {
    return (
      <li
        className="Movie__Genre"
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
    <div className="Movie">
      <div className="Movie__Column">
        <MoviePoster poster={poster}/>
      </div>
      <div className="Movie__Column">
        <h2 className="title">{title}</h2>
        <MovieGenres genres={genres} parentKey={parentKey}/>
        <div className="Movie__Synopsis">
          <LinesEllipsis
            text={overview}
            maxLine='5'
            ellipsis='...'
            trimRight
            basedOn='letters'
            />
        </div>
      </div>
    </div>
  )
}

function MoviePoster({ poster }) {
  return (
    <img
        className="Movie__Poster"
        src={poster}
        width="100%"
        alt=""/>
  )
}

function MovieGenres({ genres, parentKey }) {
  return (
    <div className="Movie__Genres">
      <ul aria-label="Movie Genres">
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
