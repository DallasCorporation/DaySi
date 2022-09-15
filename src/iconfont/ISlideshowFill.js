/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let ISlideshowFill = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M554.666667 896v85.333333h-85.333334v-85.333333H128a42.666667 42.666667 0 0 1-42.666667-42.666667V256h853.333334v597.333333a42.666667 42.666667 0 0 1-42.666667 42.666667h-341.333333zM341.333333 426.666667a128 128 0 1 0 128 128H341.333333v-128z m213.333334 0v85.333333h256v-85.333333h-256z m0 170.666666v85.333334h256v-85.333334h-256zM85.333333 128h853.333334v85.333333H85.333333V128z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

ISlideshowFill.defaultProps = {
  size: 18,
};

ISlideshowFill = React.memo ? React.memo(ISlideshowFill) : ISlideshowFill;

export default ISlideshowFill;
