import React from 'react';
import { directors } from '../data';

const Directors = () => {
  let makeDirectorDivs = () => {
    return directors.map((director) =>{
      return (
        <div>
          <h3>{director.name}</h3>
          <p>{director.movies}</p>
        </div>
      )
    })
  }
  return (
    <div>
      <h1>Directors Page</h1>
      {makeDirectorDivs()}
    </div>
  );
}

export default Directors
