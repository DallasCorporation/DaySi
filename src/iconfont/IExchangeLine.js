/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IExchangeLine = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 938.666667C276.352 938.666667 85.333333 747.648 85.333333 512S276.352 85.333333 512 85.333333s426.666667 191.018667 426.666667 426.666667-191.018667 426.666667-426.666667 426.666667z m0-85.333334a341.333333 341.333333 0 1 0 0-682.666666 341.333333 341.333333 0 0 0 0 682.666666z m-213.333333-298.666666h384v85.333333h-170.666667v128l-213.333333-213.333333z m213.333333-170.666667V256l213.333333 213.333333H341.333333V384h170.666667z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IExchangeLine.defaultProps = {
  size: 18,
};

IExchangeLine = React.memo ? React.memo(IExchangeLine) : IExchangeLine;

export default IExchangeLine;
