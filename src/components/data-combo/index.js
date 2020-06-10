import React from 'react';
import ComboImage from '../combo-image'
import ComboDesc from '../combo-desc'

class DataCombo extends React.Component {

    render() {

        return (

            <div className="col-12 mb-3">
                <div className="row">
                    <ComboImage id={'c1'}  icon={ this.props.icon } description={ this.props.description }/>
                    <ComboDesc id={'c2'} current_temp={ this.props.current_temp } current_temp_max={ this.props.current_temp_max } current_temp_min={this.props.current_temp_min} 
                        current_press={ this.props.current_press } current_hum={ this.props.current_hum } current_wind_speed={ this.props.current_wind_speed } 
                        current_wind_gust={ this.props.current_wind_gust } current_wind_direction={ this.props.current_wind_direction} current_clouds={ this.props.current_clouds } />
                </div>
            </div>
        )


    }



}

export default DataCombo;

