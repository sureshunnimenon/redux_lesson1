import React, { Component } from 'react';

import PostForm from './PostForm';
import AllPost from './AllPost';

// in this class component we are not using any store or function of store.

class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1> hello react</h1>
        <PostForm />
        <AllPost />
      </div>
    );
  }
}

export default App;
