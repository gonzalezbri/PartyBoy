
import { Navbar } from 'flowbite-react';
import img1 from '../assets/images/img1.jpg'

export default function NavbarWithButton() {
    const navbarStyles = {
    background: '#D6A5D2', // Change the background color to the desired hex color
    };

    const linkStyles = {
    color: 'white', // Change the link text color to white
    };

    return (
    <Navbar fluid rounded style={navbarStyles}>
        <Navbar.Brand href="https://flowbite-react.com">
        <img
            alt="Flowbite React Logo"
            className="mr-3 h-6 sm:h-9"
            src={img1}
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            PartyBoy
        </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
        <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
        <Navbar.Link active href="#" style={linkStyles}>
            <p>Home</p>
        </Navbar.Link>
        <Navbar.Link href="#" style={linkStyles}>
            Sign In
        </Navbar.Link>
        <Navbar.Link href="#" style={linkStyles}>
            Sign Up
        </Navbar.Link>
        <Navbar.Link href="#" style={linkStyles}>
            Contact
        </Navbar.Link>
        </Navbar.Collapse>
    </Navbar>
    );
}


