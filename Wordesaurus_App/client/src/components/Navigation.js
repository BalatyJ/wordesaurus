import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';


const updateActivePage = (event) => {
    if (event.target.id === "homePageBtn") {
        event.target.style.backgroundColor = 'var(--custom-background-activeNavButton)'
        document.getElementById("wordAppBtn").style.backgroundColor = 'var(--custom-background-navButtons)'
    }
    else {
        event.target.style.backgroundColor = 'var(--custom-background-activeNavButton)'
        document.getElementById("homePageBtn").style.backgroundColor = 'var(--custom-background-navButtons)'
    }
}

function startHomePage(home, wordApp) {
    home.style.backgroundColor = 'var(--custom-background-activeNavButton)'
    wordApp.style.backgroundColor = 'var(--custom-background-navButtons)'
}

function startWordApp(home, wordApp) {
    home.style.backgroundColor = 'var(--custom-background-navButtons)'
    wordApp.style.backgroundColor = 'var(--custom-background-activeNavButton)'
}

export default function Navigation() {

    useEffect(() => {
        if (window.location.pathname === '/') {
            startHomePage(document.getElementById("homePageBtn"), document.getElementById("wordAppBtn"))
        }
        else {
            startWordApp(document.getElementById("homePageBtn"), document.getElementById("wordAppBtn"))
        }
    }, []);



    return (
        <nav class="NavBar">
            <Link to="/"><button id="homePageBtn" onClick={updateActivePage}>Home Page</button></Link>
            <Link to="./word-app"><button id="wordAppBtn" onClick={updateActivePage}>Word App</button></Link>
        </nav>

    );
}