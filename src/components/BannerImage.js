import React from 'react';
import classes from './BannerImage.module.css'

export const BannerImage = (props) => {

  return (
    <div className={classes.bannerContainer}>
    <img src={props.src} alt={props.alt} className={classes.banner}/>
     {props.buttons && 
      <div className={classes.bannerButtonContainer}>
        <button className={classes.bannerButton}>Join Our Cult</button>
        <button className={`${classes.bannerButton} ${classes.secondButton}`}>Spotify</button>
      </div>
    }
    </div>
  )
}

export default BannerImage