import React, { Component } from 'react';
import CreateFeed from './Createfeed';
import TimelineFeeds from './TimelineFeeds';
import data from '../data/data.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {data}
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Social Feed</h1>
        </header>
        <CreateFeed />
        <TimelineFeeds feedData={this.state.data}/>
      </div>
    );
  }
}

export default App;
