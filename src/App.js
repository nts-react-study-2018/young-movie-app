import React, {Component} from 'react';
import './App.css';
import Movie from './Movie';
import URLs from './URLs';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      genres: {},
      movies: {},
    };
  }

  componentDidMount() {
    this._init();
  }

  /*
    Data Refinement
  */
  _refineGenreObj = (temp_array) => {
    let temp_obj = {};
    for (let i=0;i<temp_array.length;i++) {
      let genre_id = temp_array[i].id;
      let genre_name = temp_array[i].name;
      temp_obj[genre_id] = genre_name;
    }
    return temp_obj;
  }

  _convertGenreidtoName = (movies) => {
    for(let i=0;i<movies.length;i++) {
      movies[i].genre_ids = movies[i].genre_ids.map((id) => {
        return this.state.genres[id];
      })
    }
    return movies;
  }

  /*
    API Calls
  */
  _callAPI = (URL, key) => {
    return fetch(URL)
      .then(res => res.json())
      .then(json => json[key])
      .catch(err => console.log(err));
  }

  _getGenres = async () => {
    return await this._callAPI(URLs.genres, "genres");
  }

  _getMovies = async () => {
    return await this._callAPI(URLs.API_top_rated, "results");
  }
  
  /*
    Data Initalization
  */
  _init = () => {
    this._getGenres()
      .then(genres => {
        const refined_genres = this._refineGenreObj(genres);
        this.setState({ genres: refined_genres });
        console.log('got genres');
      })
      .then(() => {
        const movies = this._getMovies();
        console.log('got movies');
        return movies;
      })
      .then(movies => {
        const refined_movies = this._convertGenreidtoName(movies);
        this.setState({ movies: refined_movies });
      })
      .catch(err => console.error(err));
  }

  /*
    UI Rendering
  */
  _renderMovies = () => {
    const movies = this.state.movies.map((item, index) => {
      return <Movie title={item.title} poster={`${URLs.poster}${item.poster_path}`} key={item.id} />
    });
    return movies;
  }

  render() {
    return (
      <div className="App">
        {this.state.movies.length > 0
          ? this._renderMovies()
          : 'Loading'}
      </div>
    );
  }
}

export default App;
