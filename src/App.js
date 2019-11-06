import React from 'react';
import './App.css';
import skallas from './skallas.jpg';

import EpisodesList from  './components/EpisodesList.js';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={skallas} className="App-logo" alt="logo" />
        <p>All Lindy Cast Episodes</p>
        <a
          className="App-link"
          href="https://twitter.com/PaulSkallas"
          target="_blank"
          rel="noopener noreferrer"
        >
          Paul Skallas Twitter
        </a>
        <EpisodesList />
      </header>
    </div>
  );
}

export default App;
