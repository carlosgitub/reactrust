import React from 'react';
import Footer from './Footer';
import AddPost from '../containers/AddPost';
import VisiblePostList from '../containers/VisiblePostList';

const App = () => (
  <div className="container">
    <h1>Todo</h1>
    <AddPost />
    <VisiblePostList />
    <Footer />
  </div>
);

export default App;
