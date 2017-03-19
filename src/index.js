import _ from 'lodash';

//Libraries
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//import functionality from youtube library
import YTSearch from 'youtube-api-search';

//import our search bar component from the correct file
import SearchBar from './components/search_bar';

//import our video list component from the correct file
import VideoList from './components/video_list';

//Import our video details
import VideoDetail from './components/video_detail';

//Youtube data api key
const API_KEY = 'AIzaSyCLgKK8K7TLZ5TlvHcO_qJQ9AuSrg5uSlo';

//Create our app that will append to the root node
//inside we render the search bar component
class App extends Component  {
    constructor (props) {
        super(props);

        //videos will contain a list of objects
        this.state = {
            videos: [],
            selectedVideo: null
        };
        this.videoSearch('pewdiepie');
    }

    //Search what user types into input
    videoSearch(term) {
        //Our youtube api search
        YTSearch({
                key: API_KEY,
                term: term
            },
            //call back function, on success it gets data passed in
            (videos) => {
                //Use this data to set our state
                //Syntactic sugar: videos is the same as videos: videos
                this.setState({
                    videos: videos,
                    selectedVideo: videos[0]
                });
            });
    }

    //when search bar calls onsearch term the state is passed into our function
    render() {
        //using lodash, this func can only be called every 300 milliseconds
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300)


        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect = {selectedVideo => this.setState ({selectedVideo}) }
                    videos={this.state.videos}
                />
            </div>
        );
    }
}

//Append our component to the root node with a class container
ReactDOM.render(<App />, document.querySelector ('.container'));











