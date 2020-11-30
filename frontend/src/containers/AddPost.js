import React from 'react';
import { connect } from 'react-redux';
import { addPost } from '../actions';

let AddPost = ({ dispatch }) => {
  let titleInput;
  let bodyInput;

  return (
    <div>
      <h4>New Task:</h4>
      <form onSubmit={e => {
        e.preventDefault();
        if (!titleInput.value.trim() || !bodyInput.value.trim()) {
          return;
        }
        dispatch(addPost(titleInput.value, bodyInput.value));
        titleInput.value = '';
        bodyInput.value = '';
        this.blur();
      }}>
        <label>Task:</label>
        <input ref={node => {
          titleInput = node
        }} />
        <label>Desc:</label>
        <input ref={node => {
          bodyInput = node
        }} />
        <button type="submit">
          Add Post
        </button>
      </form>
    </div>
  )
}

AddPost = connect()(AddPost);

export default AddPost;
