import React from 'react';
import classes from './Audio.module.css';

export const Audio = () => {

  return (
    <>
      <h1>Audio</h1>
      <div className={classes.aspectRatio}>
        <iframe width="560" height="315" 
          src={`https://www.youtube.com/embed/videoseries?list=PLhXi3_sG3_EX8wuwUbadxlYQls4zP51W2&amp;autoplay=1&mute=1`}
          frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen title="Space Bacon Youtube"
          className={classes.youtube}
          />
      </div>
      
      <h2>Latest Shows</h2>
      <div className={classes.soundcloudContainer}>
      <iframe 
        width="100%" height="450" scrolling="no" className={classes.soundcloud}
        frameborder="no" allow="autoplay" title="Space Bacon Soundcloud" 
        src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/38245067&color=%230f0f0f&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true`} />
      </div>

      <h2>The Essentials</h2>
      <div className={classes.soundcloudContainer}>
        <div className={classes.soundcloud}>
          <iframe 
          width="100%" height="450" title="Nodes ep"
          scrolling="no" frameborder="no" allow="autoplay" 
          src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/249449726&color=%230f0f0f&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`} />
        </div>
      </div>
    </>
  )
}

export default Audio

// videoseries?list=PLhXi3_sG3_EX8wuwUbadxlYQls4zP51W2?autoplay=1