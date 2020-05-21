import React from 'react';
import PropTypes from 'prop-types';
import VideoItem from '../VideoItem/VideoItem';

const VideoList = ({videos, onVideoSelect}) => {

  const renderList = videos.map((video) => {
    return <VideoItem key={video.id.videoId} video={video} onVideoSelect={onVideoSelect}/>
  })
  return (
    <div className="ui relax divided list">{renderList}</div>
  )
};

VideoList.propTypes = {
  videos: PropTypes.array.isRequired
}

export default VideoList;