/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IPieChart2Fill = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M469.333333 87.466667V554.666667h467.2c-21.376 215.594667-203.306667 384-424.533333 384-235.648 0-426.666667-191.018667-426.666667-426.666667 0-221.226667 168.405333-403.157333 384-424.533333z m85.333334-64.298667C791.594667 43.52 980.437333 232.405333 1000.832 469.333333H554.666667V23.168z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IPieChart2Fill.defaultProps = {
  size: 18,
};

IPieChart2Fill = React.memo ? React.memo(IPieChart2Fill) : IPieChart2Fill;

export default IPieChart2Fill;
