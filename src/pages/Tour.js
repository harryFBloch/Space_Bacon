import React from 'react';
import classes from './Tour.module.css';
import tourFlyer from '../images/springTourFlyer.png'

const TourDate = {date: 'Feb 15', venue: 'The Stone Church', city: 'Brattleboro, VT', ticketLink: 'https://m.bpt.me/event/4488972'}

export const Tour = () => {

  const renderTourDate = ({date, city, venue, ticketLink}) => (
    <div className={classes.page}>
      <div className={classes.tourCard}>
        <div className={classes.tourDateContainer}>
          <div className={classes.innerContainer}>
            <div className={`${classes.date} fontSize`}>{date}</div>
            <div className={`${classes.venue} fontSize`}>{venue}</div>
            <div className={`${classes.city} fontSize`}>{city}</div>
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
      <div className={classes.page}>
        <img src={tourFlyer} alt="space bacon tour flyer" className={classes.flyer}/>
      </div>
      {renderTourDate(TourDate)}
      {renderTourDate(TourDate)}
      {renderTourDate(TourDate)}
      {renderTourDate(TourDate)}
    </>
  )
}

export default Tour