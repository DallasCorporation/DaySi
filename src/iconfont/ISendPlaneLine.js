/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let ISendPlaneLine = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M82.048 399.786667c-21.76-8.746667-21.504-21.76 1.450667-29.397334l814.336-271.445333c22.570667-7.509333 35.498667 5.12 29.184 27.221333l-232.704 814.336c-6.4 22.570667-20.266667 23.594667-30.592 2.986667L469.333333 554.666667 82.048 399.786667z m208.64-8.533334l240.469333 96.213334 129.706667 259.498666 151.296-529.493333L290.645333 391.253333z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

ISendPlaneLine.defaultProps = {
  size: 18,
};

ISendPlaneLine = React.memo ? React.memo(ISendPlaneLine) : ISendPlaneLine;

export default ISendPlaneLine;
