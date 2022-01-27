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
        this.handleDarkModeClick = this.handleDarkModeClick.bind(this);
    }

    handleDarkModeClick() {
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
                        className="
                        fixed bottom-12 right-4 p-2 bg-slate-700 text-slate-100
                        rounded-full shadow-lg drop-shadow-xl
                        lg:right-1/4 lg:bottom-1/4"
                        type="button"
                        onClick={this.handleDarkModeClick}>
                        <MoonIcon className="w-8 h-8" />
                    </button>
                </div>
            </div>
        );
    }
}

export default App;
