import React, { Component } from 'react';
import { connect } from 'react-redux';

class EditComponent extends Component {
  handleEdit = e => {
    e.preventDefault();
    const newTitle = this.getTitle.value;
    const newMessage = this.getMessage.value;
    const data = {
      newTitle,
      newMessage
    };
    this.props.dispatch({ type: 'UPDATE', id: this.props.post.id, data: data });
  };

  render() {
    return (
      <div>
        <form className='form' onSubmit={this.handleEdit}>
          <input
            type='text'
            required
            ref={input => (this.getTitle = input)}
            placeholder='Enter Post title'
            defaultValue={this.props.post.title}
          />{' '}
          <br />
          <br />
          <textarea
            cols='30'
            rows='5'
            required
            placeholder='enter post'
            ref={input => (this.getMessage = input)}
            defaultValue={this.props.post.message}
          ></textarea>{' '}
          <br />
          <br />
          <button> Update </button>
        </form>
      </div>
    );
  }
}

export default connect()(EditComponent);
