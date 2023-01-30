import Button from 'react-bootstrap/Button';
import React, { useState, useEffect } from 'react';
import axios from "axios";





export default function Display_Definitions_Button({ word, setTextData }) {

    const getDefinitions = () => {

        const options = {
            method: 'GET',
            url: `https://wordsapiv1.p.rapidapi.com/words/${word}/definitions`,
            headers: {
                'X-RapidAPI-Key': '20844d34a2msha88b8a9c6962df5p1ea45cjsnf7a6e1648252',
                'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
            }
        };

        const retrievedData = axios.request(options).then(function (response) {
            console.log(response.data);
            displayData(response.data)
        }).catch(function (error) {
            console.error(error);
            displayData(false)
        });

    }


    function displayData(retrievedData) {

        if (retrievedData) {
            let word = 'Word: ' + retrievedData.word + '\n\n'
            let definition = ''
            for (let i = 0; i < retrievedData.definitions.length; i++) {
                definition += 'Definition: ' + retrievedData.definitions[i].definition
                    + '\nPart of Speech: ' + retrievedData.definitions[i].partOfSpeech
                    + '\n\n'
            }
            setTextData(word + definition)
        }

        else {

            setTextData("Word not found. Please try another word.")
        }
    }


    return (
        <>
            <Button variant="info" onClick={getDefinitions}>Display Definitions</Button>
        </>
    );
}