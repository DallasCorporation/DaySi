/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IBattery2ChargeFill = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M384 170.666667V128a42.666667 42.666667 0 0 1 42.666667-42.666667h170.666666a42.666667 42.666667 0 0 1 42.666667 42.666667v42.666667h128a42.666667 42.666667 0 0 1 42.666667 42.666666v682.666667a42.666667 42.666667 0 0 1-42.666667 42.666667H256a42.666667 42.666667 0 0 1-42.666667-42.666667V213.333333a42.666667 42.666667 0 0 1 42.666667-42.666666h128z m170.666667 341.333333V298.666667l-213.333334 298.666666h128v213.333334l213.333334-298.666667h-128z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IBattery2ChargeFill.defaultProps = {
  size: 18,
};

IBattery2ChargeFill = React.memo ? React.memo(IBattery2ChargeFill) : IBattery2ChargeFill;

export default IBattery2ChargeFill;
