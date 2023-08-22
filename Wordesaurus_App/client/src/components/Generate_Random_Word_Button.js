import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import axios from 'axios';
import React from 'react';


function requestRandomWord(options, setWord) {
    axios.request(options).then(function (response) {
        setWord(response.data)
    }).catch(function (error) {
        console.error(error);
    });
}

export default function Generate_Random_Word_Button({ setWord }) {


    const generateRandomWord = () => {
        const options = {
            method: 'GET',
            url: `/api`
        };

        requestRandomWord(options, setWord)
    }

    return (
        <OverlayTrigger
            key='top'
            placement='top'
            overlay={
                <Tooltip id='tooltip-top'>
                    Generates a random word and puts it in the Word Search field.
                </Tooltip>}>
            <Button variant="success" onClick={generateRandomWord}>Generate Random Word</Button>
        </OverlayTrigger>
    );
}