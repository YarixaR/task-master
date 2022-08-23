import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import React, { useEffect, useState } from 'react';


function App() {

  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
