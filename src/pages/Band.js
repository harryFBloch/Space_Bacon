import React from 'react';
import classes from './Band.module.css';
import BannerImage from '../components/BannerImage';
import BandPhoto from '../images/theBandCouch.png';
import { gridPics1 } from '../images/gridPics/gridpics';


export const Band = () => {

  //css is stored in app.css TODO: Move to segerate file
  const renderBandPhotos = () => {
    const pics = gridPics1.map((pic, count) => {
      return <img src={pic} alt={`Space Bacon ${count}`} className="gridPhoto"/>
    })
    return <div className="extraSmallCenter"><div className="gridPhotoContainer">{pics}</div><div></div></div>
  }

  return (
    <>
    <BannerImage src={BandPhoto} />
    <div className={classes.page}>
      <div className={classes.bandInfoContainer}>
        <h1 id="Band" >About The Band</h1>
        <p>Brooklyn-based jam quartet that weaves composition and improvisation through an ever-changing landscape of segues, inversions, and palindromes. Drawing from an array of inspirations including jam music, electronic production, film scores, and a bit of metal, Space Bacon seeks to challenge conventions and pave the way in the modern era of improvisational music.</p>
        <p>“These guys are on a ‘meteoric’ rise, plain and simple. With performances at Disc Jam, The Hall at MP, and a big one coming up at Mazzstock, Space Bacon will come up in conversation if you know anything about music.”</p>
        <p>– Sound Fix</p>
        <p>"Space Bacon might be really good. But I will never know – I’m not listening to them because I already hate Space Bacon." </p>
        <p>- The Guardian</p>
        <p>“On the rise Brooklyn-based jammers Space Bacon continue to break boundaries with their funky electronica fusion… Get ready for a cosmic journey of epic proportions with Space Bacon and their new EP.”</p>
        <p>– Live For Live Music</p>
      </div>
      {renderBandPhotos()}
    </div>
    </>
  )
}

export default Band