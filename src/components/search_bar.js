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
            <div className="search-bar">
                <input
                    value={this.state.term}
                    onChange = {event => this.onInputChange(event.target.value)} />
            </div>
        );
    }

    //receive the term inside search
    onInputChange(term) {
        //set the value of the bar to what we type
        this.setState({term});
        //send onsearch our current term state
        this.props.onSearchTermChange(term);
    }
}

//make component available
export default SearchBar;