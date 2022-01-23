import React from 'react';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import Organiser from './Organiser';

function App() {
    return (
        <div className="app-wrapper">
            <div className="app">
                <AppHeader appName="Doify" appSlogan="Let's get it done!" />
                <Organiser />
                <AppFooter />
            </div>
        </div>
    );
}

export default App;
