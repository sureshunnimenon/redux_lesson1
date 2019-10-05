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
      message
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
      <div>
        <h1> Create Post</h1>
        <form onSubmit={this.handleSubmit}>
          {' '}
          <input
            required
            type='text'
            placeholder='Enter post title'
            ref={input => (this.getTitle = input)}
          />{' '}
          <br /> <br />
          <textarea
            cols='30'
            rows='5'
            required
            placeholder='Enteer post'
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
