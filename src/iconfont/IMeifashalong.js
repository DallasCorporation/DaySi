/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IMeifashalong = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M422.4 941.6c-15.2 0-31.2 0-48-0.8-26.4-1.6-54.4-2.4-80-5.6-24.8-2.4-48-5.6-71.2-9.6-48-8-84-16.8-106.4-23.2-12.8-3.2-22.4-6.4-29.6-8.8h-0.8l-11.2-4c-26.4-8.8-48-28-60-52.8-12-24.8-14.4-53.6-4.8-80C27.2 704 83.2 674.4 136 688.8l35.2 8.8c10.4 2.4 23.2 5.6 38.4 8.8 15.2 3.2 32 7.2 50.4 10.4l10.4 1.6c16 3.2 32 5.6 49.6 8 21.6 3.2 44.8 6.4 68 8.8l12.8 0.8c20 1.6 40 4 60.8 4.8 24 1.6 48.8 2.4 72.8 2.4H575.2l37.6-1.6c25.6-1.6 50.4-3.2 72.8-5.6 22.4-2.4 45.6-5.6 68-9.6 10.4-2.4 21.6-4 32-5.6l28.8-6.4c6.4-1.6 12-2.4 17.6-4l9.6-2.4c3.2-0.8 6.4-1.6 8.8-2.4 4.8-1.6 9.6-2.4 14.4-4 7.2-2.4 13.6-4 20-5.6 7.2-1.6 13.6-4 19.2-5.6l36.8-12c15.2-4.8 31.2-3.2 45.6 4 14.4 7.2 24.8 20 29.6 35.2 8 26.4-2.4 54.4-25.6 68.8 0 0-12 7.2-34.4 20.8-11.2 6.4-24 13.6-39.2 20.8l-1.6 0.8c-5.6 2.4-11.2 5.6-16.8 8-3.2 1.6-5.6 2.4-8.8 4l-4.8 2.4c-8 4-16 7.2-24.8 11.2l-31.2 12.8c-12 4-23.2 8.8-35.2 12.8-20.8 7.2-48 16-76.8 23.2-25.6 6.4-53.6 12.8-83.2 18.4l-28.8 4.8-14.4 2.4c-15.2 1.6-29.6 4-44 5.6-32 3.2-60.8 5.6-88 5.6-11.2 1.6-23.2 1.6-36 1.6z m-313.6-224c-30.4 0-58.4 19.2-68.8 49.6-6.4 18.4-4.8 38.4 3.2 55.2 8.8 17.6 23.2 30.4 41.6 36.8l11.2 4c7.2 2.4 16.8 5.6 28.8 8.8 21.6 6.4 56 15.2 103.2 22.4 21.6 4 44.8 7.2 68.8 9.6 24.8 3.2 52 4.8 77.6 5.6 30.4 0.8 57.6 1.6 83.2 0 27.2-0.8 55.2-2.4 85.6-5.6 14.4-1.6 28.8-3.2 43.2-5.6l14.4-2.4c9.6-1.6 18.4-2.4 27.2-4.8 28.8-5.6 56-11.2 81.6-17.6 28-7.2 54.4-16 74.4-22.4 11.2-4 23.2-8 33.6-12l31.2-12.8c8-3.2 15.2-6.4 22.4-10.4l4.8-2.4c3.2-1.6 6.4-3.2 9.6-4 5.6-2.4 10.4-4.8 15.2-7.2l1.6-0.8c14.4-8 27.2-14.4 37.6-20 21.6-12.8 33.6-20 33.6-20 11.2-6.4 16-20 12-32-2.4-7.2-7.2-12.8-13.6-16-6.4-3.2-14.4-4-20.8-1.6l-36 11.2c-5.6 1.6-12.8 4-20.8 6.4-6.4 1.6-12.8 3.2-19.2 5.6-5.6 1.6-10.4 3.2-16 4-3.2 0.8-5.6 1.6-8.8 2.4l-9.6 2.4c-6.4 1.6-12 3.2-18.4 4.8l-29.6 6.4c-11.2 1.6-21.6 4-32 5.6-24 4-47.2 7.2-70.4 9.6-23.2 2.4-48.8 4.8-75.2 6.4l-38.4 1.6h-43.2c-24-0.8-49.6-0.8-73.6-2.4-20.8-0.8-41.6-3.2-61.6-4.8l-12.8-3.2c-24.8-2.4-48-5.6-69.6-8.8-17.6-2.4-34.4-5.6-50.4-8.8l-11.2-1.6c-19.2-3.2-36-7.2-52-10.4-15.2-3.2-28.8-6.4-39.2-8.8l-31.2-8-4-1.6c-6.4-1.6-12.8-2.4-19.2-2.4z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M860 737.6c-4 0-8-1.6-11.2-4.8l-208-208c-10.4-10.4-28-10.4-37.6 0-11.2 11.2-25.6 17.6-41.6 17.6s-30.4-6.4-41.6-17.6L238.4 243.2c-23.2-23.2-23.2-60 0-83.2l60.8-60.8c23.2-23.2 60-23.2 83.2 0l583.2 583.2c4 4 5.6 10.4 4 16-1.6 5.6-6.4 9.6-12.8 11.2-1.6 0-2.4 0.8-4 0.8l-36 11.2c-5.6 1.6-12.8 4-20.8 6.4-6.4 1.6-12.8 3.2-19.2 5.6-4 0.8-8 2.4-12 3.2-2.4 0-3.2 0.8-4.8 0.8zM621.6 484.8c16 0 30.4 6.4 41.6 17.6L864.8 704c0.8 0 0.8 0 1.6-0.8 7.2-2.4 13.6-4 20-5.6 7.2-1.6 13.6-4 19.2-5.6l17.6-5.6-564-564.8a26.56 26.56 0 0 0-37.6 0l-60.8 60.8a26.56 26.56 0 0 0 0 37.6l281.6 281.6c10.4 10.4 28 10.4 37.6 0 11.2-10.4 26.4-16.8 41.6-16.8zM122.4 848.8a53.6 53.6 0 1 1 0-107.2 53.6 53.6 0 0 1 0 107.2z m0-91.2c-20.8 0-37.6 16.8-37.6 37.6s16.8 37.6 37.6 37.6S160 816 160 795.2s-17.6-37.6-37.6-37.6z"
        fill={getIconColor(color, 1, '#333333')}
      />
      <Path
        d="M608 512c-2.4 0-4-0.8-5.6-2.4L260 167.2c-3.2-3.2-3.2-8 0-11.2s8-3.2 11.2 0l342.4 342.4c3.2 3.2 3.2 8 0 11.2-1.6 1.6-4 2.4-5.6 2.4z"
        fill={getIconColor(color, 2, '#333333')}
      />
    </Svg>
  );
};

IMeifashalong.defaultProps = {
  size: 18,
};

IMeifashalong = React.memo ? React.memo(IMeifashalong) : IMeifashalong;

export default IMeifashalong;
