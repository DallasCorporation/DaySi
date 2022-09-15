/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let ICustomerServiceLine = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M938.666667 725.418667a256.085333 256.085333 0 0 1-201.088 250.026666l-27.221334-81.664A170.794667 170.794667 0 0 0 830.506667 810.666667H725.333333a85.333333 85.333333 0 0 1-85.333333-85.333334v-170.666666a85.333333 85.333333 0 0 1 85.333333-85.333334h125.354667a341.376 341.376 0 0 0-677.376 0H298.666667a85.333333 85.333333 0 0 1 85.333333 85.333334v170.666666a85.333333 85.333333 0 0 1-85.333333 85.333334H170.666667a85.333333 85.333333 0 0 1-85.333334-85.333334v-213.333333C85.333333 276.352 276.352 85.333333 512 85.333333s426.666667 191.018667 426.666667 426.666667v213.418667zM853.333333 725.333333v-170.666666h-128v170.666666h128zM170.666667 554.666667v170.666666h128v-170.666666H170.666667z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

ICustomerServiceLine.defaultProps = {
  size: 18,
};

ICustomerServiceLine = React.memo ? React.memo(ICustomerServiceLine) : ICustomerServiceLine;

export default ICustomerServiceLine;
