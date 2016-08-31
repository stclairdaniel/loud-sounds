import React from 'react';
import Header from './navbar/header';

const App = ({children}) => (
  <div className="app">
    <div className="app-header">
      <div className="app-container">
        <Header />
        { children }
      </div>
    </div>
  </div>
);

export default App;
