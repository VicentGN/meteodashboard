import React from 'react';
import Graph from '../charts/';

/**
 *  Renders the specific chart with weather data
*/ 

class DataChart extends React.Component {

    render() {
        return (
        <div className="datachart border rounded mb-2">
            <Graph chartId={this.props.chartId} data={this.props.data} code={this.props.code} charType={this.props.chartType}/>
        </div>
        )
    }
}

export default DataChart;