import { DarkThemeToggle, Flowbite } from 'flowbite-react';
import SlidingEvents from './components/Slideshow';
import NavbarWithButton from './components/NavBar'

function App() {
  return (
    <Flowbite>
      <div className="container mx-auto">
        <DarkThemeToggle/>
        <NavbarWithButton/>
        <SlidingEvents/>
      </div>
    </Flowbite>
  );
};

export default App;