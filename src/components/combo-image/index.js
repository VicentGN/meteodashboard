import React from 'react';

class ComboImage extends React.Component {

    render() {

        return ( 

            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                <p className="text-center"><img src={`http://openweathermap.org/img/wn/${this.props.icon}@4x.png`} alt="icon"></img></p>
                <p className='text-center h2 mb-5'>{ this.props.description.toUpperCase() }</p>     
            </div>

        )


    }



}

export default ComboImage;

