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
import Serve from './pages/serve'
import HomeGroupTeam from './pages/HomeGroupTeam'
import WorshipTeam from './pages/WorshipTeam'
import AVTeam from './pages/AVTeam'
import MediaTeam from './pages/MediaTeam'
import HospitalityTeam from './pages/HospitalityTeam'
import PrayerTeam from './pages/PrayerTeam'
import EventsTeam from './pages/EventsTeam'
import EvangelismTeam from './pages/EvangelismTeam'
import DiscipleshipTeam from './pages/DiscipleshipTeam'
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
        path: 'serve',
        element: <Serve />
      },
      {
        path: 'serve/home-group-leader',
        element: <HomeGroupTeam />
      },
      {
        path: 'serve/worship-team',
        element: <WorshipTeam />
      },
      {
        path: 'serve/av-team',
        element: <AVTeam />
      },
      {
        path: 'serve/media-team',
        element: <MediaTeam />
      },
      {
        path: 'serve/hospitality-team',
        element: <HospitalityTeam />
      },
      {
        path: 'serve/prayer-team',
        element: <PrayerTeam />
      },
      {
        path: 'serve/events-team',
        element: <EventsTeam />
      },
      {
        path: 'serve/evangelism-team',
        element: <EvangelismTeam />
      },
      {
        path: 'serve/discipleship-team',
        element: <DiscipleshipTeam />
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