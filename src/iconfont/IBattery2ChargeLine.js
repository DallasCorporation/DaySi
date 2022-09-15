/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IBattery2ChargeLine = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M554.666667 512h128l-213.333334 298.666667v-213.333334H341.333333l213.333334-298.666666v213.333333z m-85.333334-256H298.666667v597.333333h426.666666V256h-170.666666V170.666667h-85.333334v85.333333zM384 170.666667V128a42.666667 42.666667 0 0 1 42.666667-42.666667h170.666666a42.666667 42.666667 0 0 1 42.666667 42.666667v42.666667h128a42.666667 42.666667 0 0 1 42.666667 42.666666v682.666667a42.666667 42.666667 0 0 1-42.666667 42.666667H256a42.666667 42.666667 0 0 1-42.666667-42.666667V213.333333a42.666667 42.666667 0 0 1 42.666667-42.666666h128z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IBattery2ChargeLine.defaultProps = {
  size: 18,
};

IBattery2ChargeLine = React.memo ? React.memo(IBattery2ChargeLine) : IBattery2ChargeLine;

export default IBattery2ChargeLine;
