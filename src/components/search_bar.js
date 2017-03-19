import React, { Component } from 'react';

//class component
class SearchBar extends Component {
    //initialize state
    constructor(props) {
        super(props);
        this.state = {term : ''};
    }

    //render our input
    //set input as we type
    render() {
        return (
            <div>
                <input
                    value={this.state.term}
                    onChange = {event => this.setState({term : event.target.value})} />
            </div>
        );
    }
}

//make component available
export default SearchBar;