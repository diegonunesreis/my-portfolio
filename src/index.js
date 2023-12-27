import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHashnode, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faChevronDown, faHeart } from '@fortawesome/free-solid-svg-icons';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

library.add(
  faHashnode,
  faGithub,
  faLinkedinIn,
  faEnvelope,
  faChevronDown,
  faHeart
);

const client = new ApolloClient({
  uri: "https://gql.hashnode.com/",
  cache: new InMemoryCache()
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
