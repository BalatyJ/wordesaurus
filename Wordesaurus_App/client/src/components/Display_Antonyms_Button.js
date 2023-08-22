import Button from 'react-bootstrap/Button';
import React from 'react';
import axios from "axios";



function displayAntonyms(retrievedData, word, setTextData) {

    if (retrievedData) {

        if (retrievedData.antonyms.length == 0) {
            return setTextData("No antonyms found.")
        }

        let result = `Word: ${word}\n\nAntonyms:\n`
        for (let i = 0; i < retrievedData.antonyms.length; i++) {
            result += retrievedData.antonyms[i] + '\n'
        }

        return setTextData(result)
    }

    else return setTextData(`${word} not found. Please enter a different word.`)
}

function requestAntonyms(options, word, setTextData) {
    axios.request(options).then(function (response) {
        displayAntonyms(response.data, word, setTextData)
    }).catch(function (error) {
        console.error(error);
        displayAntonyms(false, word, setTextData)
    });
}

export default function Display_Antonyms_Button({ word, setTextData }) {
    const getAntonyms = () => {

        const options = {
            method: 'GET',
            url: `https://wordsapiv1.p.rapidapi.com/words/${word}/antonyms`,
            headers: {
                'X-RapidAPI-Key': '',
                'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
            }
        };
        return requestAntonyms(options, word, setTextData)
    }


    return (
        <>
            <Button variant="info" onClick={getAntonyms}>Display Antonyms</Button>
        </>
    );
}