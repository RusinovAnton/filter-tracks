import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeSearchQuery } from './module';

class Search extends Component {
  static propTypes = {};

  handleChange = e => {
    this.props.onChange(e.target.value);
  };

  render() {
    const { value } = this.props;

    return <input value={value} onChange={this.handleChange} />;
  }
}

const mapStateToProps = state => ({ value: state.search });

const withConnect = connect(
  mapStateToProps,
  {
    onChange: changeSearchQuery,
  },
);

export default withConnect(Search);
