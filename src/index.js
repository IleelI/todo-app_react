import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';

const rootElement = document.getElementById('root');
rootElement.classList.add('dark:bg-slate-800');
rootElement.classList.add('bg-slate-200');
ReactDOM.render(
    <StrictMode>
        <App />
    </StrictMode>,
    rootElement
);
