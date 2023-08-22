import React from 'react';


export default function Search_Field({ setWord, word }) {


    const updateWord = event => {
        setWord(event.target.value)
    }

    return (
        <fieldset>
            <legend><h5>Word Search</h5></legend>
            <label for="word" className="wordSearchLabel">
                <table>
                    <td>
                        <input type="text" onChange={updateWord} value={word} placeholder="Search for a word..." id="word" />
                    </td>

                    <td>
                        Enter a word or use a randomly generated word to learn more about it.
                    </td>
                </table>

            </label>
        </fieldset >

    );
}