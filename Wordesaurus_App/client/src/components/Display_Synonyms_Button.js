import Button from 'react-bootstrap/Button';
import React from 'react';
import axios from 'axios';


function requestSynonyms(options, word, setTextData) {
    axios.request(options).then(function (response) {
        displaySynonyms(response.data, word, setTextData)
    }).catch(function (error) {
        console.error(error);
        displaySynonyms(false, word, setTextData)
    });
}

function displaySynonyms(retrievedData, word, setTextData) {

    if (retrievedData) {

        // If no synonyms are returned, let the user know. Otherwise return the synonyms and the word
        // back to the user.
        if (retrievedData.synonyms.length == 0) {
            return setTextData(`No synonyms found.`)
        }

        let synonyms = `Word: ${word}\n\nSynonyms:\n`
        for (let i = 0; i < retrievedData.synonyms.length; i++) {
            synonyms += `${retrievedData.synonyms[i]}\n`
        }
        return setTextData(synonyms)
    }
    else return setTextData(`${word} not found. Please enter a different word.`)
}


export default function Display_Synonyms_Button({ word, setTextData }) {

    function retrieveSynonyms() {

        const options = {
            method: 'GET',
            url: `https://wordsapiv1.p.rapidapi.com/words/${word}/synonyms`,
            headers: {
                'X-RapidAPI-Key': '',
                'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
            }
        };

        return requestSynonyms(options, word, setTextData)

    }

    return (
        <>
            <Button variant="info" onClick={retrieveSynonyms}>Display Synonyms</Button>
        </>
    );
}
