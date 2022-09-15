/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IBatteryChargeFill = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 469.333333V213.333333l-213.333333 341.333334h128v256l213.333333-341.333334h-128zM128 213.333333h682.666667a42.666667 42.666667 0 0 1 42.666666 42.666667v512a42.666667 42.666667 0 0 1-42.666666 42.666667H128a42.666667 42.666667 0 0 1-42.666667-42.666667V256a42.666667 42.666667 0 0 1 42.666667-42.666667z m768 170.666667h85.333333v256h-85.333333V384z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IBatteryChargeFill.defaultProps = {
  size: 18,
};

IBatteryChargeFill = React.memo ? React.memo(IBatteryChargeFill) : IBatteryChargeFill;

export default IBatteryChargeFill;
