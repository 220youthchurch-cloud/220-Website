import { createBrowserRouter } from 'react-router-dom';
import App from './App';
/* Import all pages here */
import Home from './pages/Home'
import About from './pages/About'
import Events from './pages/Events'
import Sermons from './pages/Sermons'
import OurStory from './components/home/OurStory'
import MissionVision from './components/home/MissionVision'
import Beliefs from './pages/Beliefs'
import OurTeam from './pages/OurTeam'
import WorshipTeam from './pages/WorshipTeam'
import TechTeam from './pages/TechTeam'
import HospitalityTeam from './pages/HospitalityTeam'
import OutreachTeam from './pages/OutreachTeam'
import DiscipleshipTeam from './pages/DiscipleshipTeam'
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
        path: 'about/our-story',
        element: <OurStory />
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
        path: 'our-team/tech-team',
        element: <TechTeam />
      },
      {
        path: 'our-team/hospitality-team',
        element: <HospitalityTeam />
      },
      {
        path: 'our-team/outreach-team',
        element: <OutreachTeam />
      },
      {
        path: 'our-team/discipleship-team',
        element: <DiscipleshipTeam />
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