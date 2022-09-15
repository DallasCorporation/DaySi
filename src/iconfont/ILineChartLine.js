/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let ILineChartLine = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M213.333333 128v682.666667h682.666667v85.333333H128V128h85.333333z m652.501334 140.501333l60.330666 60.330667L682.666667 572.330667l-128-127.957334-183.168 183.125334-60.330667-60.330667L554.666667 323.669333l128 127.957334 183.168-183.125334z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

ILineChartLine.defaultProps = {
  size: 18,
};

ILineChartLine = React.memo ? React.memo(ILineChartLine) : ILineChartLine;

export default ILineChartLine;
