import React from 'react';
import Band from './Band';
import Social from './Social';
import Media from './Media';
import BannerImage from '../components/BannerImage';
import baconBanner from '../images/baconBanner1.png';
import Tour from './Tour';

export const Home = () => {

  return (
    <>
      <BannerImage src={baconBanner} alt="Space Bacon"/>
      <Tour />
      <Band />
      <Media />
      <Social />
    </>
  )
}

export default Home