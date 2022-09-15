/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IWaterFlashLine = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 132.266667L300.8 343.466667a298.666667 298.666667 0 1 0 422.4 0L512 132.266667z m0-120.661334l271.530667 271.530667a384 384 0 1 1-543.061334 0L512 11.605333zM554.666667 469.333333h106.666666L469.333333 746.666667V554.666667H362.666667L554.666667 277.333333V469.333333z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IWaterFlashLine.defaultProps = {
  size: 18,
};

IWaterFlashLine = React.memo ? React.memo(IWaterFlashLine) : IWaterFlashLine;

export default IWaterFlashLine;
