import './App.css';
import { Navbar } from './components/navbar/Navbar';
import { Banner } from './components/homepage/banner/Banner';
import { Players } from './components/homepage/players/Players';
import { Suspense, useState } from 'react';
import { Newsletter } from './components/Newsletter/Newsletter';
import { Footer } from './components/Footer/Footer';

const fetchPlayer = async () => {
  const res = await fetch("/data.json");
  return res.json(); 
};

function App() {
  const playerPromise = fetchPlayer();
  const [coin,setCoin]=useState(50000);


  return (
    <>
      <Navbar coin={coin}/>
      <Banner />
      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
        <Players playersPromise={playerPromise} coin={coin} setCoin={setCoin} />
      </Suspense>
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
