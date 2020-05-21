import React from 'react';
import SearchBar from './SearchBar/SearchBar';
import youtube from '../API/youtube';
import VideoList from '../components/VideoList/VideoList';
import VideoDetail from '../components/VideoDetail/VideoDetail';

const KEY = 'AIzaSyBiKXHJJBXR7YqnBEsIovHdhHKHqfz8-N4'

class App extends React.Component {

  componentDidMount() {
    this.onSubmit('buildings');
  }

  state = {
    data: [],
    selectedVideo: null
  }

  onSubmit = async (term) => {
    const response = await youtube.get("/search", {
      headers: {
        Referer: 'https://explorer.apis.google.com'
      },
      params: {
        q: term,
        part: "snippet",
        type: 'video',
        maxResults: 10,
        key: KEY
      }
    });

    this.setState({ 
      data: response.data.items, 
      selectedVideo: response.data.items[0] 
    })
  }

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video })
  }
  
  render() {
    return (
      <div className="ui container"> 
        <SearchBar onSubmit={this.onSubmit}/>
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList 
                videos={this.state.data} 
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default App;