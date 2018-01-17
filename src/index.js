import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Post from './App';
import registerServiceWorker from './registerServiceWorker';

let postObj = {
  title: 'Life is good',
  author: 'Peter B',
  body: 'Life is pretty good these days, guys',
  comments: ["First","Wow second!","Great third!", "fabulous fourth"]
}

ReactDOM.render(<Post title={postObj.title} author={postObj.author} body={postObj.body} comments={postObj.comments} />, document.getElementById('root'));
registerServiceWorker();
