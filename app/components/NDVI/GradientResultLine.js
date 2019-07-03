import React from 'react';
import PropTypes from 'prop-types';

const GradientResultLine = props => {
  console.log('GradientResultLine');
  console.log(props);
  return (
    <div className="gradient-result-line-component">
      <h2 className="title">Current</h2>
      <div className="gradient-result-line">
        <ul>
          {props.points &&
            props.points.map(point => {
              return <li className="point">{point.value}</li>;
            })}
        </ul>
      </div>
    </div>
  );
};

export default GradientResultLine;

GradientResultLine.propTypes = {
  points: PropTypes.array
};
