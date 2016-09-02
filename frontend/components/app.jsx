import React from 'react';
import Header from './navbar/header';
import AudioPlayerContainer from './audio_player/audio_player_container';

const App = ({children}) => (
  <div className="app">
    <div className="app-header">
      <div className="app-container">
        <Header />
        { children }
        <AudioPlayerContainer />
      </div>
    </div>
  </div>
);

export default App;
