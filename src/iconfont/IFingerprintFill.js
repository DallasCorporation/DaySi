/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IFingerprintFill = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M725.333333 554.666667v42.666666c0 118.186667-28.330667 232.32-81.706666 334.762667l-9.685334 17.92-74.538666-41.557333c49.493333-88.746667 77.226667-188.16 80.298666-291.669334L640 597.333333v-42.666666h85.333333z m-256-128h85.333334v170.666666l-0.213334 16.170667a552.149333 552.149333 0 0 1-114.816 322.090667l-9.856 12.373333-66.133333-53.930667a466.944 466.944 0 0 0 105.429333-281.088L469.333333 597.333333v-170.666666z m42.666667-170.666667a213.333333 213.333333 0 0 1 213.333333 213.333333h-85.333333a128 128 0 0 0-256 0v128c0 95.36-34.986667 185.344-96.896 255.018667l-9.045333 9.813333-61.781334-58.88a297.344 297.344 0 0 0 82.133334-193.024L298.666667 597.333333v-128a213.333333 213.333333 0 0 1 213.333333-213.333333z m0-170.666667a384 384 0 0 1 384 384v128c0 72.448-8.618667 143.786667-25.472 212.906667l-5.930667 22.997333-82.346666-22.442666c16.725333-61.312 26.154667-124.672 28.074666-189.226667L810.666667 597.333333v-128A298.666667 298.666667 0 0 0 333.141333 230.144L272.341333 169.301333A382.378667 382.378667 0 0 1 512 85.333333zM211.968 229.674667l60.842667 60.8a297.216 297.216 0 0 0-59.306667 168.576L213.333333 469.333333l0.170667 85.333334c0 47.786667-11.264 93.994667-32.512 135.552l-6.656 12.373333-74.112-42.325333a211.2 211.2 0 0 0 27.562667-93.141334L128.170667 554.666667v-85.333334a381.44 381.44 0 0 1 83.797333-239.658666z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IFingerprintFill.defaultProps = {
  size: 18,
};

IFingerprintFill = React.memo ? React.memo(IFingerprintFill) : IFingerprintFill;

export default IFingerprintFill;
