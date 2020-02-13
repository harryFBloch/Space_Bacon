import React from 'react'
import Band from './Band'
import Social from './Social'
import Booking from './Booking'
import BannerImage from '../components/BannerImage';
import baconBanner from '../images/baconBanner1.png';
import Tour from './Tour'

export const Home = () => {

  return (
    <>
    <BannerImage src={baconBanner} alt="Space Bacon" buttons={true}/>
    <Tour />
    <Band />
    <Social />
    <Booking />
    </>
  )
}

export default Home