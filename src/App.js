import React, { Component } from 'react';

import './App.css';
import Header from './components/Header';
import PostList from './components/PostList';

class App extends Component {
  
  state = {
    theme: ''
  }

  componentDidMount() {
    let theme = localStorage.getItem('theme');
    if(!theme) theme = 'light';
    this.setState({ theme });
    document.documentElement.setAttribute('data-theme', theme);

  }

  handleChangeTheme() {
    const theme = this.state.theme === 'light' ? 'dark' : 'light';
    this.setState({ theme });    
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }

  render() {
    return (
      <>
        <Header onChangeTheme={() => this.handleChangeTheme()} />
        <PostList />      
      </>
    );
  }
}

export default App;