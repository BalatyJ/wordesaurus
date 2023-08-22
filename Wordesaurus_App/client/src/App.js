// Import dependencies
import React from 'react';
import { Routes, Route } from 'react-router-dom';



// Import components, styles, media
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation'


// Import pages
import Wordesaurus_App from './pages/Wordesaurus_App.js'
import HomePage from './pages/HomePage.js'



export default function App() {



  return (
    <div id="App">

      <h1 id="Title">
        Word App
      </h1>

      <Navigation />


      {/* Routes adapted from https://www.simplilearn.com/tutorials/reactjs-tutorial/routing-in-reactjs */}
      <Routes>
        <Route path="/word-app" element={<Wordesaurus_App />} />

        <Route path="/" exact element={<HomePage />} />
      </Routes>



      {/* Footer adapted from https://love2dev.com/blog/html-website-copyright/*/}
      <footer>
        <p>Copyright &copy; Joseph Balaty. {new Date().getFullYear()} All Rights Reserved.</p>
      </footer>


    </div>
  );
}
