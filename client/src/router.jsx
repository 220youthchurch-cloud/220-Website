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
import Serve from './pages/Serve'
import Contact from './pages/Contact';

import ErrorPage from './pages/ErrorPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
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