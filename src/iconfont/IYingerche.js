/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IYingerche = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M1004.8 448c0-6.4 0-12.8-6.4-19.2-6.4-6.4-6.4-12.8-12.8-12.8L294.4 416c-6.4-64-44.8-128-108.8-160-12.8-38.4-51.2-64-89.6-64C44.8 198.4 0 243.2 0 294.4c0 51.2 44.8 96 96 96 19.2 0 38.4-6.4 51.2-19.2 19.2 19.2 38.4 44.8 38.4 70.4l0 0c0 0 0 6.4 0 6.4 19.2 115.2 83.2 211.2 172.8 275.2-76.8 6.4-140.8 70.4-140.8 147.2 0 83.2 64 147.2 147.2 147.2S512 960 512 876.8c0-32-12.8-64-25.6-89.6 38.4 12.8 70.4 12.8 108.8 12.8 32 0 64-6.4 96-12.8-19.2 25.6-25.6 51.2-25.6 83.2 0 83.2 64 147.2 147.2 147.2s147.2-64 147.2-147.2c0-76.8-57.6-140.8-128-147.2C921.6 665.6 985.6 563.2 1004.8 448zM364.8 985.6c-64 0-108.8-51.2-108.8-108.8s51.2-108.8 108.8-108.8 108.8 51.2 108.8 108.8S422.4 985.6 364.8 985.6zM921.6 876.8c0 64-51.2 108.8-108.8 108.8S704 934.4 704 876.8s51.2-108.8 108.8-108.8S921.6 812.8 921.6 876.8zM595.2 761.6c-185.6 0-345.6-134.4-371.2-313.6 0 0 0 0 0 0 0-44.8-25.6-83.2-64-108.8-6.4-6.4-19.2 0-25.6 6.4C121.6 345.6 108.8 352 96 352 64 352 38.4 326.4 38.4 294.4c0-32 25.6-57.6 57.6-57.6 25.6 0 51.2 19.2 57.6 44.8 0 6.4 6.4 12.8 12.8 12.8C217.6 320 256 377.6 256 441.6l0 0c0 0 0-6.4 0-6.4 0 12.8 6.4 12.8 19.2 12.8l691.2 0C928 652.8 774.4 761.6 595.2 761.6z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M576 390.4l409.6 0c6.4 0 12.8 0 12.8-6.4 6.4-6.4 6.4-6.4 6.4-12.8-12.8-160-140.8-313.6-294.4-345.6-6.4 0-19.2 0-19.2 12.8l-128 332.8c0 6.4 0 12.8 0 19.2C569.6 384 569.6 390.4 576 390.4zM716.8 64c128 38.4 230.4 160 249.6 288L608 352 716.8 64z"
        fill={getIconColor(color, 1, '#333333')}
      />
      <Path
        d="M364.8 780.8c-51.2 0-89.6 38.4-89.6 89.6 0 51.2 38.4 89.6 89.6 89.6s89.6-38.4 89.6-89.6C454.4 825.6 416 780.8 364.8 780.8zM364.8 928c-32 0-57.6-25.6-57.6-57.6 0-32 25.6-57.6 57.6-57.6 32 0 57.6 25.6 57.6 57.6C416 902.4 390.4 928 364.8 928z"
        fill={getIconColor(color, 2, '#333333')}
      />
      <Path
        d="M723.2 876.8c0 51.2 38.4 89.6 89.6 89.6 51.2 0 89.6-38.4 89.6-89.6 0-51.2-38.4-89.6-89.6-89.6C761.6 780.8 723.2 825.6 723.2 876.8zM870.4 876.8c0 32-25.6 57.6-57.6 57.6s-57.6-25.6-57.6-57.6c0-32 25.6-57.6 57.6-57.6S870.4 844.8 870.4 876.8z"
        fill={getIconColor(color, 3, '#333333')}
      />
    </Svg>
  );
};

IYingerche.defaultProps = {
  size: 18,
};

IYingerche = React.memo ? React.memo(IYingerche) : IYingerche;

export default IYingerche;