/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IRadarFill = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M613.034667 187.648l-148.650667 257.493333 73.898667 42.666667L686.933333 230.314667c177.92 118.272 269.056 302.08 194.56 431.018666-79.36 137.472-306.730667 143.146667-508.16 26.88C171.904 571.818667 63.146667 372.096 142.506667 234.666667c74.453333-128.981333 279.168-141.952 470.528-47.018667z m64.682666-112l73.898667 42.666667-64 110.848-73.898667-42.666667 64-110.848zM287.232 853.333333H725.333333v85.333334H214.058667a42.453333 42.453333 0 0 1-37.674667-21.333334 42.88 42.88 0 0 1 0-42.666666l96-166.272 73.898667 42.666666L287.232 853.333333z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IRadarFill.defaultProps = {
  size: 18,
};

IRadarFill = React.memo ? React.memo(IRadarFill) : IRadarFill;

export default IRadarFill;
