import React from 'react';
import '../styles/Suggestion.scss';

export default class Suggestion extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <p className="Suggestion" onClick={(e) => this.props.onSelect(this.props.place, e)} >{this.props.place}</p>
    )
  }
}

