/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IFlashlightFill = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M554.666667 426.666667h298.666666l-384 554.666666v-384H170.666667l384-554.666666z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IFlashlightFill.defaultProps = {
  size: 18,
};

IFlashlightFill = React.memo ? React.memo(IFlashlightFill) : IFlashlightFill;

export default IFlashlightFill;
