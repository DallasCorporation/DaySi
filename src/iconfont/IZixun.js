/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IZixun = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M939.3152 532.3776c-14.1312 0-25.6 11.4688-25.6 25.6v11.776c0 14.1312 11.4688 25.6 25.6 25.6s25.6-11.4688 25.6-25.6v-11.776c0-14.1312-11.4688-25.6-25.6-25.6z"
        fill={getIconColor(color, 0, '#44454A')}
      />
      <Path
        d="M939.3152 620.6976c-14.1312 0-25.6 11.4688-25.6 25.6v128.2048c0 74.0352-57.3952 134.2464-128 134.2464h-73.8816c34.304-33.792 55.7056-81.4592 55.7056-134.2464V349.184h18.176c70.6048 0 128 60.2112 128 134.2464 0 14.1312 11.4688 25.6 25.6 25.6s25.6-11.4688 25.6-25.6c0-102.2464-80.384-185.4464-179.2-185.4464h-18.2784c-1.7408-125.5424-104.3456-227.1744-230.2976-227.1744H301.4144c-127.0272 0-230.4 103.3728-230.4 230.4v428.3392c0 127.0272 103.3728 230.4 230.4 230.4h235.7248c13.2096 0 26.1632-1.1776 38.8096-3.328 3.6864 2.048 7.8848 3.328 12.3904 3.328h197.376c98.816 0 179.2-83.2 179.2-185.4464v-128.2048c0-14.1312-11.4688-25.6-25.6-25.6zM301.4144 908.7488c-98.816 0-179.2-80.384-179.2-179.2V301.2096c0-98.816 80.384-179.2 179.2-179.2h235.7248c98.816 0 179.2 80.384 179.2 179.2V729.5488c0 98.816-80.384 179.2-179.2 179.2H301.4144z"
        fill={getIconColor(color, 1, '#44454A')}
      />
      <Path
        d="M563.2 270.1824H306.6368c-14.1312 0-25.6 11.4688-25.6 25.6s11.4688 25.6 25.6 25.6H563.2c14.1312 0 25.6-11.4688 25.6-25.6s-11.4688-25.6-25.6-25.6zM563.2 458.3936H306.6368c-14.1312 0-25.6 11.4688-25.6 25.6s11.4688 25.6 25.6 25.6H563.2c14.1312 0 25.6-11.4688 25.6-25.6s-11.4688-25.6-25.6-25.6zM434.8928 646.656H306.6368c-14.1312 0-25.6 11.4688-25.6 25.6s11.4688 25.6 25.6 25.6h128.3072c14.1312 0 25.6-11.4688 25.6-25.6s-11.4688-25.6-25.6512-25.6z"
        fill={getIconColor(color, 2, '#44454A')}
      />
    </Svg>
  );
};

IZixun.defaultProps = {
  size: 18,
};

IZixun = React.memo ? React.memo(IZixun) : IZixun;

export default IZixun;