import React from 'react';
import NavBar from './components/NavBar';
import BannerImage from './components/BannerImage';
import baconBanner from './images/baconBanner1.png';
import Tour from './pages/Tour'
import SideSocialNav from './components/SideSocialNav'
import Band from './pages/Band'
import Social from './pages/Social'
import Booking from './pages/Booking'
import './App.css'

function App() {
  return (
    <div >
      <NavBar />
      <SideSocialNav />
      <BannerImage src={baconBanner} alt="Space Bacon" buttons={true}/>
      <Tour />
      <Band />
      <Social />
      <Booking />
    </div>
  );
}

export default App;
