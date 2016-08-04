import React from 'react';


const VideoDetail = (props) => {
const video = props.video;

if(!video){
  return(
    <div>Loading...</div>
  );
}

const videoID = `https://youtube.com/embed/${video.id.videoId}`;

  return(
    <div className="video-detail col-md-8">

        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={videoID} />
        </div>
        <br />
        <div>
          <div><h5>{video.snippet.title}</h5></div>
          <div>{video.snippet.description}</div>
        </div>
    </div>
  );
}

export default VideoDetail;
