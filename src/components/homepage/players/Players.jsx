import { use } from 'react'; 
import { AvailablePlayers } from './AvailablePlayers'; 
import { selectedPlayers } from './selectedPlayers/selectedPlayers';
import { useState } from 'react'; 

export const Players = ({ playersPromise }) => { 
  if (!playersPromise) { 
    return <div>Loading players...</div>; 
  } 

  const players = use(playersPromise); 

  const [selectedType,setSelectedType]=useState("available"); 
  console.log(selectedType,"selectedType") 

  return ( 
    <div className='container mx-auto my-[60px]'> 
      players: {players.length} 


      <div className='flex justify-between items-center mb-[30px]'> 
        {selectedType==="available" ? <h2 className="font-bold text-3xl">Available players</h2> : <h2 className='font-bold text-3xl'>Selected player (2/6)</h2>}

        <div className='flex'> 
          <button 
          onClick={()=>setSelectedType("available")}
            className={`btn ${ 
              selectedType === "available" ? "bg-[#E7FE29]" : "bg-green-500" 
            } rounded-r-none rounded-l-2xl`} 
          > 
            Available
          </button> 

          <button 
           onClick={()=>setSelectedType("selected")}
            className={`btn ${ 
              selectedType === "selected" ? "bg-[#E7FE29]" : "bg-green-500" 
            } rounded-l-none rounded-r-xl`} 
          > 
            Selected(0)
          </button> 
        </div> 
      </div> 

      

      {/* Cards (now below with gap) */}
      <div className='mt-[20px]'>
        {selectedType==="available" ? (<AvailablePlayers players={players}/> 
      ):(
     <selectedPlayers />
      )
      }
      </div>
    </div> 
  ); 
};