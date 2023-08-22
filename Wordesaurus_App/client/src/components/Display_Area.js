import React from 'react';

export default function Display_Area({ textData }) {

    return (
        <textarea name="display_area"
            value={textData} id="display_area" cols="120" rows="15" disabled>
        </textarea>
    );
}