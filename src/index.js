
import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyD_9TY49Cgz609tmeBubr95ZRFkZ_99UfU';



// Create a new component.
//This component should ptoduce some HTML.
class App extends Component  {
  constructor(props){
    super(props);

    this.state = {
      videos: [] ,
      selectedVideo: null,
    };
    this.searchVideos('Today\'s news');
  }

  searchVideos(term){
    YTSearch({key:'AIzaSyD_9TY49Cgz609tmeBubr95ZRFkZ_99UfU', term: term}, (videos) => { //videos returned by YT search api
      if(!this.state.videos[0]){
        this.setState({
          videos: videos,
          selectedVideo: videos[0]
         }); //{videos} is equivalent to {videos : videos}. When the key and value are same, we can condense them.ES6.
      }
      else {
        this.setState({
          videos: videos,
          //selectedVideo: videos[0]
         }); //{videos} is equivalent to {videos : videos}. When the key and value are same, we can condense them.ES6.
      }

      });
  }

  render(){
//Creates a debounced function that delays invoking func until after wait milliseconds have elapsed
   const videoSearch = _.debounce((searchTerm) => {this.searchVideos(searchTerm)}, 500 );
//passing props to video_list.
//When the app re-renders(when the setState is used), video_list will get eh list of new videos via this props.
    return (
      <div>
        <br />
        <SearchBar onSearchTermChange={videoSearch} />
        <br />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={(selectedVideo) => this.setState({selectedVideo:selectedVideo})}
          videos={this.state.videos} />
      </div>
    );
  }
}

//Take this component's generated HTML and put it in the page (in the DOM).

ReactDOM.render(<App />, document.querySelector('.container'));
