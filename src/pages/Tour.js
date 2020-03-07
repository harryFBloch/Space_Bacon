import React, {useState, useEffect} from 'react';
import classes from './Tour.module.css';
import tourFlyer from '../images/springTourFlyer.png';

const Months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]

export const Tour = () => {

  const [tourDates, setTourDates] = useState([]);

  useEffect(() => {
    fetchTourDates()
  }, [])

  const renderTourDate = (tourDate, count) => {
    const date = new Date(tourDate.datetime)
    const dateString = `${Months[date.getMonth()]} ${date.getDate()}`
    let url = ''
    if (tourDate.offers[0]) {
      url = tourDate.offers[0].url
    }
    return (
      <div className={classes.page} key={`tour${count}`}>
        <div className={classes.tourCard}>
          <div className={classes.tourDateContainer}>
            <div className={classes.innerContainer}>
              <div className={`${classes.date} fontSize ${classes.tourInfo}`}>{dateString}</div>
              <div className={`${classes.venue} fontSize ${classes.tourInfo}`}>{tourDate.venue.name}</div>
              <div className={`${classes.city} fontSize ${classes.tourInfo}`}>{tourDate.venue.city}, {tourDate.venue.region}</div>
            </div>
            <a href={url} target="_blank" rel="noopener noreferrer">
              <button className={classes.ticketButton}>TICKETS</button>
            </a>
          </div>
        </div>
      </div>
    )
  };

  const fetchTourDates = () => {
    const key = process.env.REACT_APP_BIT_KEY
    fetch(`https://rest.bandsintown.com/artists/space%20bacon/events?app_id=${key}&date=upcoming`)
    .then(response => response.json())
    .then(data => setTourDates(data))
  }

  return (
    <>
      <h1 id="Tour">Tour</h1>
      <div className={classes.page}>
        <img src={tourFlyer} alt="space bacon tour flyer" className={classes.flyer}/>
      </div>
      <>
        {tourDates.map((tourDate, count) => renderTourDate(tourDate, count))}
      </>
    </>
  )
}

export default Tour