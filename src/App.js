// Import dependencies
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useState } from 'react';


// Import components, styles, media
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


// Import pages
import HomePage from './pages/HomePage.js'


export default function App() {
  return (
    <>
      <Router>

        <HomePage />

      </Router>
    </>
  );
}
