import React, {useState} from 'react';
import backgroundImage from '../assets/images/background1.png';
import standing from '../assets/images/standing.png'
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { FiMail, FiSmile, FiUser } from 'react-icons/fi';

function SignUp() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    repeatPassword: '',
  });

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request to your Flask backend
      const response = await fetch('http://127.0.0.1:5000/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Send user data as JSON
      });

      if (response.status === 201) {
        // User created successfully, handle the success
        console.log('User created successfully');
        // Redirect or show a success message
      } else {
        // Handle error responses
        const errorData = await response.json(); // Parse error JSON data
        console.error('Error creating user:', errorData.error);
        // Display error message to the user
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // Function to handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    };

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
    const standingImageStyles = {
      width: '200px', 
      height: 'auto',
      };

    return (
    <div style={containerStyles}>
        <div style={backgroundStyles}></div>
        <div style={overlayStyles}>

        <form className="flex flex-col gap-4" style={formStyles} onSubmit={handleSubmit}>
            <div class="mx-auto max-w-screen-xl text-center lg:py-8">
                <h1 class="mb-4 text-4xl font-extrabold tracking-normal leading-none text-gray-900 md:text-5xl lg:text-6xl text-white" >Sign Up</h1>
            </div>
            <div className='text-xl tracking-normal font-bold text-white'>Already a Bro? <a href="/signin" className="text-blue-100 hover:text-purple-400 underline">Sign In Brah!</a>
</div>
            <div>
            <div className="mb-2 block"><Label htmlFor="user" className='text-xl tracking-normal font-bold text-white' value='Create Username'></Label></div>
            <TextInput
                icon={FiUser}
                id="user"
                placeholder="PartyBoy"
                required
                type="text"
                style={inputStyles} 
            />
            <div className="mb-2 block" ><Label htmlFor="email2" className='text-xl tracking-normal font-bold text-white' value="Your email" /></div>
            <TextInput
                icon={FiMail}
                id="email2"
                placeholder="drinking@party.com"
                required
                type="email"
                style={inputStyles} 
            />
            </div>
            <div>
              <div className="mb-2 block">
            <Label htmlFor="password2" className='text-xl tracking-normal font-bold text-white ' value="Your password" /></div>
            <TextInput
            icon={FiSmile}
            id="password2"
            name="password"  // Make sure the field name matches the backend
            placeholder="Password"
            required
            type="password"
            style={inputStyles}
            value={formData.password}  // Bind to the state
            onChange={handleChange}    // Handle changes
          />
            </div>
            <div>
            <div className="mb-2 block">
            <Label htmlFor="repeat-password" className='text-xl tracking-normal font-bold text-white' value="Confirm password"/>
        </div>
        <TextInput
            icon={FiSmile}
            id="repeat-password"
            name="repeatPassword"
            placeholder="Password"
            required
            shadow
            type="password"
            value={formData.repeatPassword}  // Bind to the state
            onChange={handleChange}    // Handle changes
          />
            </div>
            <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember" className='text-m tracking-normal font-normal text-white'>Remember me Brah</Label>
            </div>
            <Button gradientDuoTone="purpleToPink" className="mb-4 text-2xl font-bold" type="submit">Sign Up</Button>
        </form>
        </div>
    </div>
    );
}

export default SignUp;
