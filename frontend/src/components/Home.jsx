import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'flowbite-react';
import backgroundImage from '../assets/images/background1.png';
import whitefill from '../assets/images/whitefill.png';
import '../Home.css';

function Home() {
  const containerStyles = {
    position: 'relative',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  };

  const backgroundStyles = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    filter: 'blur(8px)',
    zIndex: -1,
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  };

  const overlayStyles = {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    padding: '20px',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  };

  return (
    <div className='container'>
      <div style={containerStyles}>
        <div style={backgroundStyles} />

        <div className="partyboy-logo">
          <img
            className='!mt-[-40]'
            src={whitefill}
            alt=""
            rotate
            style={{
              width: '25%',
              marginTop: '-100px',
              animation: 'spin 20s linear infinite',
              transformOrigin: 'center',
            }}
          />
          <span className="self-center partyboy-text tracking-wide whitespace-normal underline dark:text-white decoration-pink-300 text-9xl font-extrabold text-white" style={{ marginTop: '-40px', textShadow: '2px 4px 10px rgba(0, 0, 0, 0.75)' }}>
            PartyBoy
          </span>
        </div>

        <div className="mt-20 py-8 px-4 mx-auto text-center lg:py-16" style={overlayStyles}>
          <h1 className="mb-4 text-2xl font-extrabold tracking-normal leading-none text-white md:text-2xl lg:text-3xl text-white">
            Click the button below to get started brah!
          </h1>
          <Link to="/signup" >
            <Button size="xl" gradientDuoTone="purpleToPink" className="mb-4 text-2xl font-bold">
              Let's Party
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
