/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let ILights = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M787.76 112.536C714.576 39.896 617.76 0 514.8 0h-5.304C405.816 0 308.16 40.296 234.24 113.664 160.576 186.792 120 283.704 120 386.536c0 154.704 88.808 238.048 153.664 298.912 44.848 42.088 72.336 69.464 72.336 100.552V904c0 66.168 53.832 120 120 120H556c66.168 0 120-53.832 120-120V782c0-1.544-0.112-3.072-0.28-4.576 3.896-23.624 23.84-46.648 57.6-78.76a40 40 0 1 0-55.136-57.968C645.12 672.136 614.64 704.016 601.64 744H544.56c-4.104-25.92-9.792-64.944-12.688-98.928 35.496-7.136 67.968-25.104 96.648-53.6 35.48-35.232 53.472-82.976 53.472-141.904 0-48.264-24.344-108.336-72.344-178.552-30.304-44.32-60.352-78.464-67.376-86.304a40.04 40.04 0 0 0-62.616 0.824c-5.624 6.856-35.864 44.2-66.456 90.896-47.92 73.136-71.2 129.52-71.2 172.384 0 60.816 17.816 109.128 52.96 143.6 18.368 18.016 38.176 30.288 55.744 38.592 2.016 36.44 8 80.856 12.88 112.992h-44.216c-14.728-45.32-52-80.32-90.968-116.888-63.128-59.248-128.4-120.504-128.4-240.576 0-81.352 32.176-158.096 90.608-216.096 59.36-58.928 138.024-91.04 221.248-90.432h2.928c81.688 0 158.536 31.656 216.616 89.312 56.424 56 88.36 129.872 90.48 208.8-0.584 2.72-0.88 5.536-0.88 8.416 0 46.264-9.296 86.456-28.424 122.88a40 40 0 0 0 70.832 37.184c23.96-45.624 36.248-95.008 37.48-150.696a40.16 40.16 0 0 0 1.104-9.36c0-103.576-40.568-200.88-114.24-274.008zM455.2 539.232a111.664 111.664 0 0 1-4.224-3.936c-19.232-18.856-28.976-47.952-28.976-86.48 0-38.24 46.384-115.392 90.528-175.28C555.104 327.68 602 402.48 602 449.568c0 49.752-17.04 72.424-29.848 85.152-14.48 14.376-28.08 22.36-39.096 26.896 5.36-47.6 15.888-96.472 16.024-97.12a40 40 0 1 0-78.168-16.992c-0.568 2.624-9.704 44.96-15.712 91.728zM426 824H596v80c0 22.056-17.944 40-40 40H466c-22.056 0-40-17.944-40-40v-80z"
        fill={getIconColor(color, 0, '#3C9D17')}
      />
    </Svg>
  );
};

ILights.defaultProps = {
  size: 18,
};

ILights = React.memo ? React.memo(ILights) : ILights;

export default ILights;