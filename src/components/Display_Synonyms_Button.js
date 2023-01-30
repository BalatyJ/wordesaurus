import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';


export default function Display_Synonyms_Button() {
    const [show, setShow] = useState(true);

    return (
        <>
            <Button variant="info">Display Synonyms</Button>
        </>
    );
}