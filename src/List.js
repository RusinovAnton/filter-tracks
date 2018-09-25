import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteItem } from './module';

class List extends Component {
  static propTypes = {
    tracks: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      }),
    ),
  };

  deleteItem = id => {
    this.props.deleteItem(id);
  };

  render() {
    const { tracks } = this.props;

    return (
      <div>
        {tracks.map(track => (
          <p key={track.id} onClick={this.deleteItem.bind(this, track.id)}>
            {track.name}
          </p>
        ))}
      </div>
    );
  }
}

const filteredTracksSelecor = state => {
  const { tracks, search } = state;

  return search
    ? tracks.filter(track => track.name.indexOf(search) !== -1)
    : tracks;
};

const mapStateToProps = state => {
  return { tracks: filteredTracksSelecor(state) };
};
const mapDispatchToProps = {
  deleteItem,
};
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default withConnect(List);
