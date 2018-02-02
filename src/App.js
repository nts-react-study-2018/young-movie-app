import React, {Component} from 'react';
import './App.css';
import Movie from './Movie';
import URLs from './URLs';

class App extends Component {
  constructor(props) {
    super(props);

    this.genres = this._getGenres();
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
   this._getMovies();
  }

  _callAPI = (URL, key) => {
    return fetch(URL)
      .then(res => res.json())
      .then(json => json[key])
      .catch(err => console.log(err));
  }

  _getGenres = async () => {
    let temp_array = await this._callAPI(URLs.genres, "genres");
    let temp_obj = {};
    temp_array.map((item) => {
      temp_obj[item.id] = item.name;
    })
    return temp_obj;
  }

  _getMovies = async () => {
    let movies = await this._callAPI(URLs.API_top_rated, "results");
    movies.map((item) => {
      item.genre_ids.map((item) => {
        console.log(this.genres[item]);
      })
    });
    this.setState({
      movies: movies,
    });
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((item, index) => {
      console.log(item);
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
