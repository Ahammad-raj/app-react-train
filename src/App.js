import React, { Component } from 'react';
import CommentBox from './components/comment-box/comment-box'
import './App.css';
import MyTextBox from './components/my-text-box/my-text-box';
import MyButton from './components/my-button/my-button';
import MyInput17 from './components/my-input/my-input';
import MyDiv1 from './components/my-div/my-div';
import RepoList from './components/repo-list/repo-list';
import $ from 'jquery';
import MyMessageHoc from './components/my-messgae-hoc/my-message-hoc';
import BtnHook from './components/button-hook/button-hook';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CommentBox/> 
        <MyTextBox/>
        <MyButton/>
        <MyInput17/>
        <MyDiv1 name = "Herai"/>
        {/* <RepoList prm={$.getJSON('https://api.github.com/search/repositories?q=javascript&sort=stars')} /> */}
        <MyMessageHoc  name="HOC" />
        <BtnHook/>
      </div>
    );
  }
}

export default App;
