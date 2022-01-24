import React from 'react';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import TodoMain from './TodoMain';

function App() {
    return (
        <div className="app-wrapper">
            <div className="app">
                <AppHeader appName="Doify" appSlogan="Let's get it done!" />
                <TodoMain />
                <AppFooter />
            </div>
        </div>
    );
}

export default App;
