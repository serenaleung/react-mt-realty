import React from 'react';
import { useParams } from "react-router-dom";

export default function Listing() {
    const {id} = useParams();

    return (
        <div>
            <p>LISTING</p>
            <h3>id: {JSON.stringify(id)}</h3>
        </div>
    );
}

