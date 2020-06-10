import React from 'react';
import Chart from 'chart.js';

/**
 * Creates a Graph / Chart for displaying data
 */

class Graph extends React.Component {

    constructor(props) {
        super(props);
        this.chartRef = React.createRef();
    }

    componentDidMount() {
        
        this.generateGraph(this.setGraphLayout());
        
    }

    componentDidUpdate() {

        this.chart.data.datasets[0].data = this.props.data;
        this.chart.update();

    }


     /**
     * Sets up the layout for a chart (title, graph color...)
     */

    setGraphLayout() {

        let layout = {
            title: '',
            labels: [],
            color: '',
            backgroudColor: '',
            data: []
        }

        let hourLabels = ['0H','+3H','+6H', '+9H', '+12H', '+15H', '+18H', '+21H', '+24H'];

        switch (this.props.code) {
            case "tem":
                layout.title = 'Temperature (ºC)';
                layout.labels = hourLabels;
                layout.color = 'rgba(255, 0, 0, 1)';
                layout.backgroudColor = 'rgba(0,0,0,0)';
                layout.data = this.props.data;
                break;
            case "pre":
                layout.title = 'Pressure (hPa)';
                layout.labels = hourLabels;
                layout.color = 'rgba(0, 255, 0, 1)';
                layout.backgroudColor = 'rgba(0,0,0,0)';
                layout.data = this.props.data;
                break;
            case "hum": 
                layout.title = 'Relative Humidity (%)';
                layout.labels = hourLabels;
                layout.color = 'rgba(0, 0, 255, 1)';
                layout.backgroudColor = 'rgba(0,0,0,0)';
                layout.data = this.props.data;
                break;
            case "rai":
                layout.title = 'Rainfall (mm)';
                layout.labels = hourLabels;
                layout.color = 'rgba(0, 0, 255, 1)';
                layout.backgroudColor = 'rgb(0, 0, 255, 1)';
                layout.data = this.props.data;
                break;
            case "win": 
                layout.title = 'Wind Speed (Km/h)';
                layout.labels = hourLabels;
                layout.color = 'rgba(245, 229, 27, 1)';
                layout.backgroudColor = 'rgba(0, 0, 0, 0)';
                layout.data = this.props.data.map( data => Math.round(data * ( 18 / 5)) );    // Transformation m/s to Km/h
                break;
            case "clo":
                layout.title = 'Coverage (%)';
                layout.labels = hourLabels;
                layout.color = 'rgb(191, 191, 191, 1)';
                layout.backgroudColor = 'rgba(191, 191, 191, 1)';
                layout.data = this.props.data;
                break;
            default:
                break;
        }

        return layout
      
    }

    /**
     * Creates the chart
     * @param {*} layout Receives a basic layout
     */

    generateGraph( layout ) {

        this.chart = new Chart(this.chartRef.current, {
            type: this.props.charType,
            data: {
                labels: layout.labels,
                datasets: [{
                    label: layout.title,
                    data: layout.data,
                    borderColor: layout.color,
                    borderWidth: 2,
                    pointBackgroundColor: layout.color,
                    backgroundColor: layout.backgroudColor
                }]
            },
            options: {
                
            }
        })

        return this.chart;
    }

    render() {
        return(
            <canvas ref={this.chartRef}/>
        )
    }

}

export default Graph;

