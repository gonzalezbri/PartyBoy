import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Flowbite } from 'flowbite-react';
import SlidingEvents from './components/Slideshow';
import NavbarWithButton from './components/NavBar';
import Home from './components/Home';
import CreateEvent from './components/CreateEvent';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import FooterWithLogo from './components/Footer';

function App() {
  return (
    <Router>
      <Flowbite>
        <div>
          <NavbarWithButton />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home />
                  <SlidingEvents />
                  <FooterWithLogo />
                </>
              }
            />
            <Route path="/create-event" element={<CreateEvent />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </div>
      </Flowbite>
    </Router>
  );
}

export default App;
