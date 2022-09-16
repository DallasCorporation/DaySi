/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IBattery = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M583.336 0A68.664 68.664 0 0 1 652 68.664v11.24c0 0.056 0.04 0.096 0.096 0.096h11.808C752.32 80 824 151.68 824 240.096v420.856c0 21.744-16.904 40.296-38.632 41.024A40 40 0 0 1 744 662V240.096C744 195.856 708.144 160 663.904 160h-51.808a40.096 40.096 0 0 1-40.096-40.096v-39.808a0.096 0.096 0 0 0-0.096-0.096H452.096a0.096 0.096 0 0 0-0.096 0.096v39.808A40.096 40.096 0 0 1 411.904 160h-51.808C315.856 160 280 195.856 280 240.096v623.808C280 908.144 315.856 944 360.096 944h303.808c44.44 0 79.424-36.184 80.096-80.616a40 40 0 0 1 37.896-39.328c23.72-1.232 42.4 18.336 42.088 42.08C822.84 953.384 751.504 1024 664 1024H360.096C271.68 1024 200 952.32 200 863.904V240.096C200 151.68 271.68 80 360.096 80h11.808a0.096 0.096 0 0 0 0.096-0.096V68.664A68.664 68.664 0 0 1 440.664 0z m21.816 382c0.08 0 0.12 0.08 0.08 0.144l-73.008 117.712a0.096 0.096 0 0 0 0.08 0.144h92.464c25.16 0 38.392 29.632 22 48.576L457.944 764.6c-3.424 3.408-8.608 5.376-13.52 5.4-7 0.024-12.456-3.712-12.424-10 0.008-1.52 0.384-3.192 1.224-5.016l53.704-148.856a0.096 0.096 0 0 0-0.088-0.128H406.624c-30.952 0-50.496-32.816-35.44-59.664l92.136-164.288a0.096 0.096 0 0 1 0.088-0.048z"
        fill={getIconColor(color, 0, '#3C9D17')}
      />
    </Svg>
  );
};

IBattery.defaultProps = {
  size: 18,
};

IBattery = React.memo ? React.memo(IBattery) : IBattery;

export default IBattery;