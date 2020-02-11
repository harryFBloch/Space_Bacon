import React from 'react';
import classes from './Tour.module.css';

const TourDate = {date: 'Feb 15', venue: 'The Stone Church', city: 'Brattleboro, VT', ticketLink: 'https://m.bpt.me/event/4488972'}

export const Tour = () => {

  const renderTourDate = ({date, city, venue, ticketLink}) => (
    <div className={classes.page}>
      <div className={classes.tourCard}>
        <div className={classes.tourDateContainer}>
          <div className={classes.innerContainer}>
            <div className={classes.date}>{date}</div>
            <div className={classes.venue}>{venue}</div>
            <div className={classes.city}>{city}</div>
          </div>
          <a href={ticketLink} target="_blank" rel="noopener noreferrer">
            <button className={classes.ticketButton}>TICKETS</button>
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <h1>Tour</h1>
      
            {renderTourDate(TourDate)}
            {renderTourDate(TourDate)}
            {renderTourDate(TourDate)}
            {renderTourDate(TourDate)}
    </>
  )
}

export default Tour