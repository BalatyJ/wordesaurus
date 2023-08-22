import Display_Antonyms_Button from './Display_Antonyms_Button'
import Display_Definitions_Button from './Display_Definitions_Button'
import Display_Examples_Button from './Display_Examples_Button'
import Display_Synonyms_Button from './Display_Synonyms_Button'
import Display_Syllables_Button from './Display_Syllables_Button'
import React from 'react';


export default function Display_Buttons_Row({ word, setTextData }) {

    return (
        <div className='DisplayButtons'>
            <Display_Definitions_Button word={word} setTextData={setTextData} />

            <Display_Examples_Button word={word} setTextData={setTextData} />

            <Display_Antonyms_Button word={word} setTextData={setTextData} />

            <Display_Synonyms_Button word={word} setTextData={setTextData} />

            <Display_Syllables_Button word={word} setTextData={setTextData} />
        </div>
    );
}