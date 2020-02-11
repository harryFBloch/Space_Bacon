import React from 'react';
import { gridPics2 } from '../images/gridPics/gridpics'
import classes from './Social.module.css';

export const Social = () => {

  const renderBandPhotos = () => {
    const pics = gridPics2.map((pic, count) => {
      return <img src={pic} alt={`Space Bacon ${count}`} className="gridPhoto"/>
    })
    return <div className="gridPhotoContainer">{pics}</div>
  }

  return (
    <div className={classes.page}>
      {renderBandPhotos()}

      <div className={classes.socialContainer}>
        <h1 id="Social" >Social</h1>
        <div className={classes.frameContainer}>
          <iframe src={`https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fspacebaconmusic%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1713314265622787`}
          width="340" height="500"
            scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"
            title="Space Bacon Facebook"></iframe>
           
        </div>
      </div>
    </div>    

  )
}

export default Social