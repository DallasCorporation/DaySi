/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IFlashlightLine = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M554.666667 384h341.333333L469.333333 1024v-384H170.666667l384-640v384z m-85.333334 85.333333V308.053333L321.365333 554.666667H554.666667v187.477333L736.554667 469.333333H469.333333z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IFlashlightLine.defaultProps = {
  size: 18,
};

IFlashlightLine = React.memo ? React.memo(IFlashlightLine) : IFlashlightLine;

export default IFlashlightLine;
