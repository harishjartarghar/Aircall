import React from 'react';
import { createRoot } from 'react-dom/client';

import './css/body.css';
import './css/app.css';
import './css/header.css';

import App from './App';

const root = createRoot(document.getElementById('app'));
root.render(<App />);
