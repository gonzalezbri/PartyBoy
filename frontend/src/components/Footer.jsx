import { Footer } from 'flowbite-react';
import logowhite from '../assets/images/logowhite.png';

export default function FooterWithLogo() {
    const navbarStyles = {
        background: 'rgba(0, 0, 0, 0.5)',
        //background: '#D6A5D2',
        zIndex: '1000',
        };
    
    return (
    <Footer className="mt-20" fluid rounded style={navbarStyles} container>
        <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
            <Footer.Brand alt="PartyBoy Logo"
            href="/"
            className='mx-10 scale-150'
            src={logowhite}>
                <span className="self-center tracking-wide whitespace-normal underline decoration-pink-300 text-3xl font-extrabold text-pink-100/50 hover:text-purple-400">PartyBoy</span>
            </Footer.Brand>
            
            <Footer.LinkGroup>
            <Footer.Link href="#">
                Contact
            </Footer.Link>
            </Footer.LinkGroup>
        </div>
        </div>
    </Footer>
    )
}


