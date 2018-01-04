import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyBkvBWBXUXJ1dPM_7gQYMqOrNurskoEQ_8';

//do not need .js as long as it's a js file
// Create a new component. This component should produce some HTML

//const declares a variable but the difference is this is the final value
//of the variable, App won't change later.
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
     };
     this.videoSearch('surfboards');
  }
//created a method so we can use it in render()
  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
       });
      //this.setSTate({videos: videos});
    });
  }
  //pass a list of videos  where videoList videos ={this.state.videos}we are passing prop to videolist

  //we defined a function that just updates App state....
  //we pass it to video list which takes the property and passes it to video-list-item
  //const videoSearch will use the lodash debounce to throttle search term
  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
          videos={this.state.videos} />
        </div>
    );
  }
}

// Take this component's generated HTML and put it on the page in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
