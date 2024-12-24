// src/Router.tsx
import { useRoutes } from 'react-router-dom';
import Home from './pages/home';
import AboutUs from './pages/about-us';
import ContactUs from './pages/contact-us';
import TheTeam from './pages/team';
import CaseStudy from './pages/our-work/case-study';
import OurWork from './pages/our-work';


const Router =() => {

  const routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <AboutUs />,
    },
    {
      path: "/contact",
      element: <ContactUs />,
    },
    {
      path: "/team",
      element: <TheTeam />,
    },
    {
      path: "/our-work",
      element: <OurWork />,
    },
    {
      path: "/our-work/case-study/:id",
      element: <CaseStudy />,
    },
  ]);

  return routes;
}

export default Router;
