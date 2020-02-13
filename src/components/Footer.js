import React from 'react';
import Booking from '../pages/Booking'
import classes from './Footer.module.css';

export const Footer = () => {

  return (
    <div className={classes.footerContainer}>
      <Booking/>
    </div>
  )
}

export default Footer