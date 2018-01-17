import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class Post extends Component {
  render() {
    return (
      <div className="Post">
        <h1> {this.props.title}</h1>
        <h3> by {this.props.author} </h3>
        <p> {this.props.body} </p>
        <h4>Here is what readers think</h4>
        <ul>
          {this.props.comments.map( things => <li>{things}</li>)}
        </ul>
      </div>
    );
  }
}

export default Post;
