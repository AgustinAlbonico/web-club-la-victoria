import React, { useState, useEffect } from 'react';
import { Home } from '../components/Home/Home';
import { About } from '../components/About/About';
//import { Services } from '../components/services';
import { Contact } from '../components/contact';
import { Reservas } from '../components/Reservas/Reservas';

import SmoothScroll from 'smooth-scroll';
import JsonData from '../data/data.json';

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const Landing = () => {
  const [landingPageData, setLandingPageData] = useState({});

  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Home data={landingPageData.Header} />
      <About data={landingPageData.About} />
      <Reservas />
      {/* <Services data={landingPageData.Services} /> */}
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default Landing;
