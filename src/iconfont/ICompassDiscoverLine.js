/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let ICompassDiscoverLine = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 938.666667C276.352 938.666667 85.333333 747.648 85.333333 512S276.352 85.333333 512 85.333333s426.666667 191.018667 426.666667 426.666667-191.018667 426.666667-426.666667 426.666667z m0-85.333334a341.333333 341.333333 0 1 0 0-682.666666 341.333333 341.333333 0 0 0 0 682.666666z m-213.333333-362.666666L682.666667 341.333333l-149.333334 384.085334L469.333333 554.666667l-170.666666-64z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

ICompassDiscoverLine.defaultProps = {
  size: 18,
};

ICompassDiscoverLine = React.memo ? React.memo(ICompassDiscoverLine) : ICompassDiscoverLine;

export default ICompassDiscoverLine;
