import React from 'react';
import styled from 'styled-components';

export default function Title(props) {

    const Title = styled.h1`
        text-align: center;
        margin-top: 3px;
        font-size: 2.5em;
        text-shadow: 2px 2px 5px lightgray; 
    `;

    const Subtitle = styled.h4`
        text-align: center;
        text-shadow: 2px 2px 5px lightgray; 
    ` 


    return( 
    <div>
        <Title>Meteorological Data for {props.city} ({ props.country})</Title>
        <Subtitle>Coordinates ( X: {props.coordinates.lon} Y: {props.coordinates.lat} )</Subtitle>
        <hr/>
    </div>

    )
}