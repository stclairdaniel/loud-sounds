import React from 'react';
import { withRouter } from 'react-router';
import TrackContainer from './track_container';
import CommentsContainer from '../comment/comments_container';

class TrackDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    let id = this.props.params.id;
    if (!this.props.tracks[id]) {
      return <div></div>;
    } else {
      return (
      <div>
        <TrackContainer id={id} track={this.props.tracks[id]} />
        <CommentsContainer trackId={id} />
      </div>
      );
    }
  }
}

export default withRouter(TrackDetail);
