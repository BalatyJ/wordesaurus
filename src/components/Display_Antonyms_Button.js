import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';


export default function Display_Antonyms_Button() {
    const [show, setShow] = useState(true);

    return (
        <>
            <Button variant="info">Display Antonyms</Button>
        </>
    );
}