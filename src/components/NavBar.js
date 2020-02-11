import React from 'react';
import logo from '../images/spaceBaconBanner.png'
import classes from './NavBar.module.css'

export const NavBar = () => {

  const linkButton = (section) => (
    <a href={`#${section}`}>
      <button className={classes.pageLink} onClick={() => {
        console.log(section)
      }}>
            {section}
      </button>
    </a>
  )

  return (
    <div className={classes.nav}>
      <img src={logo} alt="Space Bacon" className={classes.logo}/>

      <div className={classes.pageLinkContainer}>

        {linkButton("Tour")}
        {linkButton("Band")}
        {linkButton("Social")}
        {linkButton("Audio")}
        {linkButton("Booking")}

      </div>
    </div>
  )
}

export default NavBar