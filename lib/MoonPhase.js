import React from 'react';
import PropTypes from 'prop-types';
import '../styles/MoonPhase.scss';

let manyMoons = {
  0: '../images/0moon-new.svg',
  1: '../images/2moon-waxingcrescent.svg',
  2: '../images/2moon-waxingcrescent.svg',
  3: '../images/2moon-waxingcrescent.svg',
  4: '../images/4moon-waxingcrescent.svg',
  5: '../images/4moon-waxingcrescent.svg',
  6: '../images/6moon-waxingcrescent.svg',
  7: '../images/6moon-waxingcrescent.svg',
  8: '../images/8moon-waxinggibbous.svg',
  9: '../images/8moon-waxinggibbous.svg',
  10: '../images/10moon-waxinggibbous.svg',
  11: '../images/10moon-waxinggibbous.svg',
  12: '../images/12moon-waxinggibbous.svg',
  13: '../images/12moon-waxinggibbous.svg',
  14: '../images/14moon-full.svg',
  15: '../images/16moon-waninggibbous.svg',
  16: '../images/16moon-waninggibbous.svg',
  17: '../images/16moon-waninggibbous.svg',
  18: '../images/18moon-waninggibbous.svg',
  19: '../images/18moon-waninggibbous.svg',
  20: '../images/20moon-waninggibbous.svg',
  21: '../images/20moon-waninggibbous.svg',
  22: '../images/22moon-thirdquarter.svg',
  23: '../images/24moon-waningcrescent.svg',
  24: '../images/24moon-waningcrescent.svg',
  25: '../images/24moon-waningcrescent.svg',
  26: '../images/26moon-waningcrescent.svg',
  27: '../images/26moon-waningcrescent.svg',
  28: '../images/28moon-waningcrescent.svg',
  29: '../images/28moon-waningcrescent.svg',
  30: '../images/28moon-waningcrescent.svg'
};

const MoonPhase = props => {
  return (
    <div className="MoonPhase">
      <h3>
        { props.phase.phaseofMoon }
      </h3>
      <img src={ manyMoons[props.phase.ageOfMoon] } 
           alt={ props.phase.phaseofMoon } 
           className="moonimg" />
    </div>
  );
};

MoonPhase.propTypes = {
  phase: PropTypes.object
};

export default MoonPhase;