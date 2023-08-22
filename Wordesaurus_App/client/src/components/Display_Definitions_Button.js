import Button from 'react-bootstrap/Button';
import React from 'react';
import axios from "axios";


function combineString(result, definition, partOfSpeech) {
    result += `Definition: ${definition}\n`
    result += `Part of Speech: ${partOfSpeech}\n\n`
    return result
}

function aggregateDefinitions(definitions, result = '') {
    for (let i = 0; i < definitions.length; i++) {
        let definition = definitions[i].definition
        let partOfSpeech = definitions[i].partOfSpeech
        result = combineString(result, definition, partOfSpeech)
    }
    return result
}

function displayDefinitions(retrievedData, word, setTextData) {

    if (retrievedData && retrievedData.definitions.length > 0) {
        let definitions = aggregateDefinitions(retrievedData.definitions)
        return setTextData(`Word: ${word}\n\n${definitions}`)
    }
    else return setTextData(`${word} not found. Please try another word.`)
}

function requestDefinitions(options, word, setTextData) {

    axios.request(options).then(function (response) {
        displayDefinitions(response.data, word, setTextData)
    }).catch(function (error) {
        console.error(error);
        displayDefinitions(false, word, setTextData)
    });
}

export default function Display_Definitions_Button({ word, setTextData }) {

    const getDefinitions = () => {

        const options = {
            method: 'GET',
            url: `https://wordsapiv1.p.rapidapi.com/words/${word}/definitions`,
            headers: {
                'X-RapidAPI-Key': '',
                'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
            }
        };

        return requestDefinitions(options, word, setTextData)

    }


    return (
        <>
            <Button variant="info" onClick={getDefinitions}>Display Definitions</Button>
        </>
    );
}