import React from 'react';
import SessionNavContainer from './session/session_nav_container';

const App = ({children}) => (
  <div>
    <SessionNavContainer />
    <h1>Loud Sounds</h1>
    { children }
  </div>
);

export default App;
