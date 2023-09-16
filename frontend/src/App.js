import { Flowbite } from 'flowbite-react';
import SlidingEvents from './components/Slideshow';
import NavbarWithButton from './components/NavBar';
import Home from './components/Home';

function App() {
  return (
    <Flowbite>
      <div className="">
        <NavbarWithButton />
      </div>
      <div className="mt-8">
        <Home />
        <SlidingEvents />
      </div>
      
    </Flowbite>
  );
}

export default App;