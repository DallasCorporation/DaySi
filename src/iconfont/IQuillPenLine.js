/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IQuillPenLine = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M296.106667 598.869333c-9.941333 26.624-18.346667 51.2-25.856 76.074667 40.96-29.738667 89.642667-48.597333 145.834666-55.637333 107.221333-13.397333 202.496-84.181333 250.709334-173.141334l-62.122667-62.08 60.288-60.373333 42.666667-42.709333c18.346667-18.346667 39.04-52.224 60.928-101.034667-238.634667 36.992-384.768 183.125333-472.490667 418.901333zM725.333333 384.042667L768 426.666667c-42.666667 128-170.666667 256-341.333333 277.333333-113.877333 14.250667-185.002667 92.458667-213.418667 234.666667H128C170.666667 682.666667 256 85.333333 896 85.333333c-42.666667 127.872-85.248 213.162667-127.872 255.872L725.333333 384.042667z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IQuillPenLine.defaultProps = {
  size: 18,
};

IQuillPenLine = React.memo ? React.memo(IQuillPenLine) : IQuillPenLine;

export default IQuillPenLine;
