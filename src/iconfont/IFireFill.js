/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IFireFill = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 981.333333a320 320 0 0 1-219.221333-553.088C350.037333 374.357333 490.666667 277.333333 469.333333 64c256 170.666667 384 341.333333 128 597.333333 42.666667 0 106.666667 0 213.333334-105.386666 11.52 32.981333 21.333333 68.437333 21.333333 105.386666A320 320 0 0 1 512 981.333333z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IFireFill.defaultProps = {
  size: 18,
};

IFireFill = React.memo ? React.memo(IFireFill) : IFireFill;

export default IFireFill;
