/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IParkings = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M988.69 909.242H35.31V573.794c0-263.268 213.42-476.69 476.69-476.69 263.268 0 476.69 213.42 476.69 476.69v335.448z"
        fill={getIconColor(color, 0, '#C7CFE2')}
      />
      <Path
        d="M706.206 909.242H317.794V564.966a8.828 8.828 0 0 1 8.828-8.828H697.38a8.828 8.828 0 0 1 8.828 8.828v344.276h-0.002z"
        fill={getIconColor(color, 1, '#E4EAF6')}
      />
      <Path
        d="M494.34 556.14h35.31v353.1H494.34z"
        fill={getIconColor(color, 2, '#AFB9D2')}
      />
      <Path
        d="M70.62 891.586V573.794c0-243.376 198.002-441.38 441.38-441.38s441.38 198.002 441.38 441.38v317.794h35.31V573.794c0-263.268-213.422-476.69-476.69-476.69S35.31 310.526 35.31 573.794v317.794H70.62v-0.002z"
        fill={getIconColor(color, 3, '#AFB9D2')}
      />
      <Path
        d="M35.31 820.96h282.48v70.62H35.31z"
        fill={getIconColor(color, 4, '#AFB9D2')}
      />
      <Path
        d="M35.31 820.96H70.62v70.62H35.31z"
        fill={getIconColor(color, 5, '#8F96AC')}
      />
      <Path
        d="M706.2 820.96h282.48v70.62H706.2z"
        fill={getIconColor(color, 6, '#AFB9D2')}
      />
      <Path
        d="M953.38 820.96h35.31v70.62H953.38z"
        fill={getIconColor(color, 7, '#8F96AC')}
      />
      <Path
        d="M450.206 379.586H326.62a8.828 8.828 0 0 0-8.828 8.828v52.966a8.828 8.828 0 0 0 8.828 8.828h123.586a8.828 8.828 0 0 0 8.828-8.828v-52.966a8.828 8.828 0 0 0-8.828-8.828z"
        fill={getIconColor(color, 8, '#5B5D6E')}
      />
      <Path
        d="M1015.172 926.896H8.828A8.828 8.828 0 0 1 0 918.068v-17.656a8.828 8.828 0 0 1 8.828-8.828h1006.344a8.828 8.828 0 0 1 8.828 8.828v17.656a8.828 8.828 0 0 1-8.828 8.828z"
        fill={getIconColor(color, 9, '#8F96AC')}
      />
      <Path
        d="M450.206 450.206H326.62a8.828 8.828 0 0 1-8.828-8.828v-26.482h141.242v26.482a8.828 8.828 0 0 1-8.828 8.828z"
        fill={getIconColor(color, 10, '#707487')}
      />
      <Path
        d="M697.38 379.586h-123.586a8.828 8.828 0 0 0-8.828 8.828v52.966a8.828 8.828 0 0 0 8.828 8.828h123.586a8.828 8.828 0 0 0 8.828-8.828v-52.966a8.83 8.83 0 0 0-8.828-8.828z"
        fill={getIconColor(color, 11, '#5B5D6E')}
      />
      <Path
        d="M697.38 450.206h-123.586a8.828 8.828 0 0 1-8.828-8.828v-26.482h141.242v26.482a8.83 8.83 0 0 1-8.828 8.828z"
        fill={getIconColor(color, 12, '#707487')}
      />
    </Svg>
  );
};

IParkings.defaultProps = {
  size: 18,
};

IParkings = React.memo ? React.memo(IParkings) : IParkings;

export default IParkings;
