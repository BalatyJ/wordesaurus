import React from 'react';


export default function HomePage() {
    return (
        <div class="HomePage">
            <p>Hello, and welcome to the Word App!</p>

            <p>This is my portfolio project for CS 361. Here you can learn more about different kinds of words,
                or look up random words generated by the word app!</p>
            <div class="functionality-overview">
                <p >In the Word App, you can display information about the following:</p>
                <ul >
                    <li >
                        Display Definitions
                        <ul>
                            <li>
                                Display the different meanings of the word, including what kind of word (ie verb, adjective, noun, etc).
                            </li>
                        </ul>
                    </li>

                    <li >
                        Display Examples
                        <ul>
                            <li>
                                Display examples of different use cases of a word.
                            </li>
                        </ul>
                    </li>
                    <li >
                        Display Antonyms
                        <ul>
                            <li>
                                Display the antonyms of a word.
                            </li>
                        </ul>
                    </li>
                    <li >
                        Display Synonyms
                        <ul>
                            <li>
                                Display the synonyms of a word.
                            </li>
                        </ul>
                    </li>
                    <li >
                        Display Syllables
                        <ul>
                            <li>
                                Display the syllables and number of syllables in a word.
                            </li>
                        </ul>
                    </li>

                </ul>
            </div>
        </div >
    );
}