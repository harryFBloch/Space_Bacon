import React from 'react';
import classes from './Tour.module.css';
import tourFlyer from '../images/springTourFlyer.png'

const springTour = [
  {date: 'Feb 15', venue: 'The Stone Church', city: 'Brattleboro, VT', ticketLink: 'https://m.bpt.me/event/4488972'},
  {date: 'Feb 22', venue: 'Bourbon on Division', city: 'Chicago, IL', ticketLink: 'https://www.bandsintown.com/t/1018721412?app_id=squarespace-space-bacon&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=ticket&mkt_source=space-bacon.squarespace.com'},
  {date: 'Mar 7', venue: 'Milkboy', city: 'Philadelphia, PA', ticketLink: 'https://www.eventbrite.com/e/space-bacon-tickets-88707541645?aff=aff0bandsintown&appId=fdhnerfcnpr-fcnpr-onpba&comeFrom=267&artist_event_id=1018749736'},
  {date: 'Mar 21', venue: 'Debonair Music Hall', city: 'Teaneck, NJ', ticketLink: 'https://debonairmusichall.showare.com/eventperformances.asp?evt=605&fbclid=IwAR0n5jIQAEDVGu5WZ5V2Th56gqLAbEQCd6GiRVzhcTHjwXnqGRlyTbwhp7w'},
  {date: 'Mar 27', venue: 'Cervantes Ballroom', city: 'Denver, CO', ticketLink: 'https://www.eventbrite.com/e/magic-beans-w-space-bacon-dizgo-tickets-94287551605?aff=aff0bandsintown&appId=fdhnerfcnpr-fcnpr-onpba&comeFrom=267&artist_event_id=1019574824'},
  {date: 'Mar 28', venue: 'Moxi Theater', city: 'Greely, CO', ticketLink: 'https://www.bandsintown.com/t/1019499959?app_id=squarespace-space-bacon&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=ticket&mkt_source=space-bacon.squarespace.com'},
  {date: 'APR 10', venue: 'Brooklyn Bowl', city: 'Brooklyn, NY', ticketLink: 'https://www.ticketweb.com/event/pink-talking-fish-brooklyn-bowl-tickets/10388305?irgwc=1&clickid=Ul52hdRYGxyJWtEwUx0Mo382UknQPN0h3xFp1I0&camefrom=CFC_BUYAT_219208&impradid=219208&REFERRAL_ID=tmfeedbuyat219208&wt.mc_id=aff_BUYAT_219208&utm_source=219208-Bandsintown&impradname=Bandsintown&utm_medium=affiliate'},
  {date: 'APR 11', venue: 'Arch Street Tavern', city: 'Hartford, CT', ticketLink: 'https://www.bandsintown.com/t/101945654?app_id=squarespace-space-bacon&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=ticket&mkt_source=space-bacon.squarespace.com'},
  {date: 'APR 18', venue: 'The Capitol Room at HMAC', city: 'Harrisburg, PA', ticketLink: 'https://www.shareasale.com/r.cfm?b=234786&u=459899&m=27601&urllink=https%3A%2F%2Fharrisburgarts.ticketfly.com%2Fe%2Fspace-bacon-sun-rain-and-teddy-midnight-in-the-capitol-room-90021592005%2F'},
  {date: 'ARP 25', venue: 'The Pour House', city: 'Raleigh, NC', ticketLink: 'https://www.bandsintown.com/t/101985667?app_id=squarespace-space-bacon&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=ticket&mkt_source=space-bacon.squarespace.com'},
  {date: 'MAY 8', venue: "Mr Small's Theatre", city: 'Millvale, PA', ticketLink: 'https://www1.ticketmaster.com/space-bacon-w-tba-millvale-pennsylvania-05-08-2020/event/16005843BCBB47F9?irgwc=1&clickid=Ul52hdRYGxyJWtEwUx0Mo382UknQPPzR3xFp1I0&camefrom=CFC_BUYAT_219208&impradid=219208&REFERRAL_ID=tmfeedbuyat219208&wt.mc_id=aff_BUYAT_219208&utm_source=219208-Bandsintown&impradname=Bandsintown&utm_medium=affiliate'},
  {date: 'MAY 9', venue: 'The Summit Music Hall', city: 'Columbus, OH', ticketLink: 'https://www.bandsintown.com/e/102070481'},
  {date: 'MAY 22', venue: 'Pearl Street Werehouse', city: 'Washington, DC', ticketLink: 'https://www.bandsintown.com/t/1019497053?app_id=squarespace-space-bacon&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=ticket&mkt_source=space-bacon.squarespace.com'},
  {date: 'MAY 23', venue: 'The 8x10', city: 'Baltimore, MD', ticketLink: 'https://www.bandsintown.com/e/102070482?app_id=squarespace-space-bacon&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=event&mkt_source=space-bacon.squarespace.com'},
  {date: 'MAY 30', venue: 'Charleston Pour House', city: 'Charleston Heights, SC', ticketLink: 'https://www.bandsintown.com/t/1019497034?app_id=squarespace-space-bacon&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=ticket&mkt_source=space-bacon.squarespace.com'},
  {date: 'JUN 5', venue: 'River Street Jazz Cafe', city: 'Plains, PA', ticketLink: 'https://tickets.holdmyticket.com/checkout/event/357121/track_code/hmt'},
  {date: 'JUN 6', venue: 'Buffalo Iron Works', city: 'Buffalo, NY', ticketLink: 'https://www.bandsintown.com/t/102070484?app_id=squarespace-space-bacon&came_from=267&utm_medium=api&utm_source=public_api&utm_campaign=ticket&mkt_source=space-bacon.squarespace.com'},
  {date: 'JUN 19', venue: "Schmiggity's Live Music & Dance Bar", city: 'Steamboat Springs, CO', ticketLink: 'https://www.brownpapertickets.com/event/4522100'},
]

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
      <h1 id="Tour">Tour</h1>
      <div className={classes.page}>
        <img src={tourFlyer} alt="space bacon tour flyer" className={classes.flyer}/>
      </div>
      <>
        {springTour.map((tourDate, count) => renderTourDate(tourDate, count))}
      </>
    </>
  )
}

export default Tour