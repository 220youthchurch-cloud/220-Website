import { createBrowserRouter } from 'react-router-dom';
import { App } from './App';
/* Import all pages here */
// import { Home } from './Home';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // errorElement: <NotFound /> TODO: do this later
    children: [
      {
        index: true,
        element: <p>Home page here</p>,
      },
      {
        path: 'about',
        element: <p>About page here</p>
      },
      {
        path: 'Our Team',
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