import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';

import Search from './Search';
import List from './List';
import Form from './Form';

class App extends Component {
  render() {
    const { state } = this.props;
    return (
      <div className="App">
        <Form />
        <Search />
        <List />
        <div>{JSON.stringify(state)}</div>
      </div>
    );
  }
}

export default connect(state => ({ state }))(App);
