import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {

    constructor(props) {
        super(props);

        this.state = { 
            search: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            search: e.target.value
        })
    }

    render() {

        const { handle_search } = this.props
        const { search } = this.state

        return (
            <div className="mb-3 text-center">
                <input placeholder={'Search for a City/Location'} onChange={this.handleChange} value={search}/>
                <button className="btn btn-primary ml-2" onClick={() => handle_search(search)}>Search</button>
            </div>
        )
                
    }

}

SearchBar.propTypes = {
    handle_search: PropTypes.func.isRequired
}

export default SearchBar;