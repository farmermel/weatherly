import React from 'react';
import '../styles/Suggestion.scss';

const Suggestion = props => {
  return (
    <p className="Suggestion">{props.place}</p>
  )
}

export default Suggestion;