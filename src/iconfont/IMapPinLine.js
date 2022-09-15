/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IMapPinLine = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 891.733333l211.2-211.2a298.666667 298.666667 0 1 0-422.4 0L512 891.733333z m0 120.661334l-271.530667-271.530667a384 384 0 1 1 543.061334 0L512 1012.394667zM512 554.666667a85.333333 85.333333 0 1 0 0-170.666667 85.333333 85.333333 0 0 0 0 170.666667z m0 85.333333a170.666667 170.666667 0 1 1 0-341.333333 170.666667 170.666667 0 0 1 0 341.333333z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IMapPinLine.defaultProps = {
  size: 18,
};

IMapPinLine = React.memo ? React.memo(IMapPinLine) : IMapPinLine;

export default IMapPinLine;
