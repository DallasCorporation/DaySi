/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let INews = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M867.2 160 160 160C105.6 160 64 204.8 64 256l0 512c0 54.4 41.6 96 96 96l707.2 0c54.4 0 96-41.6 96-96L963.2 256C963.2 204.8 921.6 160 867.2 160zM899.2 768c0 19.2-12.8 32-32 32L160 800c-19.2 0-32-12.8-32-32L128 256c0-19.2 12.8-32 32-32l707.2 0c19.2 0 32 12.8 32 32L899.2 768z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M227.2 544 416 544c19.2 0 32-12.8 32-32l0-188.8c0-19.2-12.8-32-32-32L227.2 291.2c-19.2 0-32 12.8-32 32L195.2 512C195.2 531.2 208 544 227.2 544zM259.2 355.2 384 355.2 384 480 259.2 480 259.2 355.2z"
        fill={getIconColor(color, 1, '#333333')}
      />
      <Path
        d="M800 288l-256 0c-19.2 0-32 12.8-32 32s12.8 32 32 32l256 0c19.2 0 32-12.8 32-32S819.2 288 800 288z"
        fill={getIconColor(color, 2, '#333333')}
      />
      <Path
        d="M672 480c19.2 0 32-12.8 32-32s-12.8-32-32-32l-128 0c-19.2 0-32 12.8-32 32s12.8 32 32 32L672 480z"
        fill={getIconColor(color, 3, '#333333')}
      />
      <Path
        d="M800 672 224 672c-19.2 0-32 12.8-32 32s12.8 32 32 32l576 0c19.2 0 32-12.8 32-32S819.2 672 800 672z"
        fill={getIconColor(color, 4, '#333333')}
      />
    </Svg>
  );
};

INews.defaultProps = {
  size: 18,
};

INews = React.memo ? React.memo(INews) : INews;

export default INews;
