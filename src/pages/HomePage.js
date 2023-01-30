import React, { useState } from 'react';

// import components
import Delete_Button from '../components/Delete_Button'
import Display_Antonyms_Button from '../components/Display_Antonyms_Button'
import Display_Definitions_Button from '../components/Display_Definitions_Button'
import Display_Synonyms_Button from '../components/Display_Synonyms_Button'
import Generate_Random_Word_Button from '../components/Generate_Random_Word_Button'
import Search_Field from '../components/Search_Field'

// import bootstrap styles
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';


export default function HomePage() {


    const [word, setWord] = useState('');
    const [TextData, setTextData] = useState([]);

    return (
        <>
            <Form>
                <Container>

                    <h1 id='Title'>Wordesaurus</h1>

                    <span className="word_entry">


                        <Search_Field setWord={setWord} word={word} />

                        <div className='button_center'>
                            <Generate_Random_Word_Button />
                        </div>

                    </span>


                    <div className='delete_button'>
                        <Delete_Button setWord={setWord} setTextData={setTextData} />
                    </div>

                    <p className='DisplayInfo'>
                        Click a button below to display the definitions, synonyms, or antonyms of a word.
                    </p>

                    <div className='DisplayButtons'>

                        <Display_Definitions_Button word={word} setTextData={setTextData} />

                        <Display_Antonyms_Button />

                        <Display_Synonyms_Button />

                    </div>




                    <textarea name="word_data_output"
                        value={TextData} id="word_data_output" cols="120" rows="15" disabled>
                    </textarea>

                </Container>
            </Form>

        </>
    );
}