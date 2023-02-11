import React from 'react';
import './App.css';
import MainComponent from './component/sections/MainComponent/MainComponent';
import * as Sentry from "@sentry/react";

function App() {
    return (
        <div className="App">
            <MainComponent />
        </div>
    );
}

export default Sentry.withProfiler(App);
