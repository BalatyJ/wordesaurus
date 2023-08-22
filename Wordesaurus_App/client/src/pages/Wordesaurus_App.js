import React, { useState } from 'react';

// import components
import Delete_Button from '../components/Delete_Button'
import Generate_Random_Word_Button from '../components/Generate_Random_Word_Button'
import Search_Field from '../components/Search_Field'
import Display_Buttons_Row from '../components/Display_Buttons_Row'
import Display_Area from '../components/Display_Area'

// import bootstrap styles
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';


export default function Wordesaurus_App() {

    // word is the value for the search field, and TextData is the large grey field for displaying information about a word.
    const [word, setWord] = useState('');
    const [textData, setTextData] = useState([]);

    return (
        <>
            <Form>
                <Container>

                    {/* Contains the search field and button for generating a random word in the search field. */}
                    <span className="word_entry">

                        <Search_Field setWord={setWord} word={word} />

                        <div className='button_center'>
                            <Generate_Random_Word_Button setWord={setWord} />
                        </div>
                    </span>

                    {/* Clears all user-generated text from the screen. */}
                    <div className='delete_button'>
                        <Delete_Button setWord={setWord} setTextData={setTextData} />
                    </div>


                    <p className='DisplayInfo'>
                        Click a button below to display the different information of each word.
                    </p>


                    {/* Displays a row of buttons that will display different information about the word
                    in the search field. */}
                    <Display_Buttons_Row word={word} setTextData={setTextData} />


                    <Display_Area textData={textData} />

                </Container>
            </Form>

        </>
    );
}