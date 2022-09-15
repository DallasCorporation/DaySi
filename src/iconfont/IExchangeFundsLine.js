/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IExchangeFundsLine = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M826.666667 644.394667A341.376 341.376 0 0 0 342.613333 215.594667l-42.325333-74.112A426.496 426.496 0 0 1 725.333333 142.506667c191.573333 110.592 264.96 347.392 175.658667 544.853333l57.258667 33.024-177.706667 94.464-7.04-201.130667 53.162667 30.677334zM197.333333 379.605333a341.376 341.376 0 0 0 484.053334 428.8l42.325333 74.112A426.496 426.496 0 0 1 298.666667 881.493333C107.093333 770.901333 33.706667 534.101333 123.008 336.64L65.706667 303.658667l177.706666-94.464 7.04 201.130666-53.162666-30.677333z m375.04 253.056L451.584 512l-120.661333 120.661333-60.330667-60.330666 181.034667-180.992L572.330667 512l120.704-120.661333 60.330666 60.330666-181.034666 180.992z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IExchangeFundsLine.defaultProps = {
  size: 18,
};

IExchangeFundsLine = React.memo ? React.memo(IExchangeFundsLine) : IExchangeFundsLine;

export default IExchangeFundsLine;
