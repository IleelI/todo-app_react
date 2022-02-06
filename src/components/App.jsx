import React, { Component } from 'react';
import Header from './App/Header';
import Footer from './App/Footer';
import Main from './App/Main';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDarkModeToggled: false
        };
        this.handleDarkModeToggle = this.handleDarkModeToggle.bind(this);
    }

    handleDarkModeToggle() {
        const { isDarkModeToggled: isDarkModeOn } = this.state;
        const html = document.querySelector('html');
        if (isDarkModeOn) html.classList.remove('dark');
        else html.classList.add('dark');
        this.setState(({ isDarkModeToggled }) => ({
            isDarkModeToggled: !isDarkModeToggled
        }));
    }

    render() {
        const { isDarkModeToggled } = this.state;
        return (
            <div className="w-full min-h-screen flex flex-col p-8 bg-zinc-200 dark:bg-gray-800">
                <Header
                    isDarkModeToggled={isDarkModeToggled}
                    onDarkModeToggleClick={this.handleDarkModeToggle}
                />
                <Main />
                <Footer />
            </div>
        );
    }
}

export default App;
