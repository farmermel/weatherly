import React from 'react';
import '../styles/Suggestion.scss';

export default class Suggestion extends React.Component {
  constructor() {
    super();

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.onSelect(this.props.place);
  }

  render() {
    console.log(this.props)
    return (
      <p className="Suggestion" onClick={this.onClick} >{this.props.place}</p>
    )
  }
}

