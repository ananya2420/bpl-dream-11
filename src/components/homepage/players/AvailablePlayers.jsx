import React from 'react' 
import { FaFlag, FaUser } from "react-icons/fa"; 
import { Card } from '../../ui/Card';

export const AvailablePlayers = ({ players }) => {
    console.log(players,'players');

  return (
    <div> 
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {
            players.map((player) => {
                console.log(player,'player')

                return (
                 <Card player={player}/>
                )
            })
        }
        </div>
       
    </div> 
  )
}