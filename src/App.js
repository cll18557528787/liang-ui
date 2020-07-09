import React from 'react';
import './App.css';
import Alert from './demos/alert'
import Message from './demos/message'
import Loading from './demos/loading'
import Action from './demos/action'
import Pull from './demos/pull'

function App() {
  
  return (
    <div className="App">
      <Alert></Alert>
      <Message></Message>
      <Loading></Loading>
      <Action></Action>
      <Pull></Pull>
    </div>
  );
}

export default App;
