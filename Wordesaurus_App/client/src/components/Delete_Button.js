import Button from 'react-bootstrap/Button';
import React from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';




export default function Delete_Button({ setWord, setTextData }) {

    function confirmDelete() {
        let userInput = window.confirm("Are you sure you want to clear all your data?");

        if (userInput) {
            setWord('')
            setTextData('')
        }
    }

    return (
        <OverlayTrigger
            key='left'
            placement='left'
            overlay={
                <Tooltip id='tooltip-left'>
                    This will clear your search field and text area.
                </Tooltip>}>
            <Button variant="danger" onClick={confirmDelete}>Clear All Data</Button>
        </OverlayTrigger>
    );
}