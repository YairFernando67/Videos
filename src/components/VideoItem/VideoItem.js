import React from 'react';
import './VideoItem.css'

const VideoItem = ({video, onVideoSelect}) => {
  const {title, thumbnails} = video.snippet;

  return (
    <div className="item video-item" onClick={() => onVideoSelect(video)}>
      <img className="ui image" src={thumbnails.medium.url} alt={video.snippet.title} />
      <div className="content" >
        <div className="header">
          {title}
        </div>
      </div>
    </div>
  )
};

export default VideoItem;