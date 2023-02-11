import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";

import Layout from './component/Layout/Layout';

Sentry.init({
    dsn: "https://examplePublicKey@o0.ingest.sentry.io/0",
    integrations: [new BrowserTracing()],

    // We recommend adjusting this value in production, or using tracesSampler
    // for finer control
    tracesSampleRate: 1.0,
});


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Layout>
            <App />
        </Layout>
    </React.StrictMode>
);