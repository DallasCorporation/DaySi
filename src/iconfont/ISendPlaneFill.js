/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let ISendPlaneFill = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M83.029333 397.44c-22.272-7.424-22.485333-19.413333 0.426667-27.050667l814.378667-271.445333c22.570667-7.509333 35.498667 5.12 29.184 27.221333l-232.704 814.336c-6.4 22.570667-19.413333 23.338667-28.970667 1.92L512 597.333333l256-341.333333-341.333333 256-343.637334-114.56z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

ISendPlaneFill.defaultProps = {
  size: 18,
};

ISendPlaneFill = React.memo ? React.memo(ISendPlaneFill) : ISendPlaneFill;

export default ISendPlaneFill;
