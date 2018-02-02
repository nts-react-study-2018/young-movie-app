import React, {Component} from 'react';
import './App.css';
import Movie from './Movie';
import URLs from './URLs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
   this._getMovies();
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((item, index) => {
      return <Movie title={item.title} poster={`${URLs.poster}${item.poster_path}`} key={item.id} />
    });
    return movies;
  }

  _getMovies = async () => {
    this.setState({
      movies: await this._callAPI(),
    });
  }

  _callAPI = () => {
    return fetch(URLs.API_top_rated)
      .then(res => res.json())
      .then(json => json.results)
      .catch(err => console.log(err));
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
