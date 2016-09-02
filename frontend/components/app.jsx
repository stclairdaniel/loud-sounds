import React from 'react';
import Header from './navbar/header';
import AudioPlayerContainer from './audio_player/audio_player_container';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    if (window.as) {
      console.log("yay");
    }
  }

  render () {

    return (
      <div className="app">
        <div className="app-header">
          <div className="app-container">
            <Header />
            { this.props.children }
            <AudioPlayerContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
