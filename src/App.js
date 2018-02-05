import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Movie from './Movie';
import URLs from './URLs';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      genres: {},
      movies_popular: {},
      'movies_top-rated': {},
      'movies_now-playing': {},
      current_menu: '',
      has_api_call_finished: false
    };
  }

  componentWillMount() {
    this.setState({
      current_menu: this.props.match.params.current_menu
    });
  }

  componentDidMount() {
    this._init();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      current_menu: nextProps.match.params.current_menu
    });
  }

  /*
    Data Refinement
  */
  _refineGenreObj = temp_array => {
    let temp_obj = {};
    for (let i = 0; i < temp_array.length; i++) {
      let genre_id = temp_array[i].id;
      let genre_name = temp_array[i].name;
      temp_obj[genre_id] = genre_name;
    }
    return temp_obj;
  };

  _convertGenreidtoName = movies => {
    for (let i = 0; i < movies.length; i++) {
      movies[i].genre_ids = movies[i].genre_ids.map(id => {
        return this.state.genres[id];
      });
    }
    return movies;
  };

  /*
    API Calls
  */
  _callAPI = (URL, key) => {
    return fetch(URL)
      .then(res => res.json())
      .then(json => json[key])
      .catch(err => console.log(err));
  };

  _getGenres = async () => {
    return await this._callAPI(URLs.genres, 'genres');
  };

  _getMovies = async API_name => {
    return await this._callAPI(API_name, 'results');
  };

  /*
    Data Initalization
  */
  _init = () => {
    this._getGenres()
      .then(genres => {
        const refined_genres = this._refineGenreObj(genres);
        console.log('got genres');
        this.setState({
          genres: refined_genres
        });
      })
      .then(() => {
        const popular_movies = this._getMovies(URLs.API_popular);
        return popular_movies;
      })
      .then(movies => {
        const popular_refined_movies = this._convertGenreidtoName(movies);
        this.setState({
          movies_popular: popular_refined_movies
        });
        console.log('got popular movies');
      })
      .then(() => {
        const top_rated_movies = this._getMovies(URLs.API_top_rated);
        return top_rated_movies;
      })
      .then(movies => {
        const top_rated_refined_movies = this._convertGenreidtoName(movies);
        this.setState({
          movies_top_rated: top_rated_refined_movies
        });
        console.log(this.state.movies_top_rated);
      })
      .then(() => {
        const now_playing_movies = this._getMovies(URLs.API_now_playing);
        return now_playing_movies;
      })
      .then(movies => {
        const now_playing_refined_movies = this._convertGenreidtoName(movies);
        this.setState({
          movies_now_playing: now_playing_refined_movies
        });
        console.log('got now playing movies');
        this.setState({
          has_api_call_finished: true
        });
        console.log('call finished');
      })
      .catch(err => console.error(err));
  };

  /*
    UI Rendering
  */
  _renderMovies = current_menu => {
    let result = [];

    switch (current_menu) {
      case 'popular':
      default:
        result = this._makePopularMoviesComponents();
        break;
      case 'top-rated':
        result = this._makeTopRatedMoviesComponents();
        break;
      case 'now-playing':
        result = this._makeNowPlayingMoviesComponents();
        break;
    }

    return result;
  };

  _makePopularMoviesComponents = () => {
    let movies = this.state.movies_popular.map((item, index) => {
      return (
        <Movie
          title={item.title}
          poster={`${URLs.poster}${item.poster_path}`}
          genres={item.genre_ids}
          overview={item.overview}
          key={`movie_${item.id}`}
          parentKey={item.id}
        />
      );
    });
    return movies;
  };

  _makeTopRatedMoviesComponents = () => {
    let movies = this.state.movies_top_rated.map((item, index) => {
      return (
        <Movie
          title={item.title}
          poster={`${URLs.poster}${item.poster_path}`}
          genres={item.genre_ids}
          overview={item.overview}
          key={`movie_${item.id}`}
          parentKey={item.id}
        />
      );
    });
    return movies;
  };

  _makeNowPlayingMoviesComponents = () => {
    let movies = this.state.movies_now_playing.map((item, index) => {
      return (
        <Movie
          title={item.title}
          poster={`${URLs.poster}${item.poster_path}`}
          genres={item.genre_ids}
          overview={item.overview}
          key={`movie_${item.id}`}
          parentKey={item.id}
        />
      );
    });
    return movies;
  };

  render() {
    let hasMovies = this.state.has_api_call_finished;

    return (
      <div>
        <Header />
        <div className={hasMovies ? 'App' : 'App--loading'}>
          {hasMovies ? this._renderMovies(this.state.current_menu) : 'Loading'}
        </div>
      </div>
    );
  }
}

export default App;
