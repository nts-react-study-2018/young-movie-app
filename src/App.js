import React, {Component} from 'react';
import './App.css';
import Movie from './Movie';

const movieTitles = [
  "Matrix Reloaded",
  "Baby Driver",
  "Paris Je T'aime",
  "Harry Potter and the Prisoner of Azkaban",
]

const movieImages = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2uQY1VHHyubG6L1LXEaXcUMTHSlPJ3PS9-fO5Xx5ivxY61mIe",
  "https://pbs.twimg.com/media/C_j4udWXYAEQ_Jv.jpg",
  "http://image.yes24.com/blogimage/blog/d/a/dahamida/20170213230407156062.jpg",
  "https://www.harrypottermovieposters.com/wp-content/uploads/2014/05/harry-potter-and-the-prisoner-of-azkaban-movie-poster-2004-1020288138.jpg",
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Movie App</h1>
        <ul>
          <Movie title={movieTitles[0]} poster={movieImages[0]}/>
          <Movie title={movieTitles[1]} poster={movieImages[1]}/>
          <Movie title={movieTitles[2]} poster={movieImages[2]}/>
          <Movie title={movieTitles[3]} poster={movieImages[3]}/>
        </ul>
      </div>
    );
  }
}

export default App;
