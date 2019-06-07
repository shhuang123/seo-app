import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Analytics from './components/Analytics';
import Metadata from './components/Metadata';

function App() {
  return ( <
    div className = "App" >
    <Nav / >
    <Analytics
    //pass urlRequest responses into this component
    />
    <Metadata / >
    </div>
  );
}

export default App;
