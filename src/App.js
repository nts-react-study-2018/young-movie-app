import React, {Component} from 'react';
import './App.css';
import Movie from './Movie';

const movies = [
  {
    title: "Matrix Reloaded",
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2uQY1VHHyubG6L1LXEaXcUMTHSlPJ3PS9-fO5Xx5ivxY61mIe",
  },
  {
    title: "Baby Driver",
    poster: "https://pbs.twimg.com/media/C_j4udWXYAEQ_Jv.jpg",
  },
  {
    title: "Paris Je T'aime",
    poster: "http://image.yes24.com/blogimage/blog/d/a/dahamida/20170213230407156062.jpg",
  },
  {
    title: "Harry Potter and the Prisoner of Azkaban",
    poster: "https://www.harrypottermovieposters.com/wp-content/uploads/2014/05/harry-potter-and-the-prisoner-of-azkaban-movie-poster-2004-1020288138.jpg",
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Movie App</h1>
        <ul>
          {movies.map((item, index) => {
            return <Movie title={item.title} poster={item.poster} key={`movie_${index+1}`} />
          })}
        </ul>
      </div>
    );
  }
}

export default App;
