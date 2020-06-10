import React from 'react';
import DataChart from '../data-chart';
import styled from 'styled-components';

/**
 * Renders the Component that contains the Chart and the Button
*/

class DataSquare extends React.Component {

    ChartTitle = styled.h5`
        text-align: center;
        transition: font 0.3s;
        &:hover {
            text-shadow: 2px 2px 5px lightgray;
            font-size: 23px;
        }
    `

    render() {
        return (
        <div className="datasquare col-lg-4 col-md-6 col-sm-12 mt-3">
            <this.ChartTitle>{this.props.title}</this.ChartTitle>
            <DataChart data={this.props.data} chartId={this.props.chartId} code={this.props.code} chartType={this.props.chartType}  />
        </div>
        )
    }


}

export default DataSquare;


