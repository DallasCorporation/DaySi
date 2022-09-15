/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IEco = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M862.304 423.16c79.24 0 143.712-64.472 143.712-143.712V143.712C1006.016 64.48 941.544 0 862.304 0c-79.248 0-143.712 64.472-143.712 143.712v135.736c0 79.24 64.464 143.712 143.712 143.712zM38.464 457.448c8.944-0.344 220.72-6.68 344.736 117.336 47.728 47.728 71.752 99.672 71.408 154.376-0.232 35.88-11.184 66.016-21.288 87.64 35.304 37.896 60.88 69.808 78.68 94.096 17.8-24.288 43.376-56.2 78.68-94.096-10.104-21.624-21.056-51.76-21.28-87.64-0.352-54.704 23.672-106.648 71.392-154.376 124.024-124.016 335.8-117.672 344.744-117.336a39.92 39.92 0 0 1 38.4 41.712c0.552 28.816-0.264 224.288-117.424 341.44-24.048 24.048-49.488 42.264-75.6 54.128a39.92 39.92 0 0 1-33.024-72.688c17.36-7.896 34.912-20.64 52.168-37.896 70.96-70.96 88.528-185.536 92.768-245.664-60.128 4.24-174.64 21.832-245.576 92.76-32.52 32.52-48.224 64.384-48.016 97.416 0.056 9 1.352 17.592 3.36 25.656 37.472-35.72 82.144-74.904 135.136-116.704a39.92 39.92 0 1 1 49.44 62.688c-220.216 173.696-288.168 299.064-288.832 300.312a39.8 39.8 0 0 1-38.216 21.336 39.888 39.888 0 0 1-34.472-21.352c-0.616-1.144-24.736-45.424-89.808-117.264-47.056 27.392-109.376 28.624-113.976 28.672h-0.264c-54.88 0-106.744-24.024-154.12-71.4C-1.016 722.104-0.488 523.488 0.08 498.24a39.88 39.88 0 0 1 38.384-40.792zM81.168 538.4c4.216 60.08 21.776 174.76 92.768 245.752 32.32 32.312 64.256 48.016 97.664 48.016 13.04 0 36.064-3.224 55.4-9.664-37.768-36.752-84.008-77.904-140.176-122.2a39.92 39.92 0 0 1 49.448-62.688c52.992 41.792 97.656 80.984 135.136 116.704a108.96 108.96 0 0 0 3.36-25.656c0.208-33.032-15.504-64.896-48.024-97.416-71.264-71.272-185.552-88.72-245.576-92.848zM520.984 0c33.376 0 65.8 11.344 91.312 31.944a140.984 140.984 0 0 1 49.64 82.024 39.92 39.92 0 0 1-78.312 15.576c-5.824-29.264-31.584-49.704-62.64-49.704-35.224 0-63.88 28.656-63.88 63.88V279.44c0 35.216 28.656 63.872 63.872 63.872a63.6 63.6 0 0 0 62.168-49.096 39.92 39.92 0 1 1 77.704 18.352c-15.376 65.112-72.896 110.584-139.864 110.584-79.248 0-143.72-64.472-143.72-143.712V143.72C377.264 64.472 441.744 0 520.984 0zM179.656 0c33.384 0 65.808 11.344 91.32 31.944a140.992 140.992 0 0 1 49.632 82.024c0.512 2.568 0.768 5.176 0.768 7.792v77.84a39.92 39.92 0 0 1-39.92 39.92H115.784v39.92c0 35.224 28.656 63.88 63.872 63.88a63.76 63.76 0 0 0 58.976-39.28 39.92 39.92 0 1 1 73.68 30.784 143.4 143.4 0 0 1-132.656 88.336c-79.24 0-143.712-64.472-143.712-143.712V143.712C35.944 64.48 100.416 0 179.656 0z m682.64 79.84c35.224 0 63.88 28.656 63.88 63.872v135.736c0 35.216-28.656 63.872-63.872 63.872-35.224 0-63.872-28.656-63.872-63.872V143.712c0-35.216 28.648-63.872 63.872-63.872z m-682.64 0c-35.216 0-63.872 28.656-63.872 63.88v15.968h125.752v-33.504C234.48 98.72 209.52 79.84 179.656 79.84z"
        fill={getIconColor(color, 0, '#3C9D17')}
      />
    </Svg>
  );
};

IEco.defaultProps = {
  size: 18,
};

IEco = React.memo ? React.memo(IEco) : IEco;

export default IEco;
