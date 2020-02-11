import React from 'react';
import classes from './SideSocialNav.module.css';
import facebook from '../images/socialIcons/facebook.png';
import instagram from '../images/socialIcons/instagram.png';
import soundcload from '../images/socialIcons/soundcloud.png';
import youtube from '../images/socialIcons/youtube.png';
import spoity from '../images/socialIcons/spotify.png';

export const SideSocialNav = () => {
  
  return (
    <div className={classes.SocialNavContainer}>
      
      <a href="https://www.facebook.com/spacebaconmusic/" target="_blank" rel="noopener noreferrer">
        <img src={facebook} alt="facebook" className={classes.socialIcon}/>
      </a>

      <a href="https://www.instagram.com/spacebacon/?hl=en" target="_blank" rel="noopener noreferrer">
        <img src={instagram} alt="instagram" className={classes.socialIcon}/>
      </a>

      <a href="https://soundcloud.com/spacebacon" target="_blank" rel="noopener noreferrer">
        <img src={soundcload} alt="soundcloud" className={classes.socialIcon}/>
      </a>

      <a href="https://www.youtube.com/channel/UCmNYvESK0Jk04GRueXFMO-g" target="_blank" rel="noopener noreferrer">
        <img src={youtube} alt="youtube" className={classes.socialIcon}/>
      </a>

      <a href="https://open.spotify.com/artist/1UooSVozuknyI3qIheF7LT" target="_blank" rel="noopener noreferrer">
        <img src={spoity} alt="spoity" className={classes.socialIcon}/>
      </a>
    </div>
  )
}

export default SideSocialNav;