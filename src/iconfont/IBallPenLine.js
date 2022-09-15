/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IBallPenLine = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M761.557333 503.808l-30.165333-30.165333-422.4 422.4H128v-181.034667L610.688 232.277333l241.365333 241.365334a42.666667 42.666667 0 0 1 0 60.330666l-301.653333 301.696-60.373333-60.330666 271.530666-271.530667z m-90.496-90.496l-60.373333-60.330667L213.333333 750.336v60.373333h60.330667l397.397333-397.397333z m120.661334-301.696l120.704 120.661333a42.666667 42.666667 0 0 1 0 60.330667L852.053333 352.981333 671.061333 171.946667l60.330667-60.330667a42.666667 42.666667 0 0 1 60.330667 0z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IBallPenLine.defaultProps = {
  size: 18,
};

IBallPenLine = React.memo ? React.memo(IBallPenLine) : IBallPenLine;

export default IBallPenLine;
