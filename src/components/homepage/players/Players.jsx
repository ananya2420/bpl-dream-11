import React, { use } from 'react';
import { AvailablePlayers } from './AvailablePlayers';



export const Players = ({ playersPromise }) => {
  if (!playersPromise) {
    // Fallback UI if the promise isn't provided yet
    return <div>Loading players...</div>;
  }

  const players = use(playersPromise); // suspends until resolved

  // Ensure data is always an array
  //const playersArray = Array.isArray(data) ? data : data.players || [];
  //console.log(data)

  return (
    <div className='container mx-auto'>
      players: {players.length}

     <AvailablePlayers players={players}/>
    </div>
  );
};