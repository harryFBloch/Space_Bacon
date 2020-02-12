import React from 'react';
import classes from './BannerImage.module.css'

export const BannerImage = (props) => {

  return (
    <div className={classes.bannerContainer}>
    <img src={props.src} alt={props.alt} className={classes.banner}/>
     {props.buttons && 
      <div className={classes.bannerButtonContainer}>
        <a href="https://open.spotify.com/album/63AhtrFcqNadzO0nhgWZrB" alt="fan page"  target="_blank" rel="noopener noreferrer">
          <button className={classes.bannerButton}>Stream</button>
        </a>
      </div>
    }
    </div>
  )
}

export default BannerImage