import React from 'react';
import PropTypes from 'prop-types';
import '../styles/MoonPhase.scss';

let manyMoons = [
  '../images/0moon-new.svg',
  '../images/2moon-waxingcrescent.svg',
  '../images/2moon-waxingcrescent.svg',
  '../images/2moon-waxingcrescent.svg',
  '../images/4moon-waxingcrescent.svg',
  '../images/4moon-waxingcrescent.svg',
  '../images/6moon-waxingcrescent.svg',
  '../images/6moon-waxingcrescent.svg',
  '../images/8moon-waxinggibbous.svg',
  '../images/8moon-waxinggibbous.svg',
  '../images/10moon-waxinggibbous.svg',
  '../images/10moon-waxinggibbous.svg',
  '../images/12moon-waxinggibbous.svg',
  '../images/12moon-waxinggibbous.svg',
  '../images/14moon-full.svg',
  '../images/16moon-waninggibbous.svg',
  '../images/16moon-waninggibbous.svg',
  '../images/16moon-waninggibbous.svg',
  '../images/18moon-waninggibbous.svg',
  '../images/18moon-waninggibbous.svg',
  '../images/20moon-waninggibbous.svg',
  '../images/20moon-waninggibbous.svg',
  '../images/22moon-thirdquarter.svg',
  '../images/24moon-waningcrescent.svg',
  '../images/24moon-waningcrescent.svg',
  '../images/24moon-waningcrescent.svg',
  '../images/26moon-waningcrescent.svg',
  '../images/26moon-waningcrescent.svg',
  '../images/28moon-waningcrescent.svg',
  '../images/28moon-waningcrescent.svg',
  '../images/28moon-waningcrescent.svg'
];

const MoonPhase = props => {
  let { phase } = props;
  let yesterdayMoon = () => {
    if (phase.ageOfMoon === 0) {
      return manyMoons[30];
    } else {
      return manyMoons[phase.ageOfMoon - 1];
    }
  };
  let tomorrowMoon = () => {
    if (phase.ageOfMoon === 30) {
      return manyMoons[0];
    } else {
      let moonAge = parseInt(phase.ageOfMoon);
      return manyMoons[moonAge + 1];
    }
  };

  console.log(phase.ageOfMoon + 1)
  return (
    <div className="MoonPhase">
      <h3>
        { phase.phaseofMoon }
      </h3>
      <div>
        <img src={ yesterdayMoon() } 
             alt={ phase.phaseofMoon } 
             className="moonimg-small" />
        <img src={ manyMoons[phase.ageOfMoon] } 
             alt={ phase.phaseofMoon } 
             className="moonimg" />
        <img src={ tomorrowMoon() } 
           alt={ phase.phaseofMoon } 
           className="moonimg-small" />
      </div>
    </div>
  );
};

MoonPhase.propTypes = {
  phase: PropTypes.object
};

export default MoonPhase;