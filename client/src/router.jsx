import { createBrowserRouter } from 'react-router-dom';
import App from './App';
/* Import all pages here */
import Home from './pages/Home';
import About from './pages/About'

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
        path: 'our-team',
        element: <p>Our Team page here</p>
      },
      {
        path: 'Events',
        element: <p>Events page here</p>
      },
      {
        path: 'Contact',
        element: <p>Contact page here</p>
      },
    ],
  },
]);