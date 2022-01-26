import React from 'react';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import TodoMain from './TodoMain';

function App() {
    return (
        <div className="p-8 min-h-screen">
            <div className="w-11/12 mx-auto flex flex-col sm:w-1/2">
                <AppHeader appName="Doify" appSlogan="Let's get it done!" />
                <TodoMain />
                <AppFooter />
            </div>
        </div>
    );
}

export default App;
