/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IElectricity = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1170 1024" width={size} height={size} {...rest}>
      <Path
        d="M585.234286 0c66.157714 0 126.427429 33.764571 161.206857 90.331429l292.397714 475.547428c13.266286 21.577143 6.610286 49.874286-14.866286 63.195429a45.586286 45.586286 0 0 1-62.902857-14.939429L668.644571 138.587429c-18.011429-29.275429-49.188571-46.756571-83.419428-46.756572-34.24 0-65.417143 17.481143-83.419429 46.756572L106.450286 781.586286c-18.989714 30.875429-19.812571 68.242286-2.212572 99.949714 17.572571 31.643429 49.581714 50.541714 85.632 50.541714h790.729143c33.042286 0 62.573714-15.68 81.024-43.026285 18.432-27.328 22.336-61.531429 10.441143-91.474286-9.362286-23.552 2.066286-50.258286 25.508571-59.657143 23.442286-9.408 50.038857 2.066286 59.401143 25.618286 23.149714 58.267429 15.798857 124.443429-19.666285 177.024-35.730286 52.964571-92.845714 83.346286-156.708572 83.346285H189.869714c-69.668571 0-131.52-36.498286-165.476571-97.645714-33.974857-61.193143-32.374857-133.321143 4.278857-192.932571L424.036571 90.331429C458.816 33.773714 519.076571 0 585.234286 0z m102.08 390.281143l-83.648 135.451428h105.865143c28.745143 0 43.876571 34.011429 25.142857 55.762286L518.893714 829.458286c-3.913143 3.913143-9.837714 6.180571-15.451428 6.198857-7.990857 0.036571-14.226286-4.260571-14.198857-11.483429 0.009143-1.737143 0.448-3.657143 1.398857-5.76l61.421714-171.008H460.251429c-35.364571 0-57.700571-37.668571-40.502858-68.489143l105.325715-188.635428h162.249143z"
        fill={getIconColor(color, 0, '#3C9D17')}
      />
    </Svg>
  );
};

IElectricity.defaultProps = {
  size: 18,
};

IElectricity = React.memo ? React.memo(IElectricity) : IElectricity;

export default IElectricity;
