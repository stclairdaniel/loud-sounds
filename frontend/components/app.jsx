import React from 'react';
import Header from './navbar/header';
import AudioPlayerContainer from './audio_player/audio_player_container';
import Infinite from 'react-infinite';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.getWindowHeight = this.getWindowHeight.bind(this);
  }

  getWindowHeight () {
    //magic number - makes sure all elements fit in window.
    return $ (window).height() - 125;
  }

  render () {

    return (
      <div className="app">
        <div className="app-header">
          <div className="app-container">
            <Header />
            <Infinite
              containerHeight={this.getWindowHeight()}
              elementHeight={300}>
              { this.props.children }
            </Infinite>
            <AudioPlayerContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
