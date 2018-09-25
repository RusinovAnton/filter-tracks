import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addTrack } from './module';

class Form extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    values: {
      trackName: '',
    },
    errors: {},
  };

  inputChange = event => {
    const {
      type,
      target: { name, value },
    } = event;

    this.setState({
      values: {
        ...this.state.values,
        [name]: value,
      },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { values } = this.state;

    this.props.onSubmit(values.trackName);
  };

  render() {
    const { values } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          name="trackName"
          value={values.trackName}
          onChange={this.inputChange}
        />
        <button>Save</button>
      </form>
    );
  }
}

const withConnect = connect(
  null,
  { onSubmit: addTrack },
);

export default withConnect(Form);
