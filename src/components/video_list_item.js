import React from 'react';



const VideoListItem = (props) => {
  const imageURL = props.video.snippet.thumbnails.default.url;
  const heading = props.video.snippet.title;
  const videoID = `https://youtube.com/embed/${props.video.id.videoId}`
  return(

    <li onClick={() => props.onVideoSelect(props.video)} className="list-group-item">
<a href="#">
        <div className="video-list media">
          <div className="media-left">
              <img className="media-object" src={imageURL} alt="..." />
          </div>
          <div className="media-body">
            <div className="media-heading">{heading}</div>
          </div>
        </div>
</a>
      </li>

  );
}

export default VideoListItem;
