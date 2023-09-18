import { Navbar } from 'flowbite-react';
import img1 from '../assets/images/img1.jpg';
import { Link } from 'react-router-dom';

export default function NavbarWithButton() {
  const navbarStyles = {
    background: 'rgba(0, 0, 0, 0.5)',
    //background: '#D6A5D2',
    zIndex: '1000',
  };

  //const linkStyles = {
    //color: 'purple', style={linkStyles}
  //};

  return (
    <Navbar fluid rounded style={navbarStyles}>
      <Navbar.Brand href="/">
        <img
          alt="Flowbite React Logo"
          className="mr-3 h-6 sm:h-9"
          src={img1}
        />
        <span className="self-center tracking-wide whitespace-normal underline dark:text-white decoration-pink-300 text-5xl font-extrabold text-white hover:text-purple-400">
          PartyBoy
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Link to="/" className='text-2xl font-extrabold underline decoration-pink-300 text-white hover:text-purple-400'>
          <p>Home</p>
        </Link>
        <Link to="/create-event" className='text-2xl font-extrabold underline decoration-pink-300 text-white hover:text-purple-400' >
          Create Event
        </Link>
        <Link to="/signin" className='text-2xl font-extrabold underline decoration-pink-300 text-white hover:text-purple-400' >
          Sign In
        </Link>
        <Link to="/signup" className='text-2xl font-extrabold underline decoration-pink-300 text-white hover:text-purple-400' >
          Sign Up
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
}




