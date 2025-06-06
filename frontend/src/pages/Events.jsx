import React from 'react';
import EventsHeader from '../components/Events/EventsHeader';
import UpcomingEvents from '../components/Events/UpcomingEvents';
import FeaturedEvents from '../components/Events/FeaturedEvents';
import EventGallery from '../components/Events/EventGallery';
import VolunteerCTA from '../components/Events/VolunteerCTA';

function Events() {
  return (
    <div>
      <EventsHeader />
      <UpcomingEvents />
      <FeaturedEvents />
      <EventGallery />
      <VolunteerCTA />
    </div>
  );
}

export default Events;
