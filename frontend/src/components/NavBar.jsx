import React from 'react';
import { Navbar } from 'flowbite-react';
import logowhite from '../assets/images/logowhite.png';
import { Link } from 'react-router-dom';

export default function NavbarWithButton() {
  const navbarStyles = {
    background: 'rgba(0, 0, 0, 0.5)',
    zIndex: '1000',
  };

  const handleSignout = async () => {
    try {
      const response = await fetch('/signout', {
        method: 'POST',
        credentials: 'include',
      });

      if (response.status === 200) {
        // Redirect the user to the login page or perform other actions as needed
        window.location.href = '/signin'; 
      } else {
        // Handle error responses
        console.error('Error during logout:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Navbar fluid rounded style={navbarStyles}>
      <Navbar.Brand href="/">
        <img
          alt="Logo"
          className="mr-5 h-6 sm:h-9 scale-150"
          src={logowhite}
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
        <div className='px-10'>
          <button
            className='text-2xl font-extrabold decoration-pink-300 text-white hover:text-red-400'
            onClick={handleSignout}>
            Sign Out
          </button>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}
