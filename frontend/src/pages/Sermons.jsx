import React from 'react';
import SermonsHeader from '../components/Sermons/SermonHeader';
import LatestSermon from '../components/Home/LatestSermon';
import SermonSeries from '../components/Sermons/SermonSeries';
import WatchLive from '../components/Sermons/WatchLive';
import SermonTestimonies from '../components/Sermons/SermonTestimonies';

function Sermons() {
  return (
    <div>
      <SermonsHeader />
      <LatestSermon />
      <SermonSeries />
      <WatchLive />
      <SermonTestimonies />
    </div>
  );
}

export default Sermons;
