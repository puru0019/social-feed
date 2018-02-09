import React, { Component } from 'react';
import Title from './header';
import CreatePost from '../containers/createpost';
import RenderPosts from '../containers/renderposts';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title />
        <div className="post-container">
            <CreatePost />
            <RenderPosts />
        </div>
      </div>
    );
  }
}

export default App;
