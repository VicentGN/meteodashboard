import React from 'react';
import styled from 'styled-components';

class ComboDesc extends React.Component {

    
    variable = styled.h1`
    text-align: center;
    transition: font 0.3s;
    &:hover {
        text-shadow: 2px 2px 5px lightgray;
        font-size: 50px;
    }
    `
    description = styled.h6`
    ` 

    transformWindDirection( deg ) {
        if ( deg === 0) {
            return 'N'
        } else if ( deg > 0 && deg < 90 ) {
            return 'NE'
        } else if ( deg === 90) {
            return 'E'
        } else if ( deg > 90 && deg < 180 ) {
            return 'SE'
        } else if ( deg === 180 ) {
            return 'S'
        } else if ( deg > 180 && deg < 270 ){
            return 'SW'
        } else if ( deg === 270 ){
            return 'W'
        } else  if (deg > 270 && deg < 359){
            return 'NW'
        } else if ( deg === undefined ) {
            return undefined;
        }
    }

    windFromMetricToKilometric( wind ) {
        return wind !== undefined ? Math.round(wind * ( 18 / 5 )) : undefined;
    }

    checkData = ( data ) => data === undefined ? '- -' : data; 

    render() {

        return ( 

            <div className="col-xl-8 col-lg-8 col-md-6 col-sm-12">
                <div className="col-12 row">
                    <div className="col-lg-4 col-md-6 col-sm-4 text-center">
                        <this.variable> {this.checkData(this.props.current_temp)} </this.variable>
                        <this.description>Temperature (ºC)</this.description>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-4 text-center">
                        <this.variable> {this.checkData(this.props.current_temp_max)} </this.variable>
                        <this.description>Max Temperature(ºC)</this.description>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-4 text-center">
                        <this.variable> {this.checkData(this.props.current_temp_min)} </this.variable>
                        <this.description>Min Temperature(ºC)</this.description>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-4 text-center">
                        <this.variable> {this.checkData(this.props.current_hum)} </this.variable>
                        <this.description>Humidity (%)</this.description>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-4 text-center">
                        <this.variable> {this.checkData(this.props.current_press)} </this.variable>
                        <this.description>Air Pressure (hPa)</this.description>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-4 text-center">
                        <this.variable> {this.checkData(this.props.current_clouds)} </this.variable>
                        <this.description>Cloud Coveage (%)</this.description>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-4 text-center">
                        <this.variable> {this.checkData(this.windFromMetricToKilometric(this.props.current_wind_speed))} </this.variable>
                        <this.description>Wind Speed (Km/h)</this.description>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-4 text-center">
                        <this.variable> {this.checkData(this.windFromMetricToKilometric(this.props.current_wind_gust))} </this.variable>
                        <this.description>Wind Gust (Km/h)</this.description>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-4 text-center">
                        <this.variable> {this.checkData(this.transformWindDirection( this.props.current_wind_direction)) } </this.variable>
                        <this.description>Wind Direction</this.description>
                    </div>
                </div> 

                
            </div>

        )


    }



}

export default ComboDesc;