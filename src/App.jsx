
import './App.css'
import { Navbar } from './components/navbar/Navbar'
import {Banner } from './components/homepage/banner/Banner'
import { Players } from './components/homepage/players/Players';
import { Suspense } from 'react';


const fetchPlayer=async()=>{
  const res=await fetch("/data.JSON");
  return res.json();
}
function App() {

 const playerPromise=fetchPlayer();

  return (
    <>
      <Navbar />
      <Banner />
      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>} />
      <Players playerPromise={playerPromise} />
      
    </>
  )
}

export default App
