import React from 'react';
import { MoonIcon } from '@heroicons/react/solid';
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import TodoMain from './TodoMain';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDarkModeOn: false
        };
        this.toggleDarkMode = this.toggleDarkMode.bind(this);
    }

    toggleDarkMode() {
        const { isDarkModeOn } = this.state;
        const html = document.querySelector('html');
        const updatedMode = !isDarkModeOn;
        if (isDarkModeOn) {
            html.removeAttribute('class');
        } else {
            html.setAttribute('class', 'dark');
        }
        this.setState({
            isDarkModeOn: updatedMode
        });
    }

    render() {
        return (
            <div className="p-8 min-h-screen">
                <div className="relative w-11/12 mx-auto flex flex-col sm:container md:w-3/5 lg:w-2/5">
                    <AppHeader />
                    <TodoMain />
                    <AppFooter />
                    <button
                        className="fixed top-10 right-2.5 p-2 bg-slate-700 text-slate-100 rounded-full drop-shadow-lg"
                        type="button"
                        onClick={this.toggleDarkMode}>
                        <MoonIcon className="w-8 h-8 md:w-12 md:h-12 xl:w-16 xl:h-16" />
                    </button>
                </div>
            </div>
        );
    }
}

export default App;
