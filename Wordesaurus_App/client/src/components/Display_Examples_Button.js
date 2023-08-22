import Button from 'react-bootstrap/Button';
import React from 'react';
import axios from "axios";


function displayExamples(retrievedData, word, setTextData) {

    if (retrievedData && retrievedData.examples.length > 0) {
        let examples = `Word: ${word}\n\n`

        for (let i = 0; i < retrievedData.examples.length; i++) {
            examples += `Example: ${retrievedData.examples[i]}\n\n`
        }
        return setTextData(examples)
    }

    else return setTextData(`${word} not found. Please try another word.`)
}

function requestExamples(options, word, setTextData) {

    axios.request(options).then(function (response) {
        return displayExamples(response.data, word, setTextData);
    }).catch(function (error) {
        console.error(error);
        return displayExamples(false, word, setTextData);
    });
}

export default function Display_Examples_Button({ word, setTextData }) {

    const getExamples = () => {

        const options = {
            method: 'GET',
            url: `https://wordsapiv1.p.rapidapi.com/words/${word}/examples`,
            headers: {
                'X-RapidAPI-Key': '',
                'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
            }
        };

        return requestExamples(options, word, setTextData)
    }



    return (
        <>
            <Button variant="info" onClick={getExamples}>Display Examples</Button>
        </>
    );
}