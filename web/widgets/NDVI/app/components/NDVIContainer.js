import React, { Component } from 'react';
//components
import Info from '../../../../../app/components/NDVI/Info';
import Legend from '../../../../../app/components/NDVI/Legend';
import GradientProgressbar from '../../../../../app/components/NDVI/GradientProgressbar';
import TimeSeries from '../../../../../app/components/NDVI/TimeSeries';

export default class NDVIContainer extends Component {
  render() {
    const dummyDataPoints = {
      monthUid: 201907,
      month: 7,
      year: 2019,
      carbon: 3716,
      ndviAggregate: {
        min: -0.24662007507553332,
        max: 0.7517624439222388,
        avg: 0.3811577383449884
      }
    };

    return (
      <div className="ndvi-container">
        <div className="row month-keyword">
          <p>J</p>
          <p>F</p>
          <p>M</p>
          <p>A</p>
          <p>M</p>
          <p>J</p>
          <p>J</p>
          <p>A</p>
          <p>S</p>
          <p>O</p>
          <p>N</p>
          <p>D</p>
        </div>
        <TimeSeries />
        <Legend />
        <GradientProgressbar />
        <Info {...dummyDataPoints} />
      </div>
    );
  }
}
