import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faHashnode, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

library.add(faHashnode, faGithub, faLinkedinIn, faEnvelope, faChevronDown);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
