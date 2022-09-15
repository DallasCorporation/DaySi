/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IToolsFill = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M227.413333 139.562667a149.333333 149.333333 0 0 1 190.805334 190.890666L880.938667 793.173333l-90.538667 90.496L327.68 420.992a149.333333 149.333333 0 0 1-190.805333-190.890667L232.277333 325.546667a64 64 0 1 0 90.496-90.496L227.370667 139.52z m442.325334 80.384l135.765333-75.434667 60.330667 60.330667-75.434667 135.765333-75.434667 15.104-90.453333 90.496-60.373333-60.330667 90.496-90.496 15.104-75.434666z m-301.696 331.861333l90.496 90.538667-211.2 211.2A64 64 0 0 1 152.746667 767.573333l4.138666-4.565333 211.2-211.2z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IToolsFill.defaultProps = {
  size: 18,
};

IToolsFill = React.memo ? React.memo(IToolsFill) : IToolsFill;

export default IToolsFill;
