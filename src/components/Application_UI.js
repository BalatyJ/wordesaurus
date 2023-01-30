import React from 'react';


export default function Application_UI() {
    return (
        <>
            <div class="home">

                <form action="/" method="POST">
                    <label>
                        <input type="text" placeholder="Search for a word..." id="word" />
                        Enter a word or use a randomly generated word to learn more about it:
                    </label>

                    <button>
                        Generate Random Word
                    </button>

                    <button>
                        Clear All Data
                    </button>

                    <p>
                        Click the Display Definition button to get the definition and type of the word.
                    </p>

                    <input type="submit" name="display_definition" value="Display Definition" />

                    <button>
                        Display Synonyms
                    </button>

                    <button>
                        Display Antonyms
                    </button>

                </form>

                <textarea name="word_data_output" id="word_data_output" cols="120" rows="20" disabled>
                    Test data.
                </textarea>


            </div>
        </>
    );
}