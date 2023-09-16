
import { Button, Navbar } from 'flowbite-react';

export default function NavbarWithButton() {
    return (
    <Navbar
        fluid
        rounded
    >
        <Navbar.Brand href="https://flowbite-react.com">
        <img
            alt="Flowbite React Logo"
            className="mr-3 h-6 sm:h-9"
            src="../assets/images/trevor.jpg"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            PartyBoy
        </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
        <Button gradientDuoTone="purpleToPink">
            Let's Party
        </Button>
        <Navbar.Toggle/>
        </div>
        <Navbar.Collapse>
        <Navbar.Link
            active
            href="#">
            <p>
            Home
            </p>
        </Navbar.Link>
        <Navbar.Link href="#">
            Sign In
        </Navbar.Link>
        <Navbar.Link href="#">
            Sign Up
        </Navbar.Link>
        <Navbar.Link href="#">
            Contact
        </Navbar.Link>
        </Navbar.Collapse>
    </Navbar>
    )
}


