import React, { Component } from 'react';
import { Column, Row } from '../Grid/Grid';
import ColleaguesContainer from '../Colleagues/ColleaguesContainer';


import './App.css';

class App extends Component {
  render() {
    return (
      <main className="app">
        <Row>
          <Column>
            <ColleaguesContainer />
          </Column>
        </Row>
      </main>
    );
  }
}

export default App;
