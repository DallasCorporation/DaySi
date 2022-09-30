/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IEchometer = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M939.52 471.04c-43.52 0-76.8 30.72-81.92 71.68-135.68 30.72-133.12 222.72-130.56 232.96 0 0 7.68 102.4-48.64 156.16-25.6 25.6-64 38.4-110.08 33.28-43.52-2.56-79.36-17.92-102.4-48.64-48.64-56.32-48.64-151.04-46.08-184.32 84.48-5.12 156.16-35.84 209.92-94.72 140.8-156.16 107.52-450.56 107.52-463.36 0 0 0 0 0 0 33.28-10.24 58.88-43.52 58.88-79.36 0-46.08-38.4-84.48-84.48-84.48s-84.48 38.4-84.48 84.48c0 38.4 25.6 69.12 58.88 79.36 0 2.56 0 5.12 0 7.68 0 2.56 33.28 284.16-94.72 422.4-48.64 53.76-115.2 79.36-197.12 79.36-94.72-5.12-166.4-40.96-215.04-102.4C61.44 435.2 110.08 181.76 110.08 179.2c0-2.56 0-5.12 0-10.24C143.36 161.28 168.96 128 168.96 92.16c0-46.08-38.4-84.48-84.48-84.48C38.4 7.68 0 43.52 0 92.16 0 128 25.6 161.28 58.88 171.52c-2.56 17.92-51.2 279.04 74.24 440.32 53.76 69.12 130.56 110.08 232.96 120.32-2.56 40.96 0 145.92 58.88 217.6 33.28 40.96 81.92 64 138.24 66.56 7.68 0 12.8 0 17.92 0 53.76 0 97.28-17.92 130.56-51.2 71.68-71.68 64-192 64-197.12 0-2.56-2.56-156.16 89.6-179.2 12.8 28.16 40.96 46.08 74.24 46.08 46.08 0 84.48-38.4 84.48-84.48C1024 506.88 985.6 471.04 939.52 471.04zM706.56 61.44c17.92 0 33.28 15.36 33.28 33.28S724.48 128 706.56 128s-33.28-15.36-33.28-33.28S688.64 61.44 706.56 61.44zM84.48 58.88c17.92 0 33.28 15.36 33.28 33.28 0 17.92-15.36 33.28-33.28 33.28C66.56 122.88 51.2 110.08 51.2 92.16 51.2 71.68 66.56 58.88 84.48 58.88zM939.52 586.24c-17.92 0-33.28-15.36-33.28-33.28 0-17.92 15.36-33.28 33.28-33.28 17.92 0 33.28 15.36 33.28 33.28C972.8 573.44 957.44 586.24 939.52 586.24z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IEchometer.defaultProps = {
  size: 18,
};

IEchometer = React.memo ? React.memo(IEchometer) : IEchometer;

export default IEchometer;
