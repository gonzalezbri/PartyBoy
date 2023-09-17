import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Flowbite } from 'flowbite-react';
import SlidingEvents from './components/Slideshow';
import NavbarWithButton from './components/NavBar';
import Home from './components/Home';
import CreateEvent from './components/CreateEvent'; 
import SignIn from './components/SignIn'; 
import SignUp from './components/SignUp'; 

function App() {
  return (
    <Router>
      <Flowbite>
        <div className="">
          <NavbarWithButton />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home />
                  <SlidingEvents />
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
