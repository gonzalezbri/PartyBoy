import React from 'react';
import backgroundImage from '../assets/images/background1.png';
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { FiMail, FiSmile } from 'react-icons/fi';

function SignIn() {
    const containerStyles = {
    position: 'relative',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    };

    const backgroundStyles = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'fixed',
    filter: 'blur(8px)',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
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
    width: '100%',
    maxWidth: '400px',
    margin: '0 auto', 
    };

    const formStyles = {
    width: '100%', 
    };

    const inputStyles = {
    width: '100%', 
    marginBottom: '10px',
    };

    return (
    <div style={containerStyles}>
        <div style={backgroundStyles}></div>
        <div style={overlayStyles}>

        <form className="flex flex-col gap-4" style={formStyles}>
            <div class="mx-auto max-w-screen-xl text-center lg:py-10">
                <h1 class="mb-4 text-4xl font-extrabold tracking-normal leading-none text-gray-900 md:text-5xl lg:text-6xl text-white" >Sign In</h1>
            </div>
            <div>
            <div className="mb-2 block"><Label htmlFor="email1" className='text-xl tracking-normal font-bold text-white' value="Your email" /></div>
            <TextInput
                icon={FiMail}
                id="email1"
                placeholder="name@party.com"
                required
                type="email"
                style={inputStyles} 
            />
            </div>
            <div>
            <div className="mb-2 block"><Label htmlFor="password1" className='text-xl tracking-normal font-bold text-white ' value="Your password" /></div>
            <TextInput
                id="password1"
                icon={FiSmile}
                placeholder="Password"
                required
                type="password"
                style={inputStyles} 
            />
            </div>
            <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label className='text-m tracking-normal font-normal text-white' htmlFor="remember">Remember me Brah</Label>
            </div>
            <Button gradientDuoTone="purpleToPink" className="mb-4 text-1xl font-bold" type="submit">Sign In</Button>
        </form>
        </div>
    </div>
    );
}

export default SignIn;


