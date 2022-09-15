/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IMoneyEuroCircleLine = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 938.666667C276.352 938.666667 85.333333 747.648 85.333333 512S276.352 85.333333 512 85.333333s426.666667 191.018667 426.666667 426.666667-191.018667 426.666667-426.666667 426.666667z m0-85.333334a341.333333 341.333333 0 1 0 0-682.666666 341.333333 341.333333 0 0 0 0 682.666666z m-83.2-384H640v85.333334h-211.2a106.666667 106.666667 0 0 0 173.397333 60.16l72.533334 48.341333A192 192 0 0 1 342.528 554.666667H298.666667v-85.333334h43.818666a192 192 0 0 1 332.288-108.501333L602.197333 409.173333A106.666667 106.666667 0 0 0 428.8 469.333333z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IMoneyEuroCircleLine.defaultProps = {
  size: 18,
};

IMoneyEuroCircleLine = React.memo ? React.memo(IMoneyEuroCircleLine) : IMoneyEuroCircleLine;

export default IMoneyEuroCircleLine;
