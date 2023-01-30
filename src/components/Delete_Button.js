import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';




export default function Delete_Button({ setWord, setTextData }) {

    function confirmDelete() {
        let userInput = window.confirm("Are you sure you want to clear all your data?");
        if (userInput) {
            console.log('userInput')
            setWord('')
            setTextData('')


        }
    }

    return (
        <>
            <Button variant="danger" onClick={confirmDelete}>Clear All Data</Button>
        </>
    );
}