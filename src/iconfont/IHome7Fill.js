/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IHome7Fill = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M810.666667 853.333333a42.666667 42.666667 0 0 1-42.666667 42.666667H170.666667a42.666667 42.666667 0 0 1-42.666667-42.666667v-384H0l440.618667-400.554666a42.666667 42.666667 0 0 1 57.429333 0L938.666667 469.333333h-128v384z m-341.333334-213.333333a106.666667 106.666667 0 1 0 0-213.333333 106.666667 106.666667 0 0 0 0 213.333333z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IHome7Fill.defaultProps = {
  size: 18,
};

IHome7Fill = React.memo ? React.memo(IHome7Fill) : IHome7Fill;

export default IHome7Fill;
