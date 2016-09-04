import React from 'react';
import Header from './navbar/header';
import AudioPlayerContainer from './audio_player/audio_player_container';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {

    return (
      <div className="app-container">
        <div className="app">
          <div className="app-header">
            <Header />
          </div>
          { this.props.children }
          <div className="audio-player-container">
            <AudioPlayerContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
