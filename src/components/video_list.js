import React from 'react';
import VideoListItem from './video_list_item';

//Data from index.js gets passed in as an object called props
const VideoList = (props) => {
    //for reach of the elements in our array, do a function
    const videoItems = props.videos.map((video) => {
        //Passes in a video from our array
        //uses the youtube etag to give each a key
        return (
        <VideoListItem
            onVideoSelect={props.onVideoSelect}
            key={video.etag}
            video={video}
        />
        );
    })

    //videoItems becomes a list of processed elements
    //Which are able to reference here
    //So each element looks like <li>Video</li>
    return (
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );
};

export default VideoList;