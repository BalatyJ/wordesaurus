import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';


export default function Generate_Random_Word_Button() {
    const [show, setShow] = useState(true);

    return (
        <>
            <Button variant="success">Generate Random Word</Button>
        </>
    );
}