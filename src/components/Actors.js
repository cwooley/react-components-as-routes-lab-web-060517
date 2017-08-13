import React from 'react';
import { actors } from '../data';

const Actors = () => {
  let makeActorDivs = () => {
    return actors.map((actor) =>{
      return (
        <div>
          <h3>{actor.name}</h3>
          <p>{actor.movies}</p>
        </div>
      )
    })
  }
  return (
    <div>
      <h1>Actors Page</h1>
      {makeActorDivs()}
    </div>
  );
};

export default Actors;
