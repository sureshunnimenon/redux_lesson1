import React, { Component } from 'react';

import PostForm from './PostForm';
import AllPost from './AllPost';

// in this class component we are not using any store or function of store.

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='navbar'>
          <h2 className='center '>Post It</h2>
        </div>
        <PostForm />
        <AllPost />
      </div>
    );
  }
}

export default App;
