import React from 'react';
import classes from './Booking.module.css';

export const Booking = () => {

  return (
    <div className={classes.bookingContainer}>
      <h1 className={classes.bookingTitle} id="Booking" >Booking</h1>
      <div className={classes.section}>
        <p>For Booking Please Contact:</p>
        <p>Pivotal Agency // Sam Hutchinson</p>
        <p>
          <a href="mailto:SpaceBaconBooking@gmail.com" className={classes.emailLink}>
            SpaceBaconBooking@gmail.com
          </a>
        </p>
      </div>

      <div className={classes.section}>
        <p>For Press Inquiries and General Contact:</p>
        <p>Harrison Waxenberg - Manager</p>
        <p>
          <a href="mailto:spacebaconmgmt@gmail.com" className={classes.emailLink}>
            SpaceBaconMGMT@gmail.com
          </a>
        </p>
      </div>

    </div>
  )
}

export default Booking