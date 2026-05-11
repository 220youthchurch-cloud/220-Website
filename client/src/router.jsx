import { createBrowserRouter } from 'react-router-dom';
import App from './App';
/* Import all pages here */
import Home from './pages/Home'
import About from './pages/About'
import Events from './pages/Events'
import Sermons from './pages/Sermons'
import WhatIs220 from './components/home/WhatIs220'
import MissionVision from './components/home/MissionVision'
import Beliefs from './pages/Beliefs'
import OurTeam from './pages/OurTeam'
import WorshipTeam from './pages/WorshipTeam'
import HospitalityTeam from './pages/HospitalityTeam'
import MediaTeam from './pages/MediaTeam'
import EventsTeam from './pages/EventsTeam'
import PrayerTeam from './pages/PrayerTeam'
import Contact from './pages/Contact';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // errorElement: <NotFound /> TODO: do this later
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'about/what-is-220',
        element: <WhatIs220 />
      },
      {
        path: 'about/mission-vision',
        element: <MissionVision />
      },
      {
        path: 'about/beliefs',
        element: <Beliefs />
      },
      {
        path: 'our-team',
        element: <OurTeam />
      },
      {
        path: 'our-team/worship-team',
        element: <WorshipTeam />
      },
      {
        path: 'our-team/hospitality-team',
        element: <HospitalityTeam />
      },
      {
        path: 'our-team/media-team',
        element: <MediaTeam />
      },
      {
        path: 'our-team/events-team',
        element: <EventsTeam />
      },
      {
        path: 'our-team/prayer-team',
        element: <PrayerTeam />
      },
      {
        path: 'events',
        element: <Events />
      },
      {
        path: 'sermons',
        element: <Sermons />
      },
      {
        path: 'contact',
        element: <Contact />
      },
    ],
  },
]);