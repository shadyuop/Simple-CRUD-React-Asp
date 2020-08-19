import React from 'react';
import './App.css';
import {store} from './actions/store';
import {Provider} from 'react-redux';
import DCandidates from './components/DCandidate';
import {Container} from '@material-ui/core';


function App() {
  return (
    <Provider store={store}>
      <Container maxWidth="lg">  
      
      <DCandidates></DCandidates>
      </Container>
    </Provider>
  );
}

export default App;
