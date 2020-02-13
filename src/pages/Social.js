import React, { useState } from 'react';
import { gridPics2, gridPics3 } from '../images/gridPics/gridpics';
import TwitterEmbed from '../components/TwitterEmbed';
import classes from './Social.module.css';


export const Social = () => {

  const [ smallScreen, setSmallScreen ] = useState();

  const renderBandPhotos = (picArray) => {
    const pics = picArray.map((pic, count) => {
      return <img src={pic} alt={`Space Bacon ${count}`} className={`gridPhoto ${classes.largeGridPhoto}`} key={pic}/>
    })
    return <div className={classes.outerPicContainer}><div className={`gridPhotoContainer ${classes.topMargin}`}>{pics}</div></div>
  }

  const renderHorizontalPics = (picArray) => {
    const pics = picArray.map((pic, count) => {
      return <img src={pic} alt={`Space Bacon ${count}`} className={classes.colPhoto}/>
    })
    return <div className={classes.horizontalOuterContainer}><div className={classes.horizontalGrid}>{pics}</div></div>
  }

  if (window.innerWidth > 820) {
    return (
      <>
      <h1 id="Social" >Social</h1>
      <div className={classes.page}>
        <div className={`${classes.twitter} ${classes.socialContainer} ${classes.twitterMargin}`}>
          <TwitterEmbed />
        </div>
        
        {renderBandPhotos(gridPics2)}
  
        <div className={`${classes.socialContainer}`}>
          <div className={classes.frameContainer}>
            <iframe src={`https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fspacebaconmusic%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1713314265622787`}
            width="340" height="500" className={classes.facebook}
              scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"
              title="Space Bacon Facebook"></iframe>
             
          </div>
        </div>
      </div>  
      </>  
    )
  } else {
    return (
      <div>
      <h1 id="Social" >Social</h1>
          {renderHorizontalPics(gridPics2.slice(0,3))}
            <iframe src={`https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fspacebaconmusic%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1713314265622787`}
            width="340" height="500" className={classes.extraSmallFacebook}
              scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"
              title="Space Bacon Facebook"></iframe>
        {renderHorizontalPics(gridPics3.slice(0,3))}
              <div className={`${classes.twitter} ${classes.extraSmallFacebook}`}>
                <TwitterEmbed />
              </div>
        {renderHorizontalPics(gridPics2.slice(3,6))}
      </div>
    )
  }
  
}

export default Social