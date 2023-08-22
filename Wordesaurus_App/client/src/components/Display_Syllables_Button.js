import Button from 'react-bootstrap/Button';
import React from 'react';
import axios from "axios";



function displaySyllables(retrievedData, word, setTextData) {

    if (retrievedData) {
        let syllableList = retrievedData.syllables.list.join("-")
        let syllableCount = retrievedData.syllables.count
        let syllables = `Syllable Count: ${syllableCount}\n\nSyllables: ${syllableList}`
        return setTextData(`Word: ${word}\n\n${syllables}`)
    }
    return setTextData("Word not found. Please try another word.")
}

function requestSyllables(options, word, setTextData) {
    axios.request(options).then(function (response) {
        return displaySyllables(response.data, word, setTextData)
    }).catch(function (error) {
        console.error(error);
        return displaySyllables(false, word, setTextData)
    });
}

export default function Display_Syllables_Button({ word, setTextData }) {

    const getSyllables = () => {

        const options = {
            method: 'GET',
            url: `https://wordsapiv1.p.rapidapi.com/words/${word}/syllables`,
            headers: {
                'X-RapidAPI-Key': '',
                'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
            }
        };

        requestSyllables(options, word, setTextData)
    }



    return (
        <>
            <Button variant="info" onClick={getSyllables}>Display Syllables</Button>
        </>
    );
}