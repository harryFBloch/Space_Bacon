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

      {/* <svg src={menuIcon} fill="white"></svg> */}
      <button className={classes.menuButton}>
        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            viewBox="0 0 512 512" className={classes.menuIcon}>
          <g>
            <path fill="lightgrey" d="M479.18,91.897H32.821C14.69,91.897,0,77.207,0,59.077s14.69-32.821,32.821-32.821H479.18
      c18.13,0,32.82,14.69,32.82,32.821S497.31,91.897,479.18,91.897z"/>
            <path fill="lightgrey"  d="M295.385,288.821H32.821C14.69,288.821,0,274.13,0,256s14.69-32.821,32.821-32.821h262.564
      c18.13,0,32.821,14.69,32.821,32.821S313.515,288.821,295.385,288.821z"/>
          </g>
          <path fill="white" d="M479.18,288.821h-52.513c-18.13,0-32.821-14.69-32.821-32.821s14.69-32.821,32.821-32.821h52.513
      c18.13,0,32.82,14.69,32.82,32.821S497.31,288.821,479.18,288.821z"/>
          <path fill="lightgrey" d="M479.18,485.744H32.821C14.69,485.744,0,471.053,0,452.923c0-18.13,14.69-32.821,32.821-32.821
      H479.18c18.13,0,32.82,14.69,32.82,32.821C512,471.053,497.31,485.744,479.18,485.744z"/>

        </svg>
      </button>
    </div>
  )
}

export default NavBar