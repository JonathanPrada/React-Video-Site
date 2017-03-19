//Libraries
import React from 'react';
import ReactDOM from 'react-dom';

//import our search bar component from the correct file
import SearchBar from './components/search_bar';

//Youtube data api key
const API_KEY = 'AIzaSyCLgKK8K7TLZ5TlvHcO_qJQ9AuSrg5uSlo';

//Create our app that will append to the root node
//inside we render the search bar component
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}

//Append our component to the root node with a class container
ReactDOM.render(<App />, document.querySelector ('.container'));











