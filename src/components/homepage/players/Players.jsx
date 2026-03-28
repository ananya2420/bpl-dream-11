import { use } from 'react'; 
import { AvailablePlayers } from './AvailablePlayers'; 
import { SelectedPlayers } from './selectedPlayers/selectedPlayers';
import { useState } from 'react'; 

export const Players = ({ playersPromise,setCoin, coin }) => { 
  if (!playersPromise) { 
    return <div>Loading players...</div>; 
  } 

  const players = use(playersPromise); 

  const [selectedType,setSelectedType]=useState("available"); 
  console.log(selectedType,"selectedType") 

  const [selectedPlayers,setSelectedPlayers]=useState([]);

  return ( 
    <div className='container mx-auto my-[60px]'> 
      players: {players.length} 


      <div className='flex justify-between items-center mb-[30px]'> 
        {selectedType==="available" ? <h2 className="font-bold text-3xl">Available players</h2> : <h2 className='font-bold text-3xl'>Selected player {selectedPlayers.length}/{players.length}</h2>}

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
            Selected({selectedPlayers.length})
          </button> 
        </div> 
      </div> 

      

  
      <div className='mt-[20px]'>
        {selectedType==="available" ? (<AvailablePlayers players={players} setCoin={setCoin} coin={coin} setSelectedPlayers={setSelectedPlayers} selectedPlayers={selectedPlayers} /> 
      ):(
     <SelectedPlayers selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} setCoin={setCoin} coin={coin}/>
      )
      }
      </div>
    </div> 
  ); 
};