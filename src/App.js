import React from 'react';
import './App.css';
import skallas from './skallas.jpg';

import Container from 'react-bootstrap/Container';
import EpisodesTable from  './components/EpisodesTable.js';


function App() {
  return (
    <Container>
       <div className="App">
         <h1>lindycast.tk</h1>
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
           <EpisodesTable/>
         </header>
       </div>
    </Container>
  );
}

export default App;
