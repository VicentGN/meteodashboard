import React from 'react';
import styled from 'styled-components';

export default function Footer() {

    const FooterSpace = styled.div`
        margin-top: 35px
    `
    
    const FooterText = styled.p`
        text-align: center;
    `
    
    return (
    <FooterSpace>
        <FooterText> Web App designed by Vicent García </FooterText>
        <FooterText> Powered by <a href="https://reactjs.org/">ReactJS</a>, <a href="https://styled-components.com/">Style Components</a>, <a href="https://www.chartjs.org/"> ChartJS</a> and <a href="https://getbootstrap.com/"> Bootstrap 4</a></FooterText>
        <FooterText>Data Source: <a href="https://openweathermap.org">OpenWeatherMap API</a></FooterText>
    </FooterSpace>
    )   
    
}