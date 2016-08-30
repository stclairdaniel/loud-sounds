import React from 'react';
import Header from './navbar/header';

const App = ({children}) => (
  <div className="app">
    <div className="app-container">
      <Header />
      { children }
    </div>
  </div>
);

export default App;
