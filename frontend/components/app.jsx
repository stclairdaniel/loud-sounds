import React from 'react';
import Header from './navbar/header';
import AudioPlayer from './audio_player/audio_player';

const App = ({children}) => (
  <div className="app">
    <div className="app-header">
      <div className="app-container">
        <Header />
        { children }
        <AudioPlayer />
      </div>
    </div>
  </div>
);

export default App;
