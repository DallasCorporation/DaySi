/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let ICloudy2Line = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M725.333333 896H298.666667A256 256 0 0 1 213.674667 398.464a298.666667 298.666667 0 1 1 596.650666 0A256 256 0 0 1 725.333333 896zM298.666667 810.666667h426.666666a170.666667 170.666667 0 1 0-18.176-340.394667 213.333333 213.333333 0 1 0-390.314666 0A170.666667 170.666667 0 1 0 298.666667 810.666667z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

ICloudy2Line.defaultProps = {
  size: 18,
};

ICloudy2Line = React.memo ? React.memo(ICloudy2Line) : ICloudy2Line;

export default ICloudy2Line;
