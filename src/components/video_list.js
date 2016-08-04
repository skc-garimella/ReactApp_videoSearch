import React from 'react';
import VideoListItem from './video_list_item';


const VideoList = (props) => {   //props object arrives as a parameter to the function.

//key is required in the list so that react can uniquely identify
//incase just one of the items in the list needs to be re-rendered.
  const videoItems = props.videos.map( (video) => {
    return (
      <VideoListItem
      onVideoSelect={props.onVideoSelect}
      key={video.etag}
      video={video}
      />
    );
  } );


   return(
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
}

export default VideoList;
