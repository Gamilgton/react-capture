import React from 'react';

// Import Global Style
import GlobalStyle from './components/GlobalStyle';
import {motion, AnimatePresence} from 'framer-motion';
import {appAnimation} from './styles/animation';

// Slider between pages
import {slider} from './components/Slider'

// Import pages
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import OurWork from './pages/OurWork';
import MovieDetail from './pages/MovieDetail';

// Import components
import Nav from './components/Nav';

// Router
import {Switch, Route, useLocation} from 'react-router-dom';

function App() {

  const location = useLocation();
  console.log(location);

  return (
    <motion.div className="App" variants={appAnimation.fadeIn_1s}
    initial="hidden"
    animate="show"
    >

      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>

        {/* Slider between pages */}
        {slider()}
        {/* //////////////////// */}

        <Switch
          location={location} key={location.pathname}
        >

          <Route path="/" exact>
            <AboutUs />
          </Route>

          <Route path="/work" exact>
            <OurWork />
          </Route>

          <Route path="/work/:id">
            <MovieDetail />
          </Route>

          <Route path="/contact">
            <ContactUs />
          </Route>

        </Switch>
      </AnimatePresence>
      
    </motion.div>
  );
}

export default App;
