import React, { Component } from 'react';
import { connect } from 'react-redux';

class PostForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const title = this.getTitle.value;
    const message = this.getMessage.value;
    const blogdata = {
      id: new Date(),
      title,
      message,
      editing: false
    };

    console.log(blogdata);
    this.props.dispatch({
      type: 'ADD_POST',
      blogdata
    });
    this.getTitle.value = '';
    this.getMessage.value = '';
  };

  render() {
    return (
      <div className='post-container'>
        <h1 className='post_heading'> Create Post</h1>
        <form classname='form' onSubmit={this.handleSubmit}>
          {' '}
          <input
            required
            type='text'
            placeholder='Enter post title'
            ref={input => (this.getTitle = input)}
          />{' '}
          <br /> <br />
          <textarea
            cols='90'
            rows='5'
            required
            placeholder='Enter post'
            ref={input => (this.getMessage = input)}
          ></textarea>{' '}
          <br />
          <br />
          <button> Post </button>
        </form>
      </div>
    );
  }
}

export default connect()(PostForm);
