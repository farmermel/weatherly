import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Suggestion.scss';

export default class Suggestion extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <p className="Suggestion" 
         onClick={ (e) => this.props.onSelect(this.props.place, e) }>
        { this.props.place }
      </p>
    );
  }
}

Suggestion.propTypes = {
  onSelect: PropTypes.func,
  place: PropTypes.string
};