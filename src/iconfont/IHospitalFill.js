/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IHospitalFill = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M896 853.333333h85.333333v85.333334H42.666667v-85.333334h85.333333V128a42.666667 42.666667 0 0 1 42.666667-42.666667h682.666666a42.666667 42.666667 0 0 1 42.666667 42.666667v725.333333zM469.333333 341.333333H384v85.333334h85.333333v85.333333h85.333334v-85.333333h85.333333V341.333333h-85.333333V256h-85.333334v85.333333z m128 512h85.333334v-256H341.333333v256h85.333334v-170.666666h170.666666v170.666666z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IHospitalFill.defaultProps = {
  size: 18,
};

IHospitalFill = React.memo ? React.memo(IHospitalFill) : IHospitalFill;

export default IHospitalFill;
