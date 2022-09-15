/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let ICelsiusLine = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M192 426.666667a149.333333 149.333333 0 1 1 0-298.666667 149.333333 149.333333 0 0 1 0 298.666667z m0-85.333334a64 64 0 1 0 0-128 64 64 0 0 0 0 128zM938.666667 426.666667h-85.333334a170.666667 170.666667 0 1 0-341.333333 0v213.333333a170.666667 170.666667 0 1 0 341.333333 0h85.333334a256 256 0 1 1-512 0v-213.333333a256 256 0 1 1 512 0z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

ICelsiusLine.defaultProps = {
  size: 18,
};

ICelsiusLine = React.memo ? React.memo(ICelsiusLine) : ICelsiusLine;

export default ICelsiusLine;
