import React from 'react';
import { movies } from '../data';

const Movies = () => {
  let makeMovieDivs = () => {
    return movies.map((movie) =>{
      return (
        <div>
          <h3>{movie.title}</h3>
          <p>duration: {movie.time}</p>
          <p>genres: {movie.genres}</p>
        </div>
      )
    })
  }

  return (
    <div>
      <h1>Movies Page</h1>
      {makeMovieDivs()}
    </div>
  );
};

export default Movies;
