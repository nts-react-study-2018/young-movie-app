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

  //TODO: init 함수 만들어서 this._initGenres() 다음에 this._getMovies() 실행되도록 만들기
  componentWillMount() {
    this._initGenres();
  }

  componentDidMount() {
    this._getMovies();
  }

  _refineGenreObj = (temp_array) => {
    let temp_obj = {};
    for (let i=0;i<temp_array.length;i++) {
      let genre_id = temp_array[i].id;
      let genre_name = temp_array[i].name;
      temp_obj[genre_id] = genre_name;
    }
    return temp_obj;
  }

  _convertGenreIDtoName = (movies) => {
    for(let i=0;i<movies.length;i++) {
      let temp_array = movies[i].genre_ids;
      temp_array = temp_array.map((id) => {
        console.log(id);
      })
    }
    return movies;
  }

  _callAPI = (URL, key) => {
    return fetch(URL)
      .then(res => res.json())
      .then(json => json[key])
      .then(result => {
        if(URL===URLs.API_top_rated) {
          const movies = this._convertGenreIDtoName(result);
          this.setState({ movies });
        }
        return result;
      })
      .catch(err => console.log(err));
  }

  _getGenres = async () => {
    return await this._callAPI(URLs.genres, "genres");
  }

  _getMovies = async () => {
    await this._callAPI(URLs.API_top_rated, "results");
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((item, index) => {
      return <Movie title={item.title} poster={`${URLs.poster}${item.poster_path}`} key={item.id} />
    });
    return movies;
  }

  _initGenres = () => {
    this._getGenres()
      .then(result => {
        const genres = this._refineGenreObj(result);
        this.setState({ genres });
      }).then(result => {console.log(this.state.genres)});
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
