import React from 'react';
import Appbar from './modules/components/AppBar';
import Theme from './modules/theme';
import Home from './Home'
import SignIn from './SignIn';
import SignUp from './SignUp';

const App = () => {
    return (
    <Theme>
        <Appbar />
        <Home />
        <SignIn/>
        <SignUp/>
    </Theme>
    );
};

export default App