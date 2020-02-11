import React from 'react';
import classes from './Booking.module.css';

export const Booking = () => {

  return (
    <div className={classes.bookingContainer}>
      <h1 className={classes.bookingTitle} id="Booking" >Booking</h1>
      <div className={classes.section}>
        <p>For Booking Please Contact:</p>
        <p>Pivotal Agency // Sam Hutchinson</p>
        <p>SpaceBaconBooking@gmail.com</p>
      </div>

      <div className={classes.section}>
        <p>For Press Inquiries and General Contact:</p>
        <p>Harrison Waxenberg - Manager</p>
        <p>SpaceBaconMusic@gmail.com</p>
      </div>

    </div>
  )
}

export default Booking