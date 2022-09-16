/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IBio = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M141.728 423.136h139.024c69.496 0 126.24-56.064 128.328-125.76 0.032-0.664 0.104-1.312 0.104-1.984 0-0.328-0.024-0.656-0.024-0.992 0-0.336 0.024-0.664 0.024-1 0-0.672-0.072-1.328-0.104-1.992a129.736 129.736 0 0 0-56.352-103.16 121.784 121.784 0 0 0 18.96-65.496C371.688 55.072 316.616 0 248.936 0h-107.2a39.92 39.92 0 0 0-39.92 39.92v343.296a39.92 39.92 0 0 0 39.92 39.92z m39.92-343.304h67.28a42.96 42.96 0 0 1 40.392 57.504 43.04 43.04 0 0 1-40.384 28.328c-1.096 0-2.176 0.08-3.248 0.16h-64.04V79.84z m459.12 496.92c124-124.008 335.76-117.68 344.72-117.336a39.92 39.92 0 0 1 38.424 41.016l-0.024 0.704c0.544 28.8-0.272 224.264-117.424 341.416-24.056 24.048-49.488 42.264-75.6 54.12a39.92 39.92 0 0 1-33.016-72.688c17.36-7.88 34.904-20.632 52.16-37.888 70.96-70.944 88.528-185.52 92.76-245.648-60.12 4.24-174.624 21.824-245.552 92.76-32.528 32.52-48.232 64.384-48.024 97.4 0.064 9.008 1.36 17.6 3.36 25.664 37.48-35.72 82.144-74.912 135.128-116.696a39.92 39.92 0 1 1 49.44 62.68c-220.208 173.68-288.152 299.048-288.808 300.296a39.8 39.8 0 0 1-38.224 21.336 39.888 39.888 0 0 1-34.464-21.352c-0.616-1.144-24.736-45.424-89.808-117.256-48.592 28.288-113.472 28.672-114.224 28.672-54.88 0-106.736-24.024-154.12-71.4C-1.008 724.08-0.48 525.456 0.08 500.208a39.872 39.872 0 0 1 38.384-40.784c8.952-0.344 220.712-6.68 344.72 117.328 47.72 47.728 71.744 99.664 71.392 154.368-0.224 35.872-11.176 66.008-21.28 87.632 35.296 37.896 60.88 69.808 78.672 94.096 17.8-24.296 43.376-56.2 78.68-94.096-10.104-21.624-21.056-51.76-21.28-87.64-0.352-54.704 23.672-106.64 71.392-154.36z m-559.6-36.304c4.232 60.096 21.8 174.688 92.76 245.648 32.312 32.312 64.256 48.016 97.664 48.016 13.04 0 36.056-3.224 55.384-9.664-37.76-36.752-84-77.896-140.16-122.192a39.92 39.92 0 0 1 49.44-62.68c52.992 41.792 97.656 80.976 135.136 116.696 2-8.064 3.296-16.656 3.36-25.664 0.2-33.024-15.504-64.88-48.024-97.408-70.912-70.912-185.408-88.504-245.56-92.752zM520.96 0a39.92 39.92 0 0 1 39.92 39.92v345.296a39.92 39.92 0 1 1-79.84 0V39.92A39.92 39.92 0 0 1 520.96 0z m263.464 0c79.24 0 143.704 64.464 143.704 143.704V279.44c0 79.24-64.464 143.704-143.704 143.704-79.24 0-143.704-64.464-143.704-143.704V143.704C640.712 64.464 705.176 0 784.416 0zM280.432 245.664c26.184 0 48.344 22.224 48.888 48.736-0.544 26.608-22.56 48.896-48.568 48.896H181.648V245.664h98.784zM784.416 79.84c-35.216 0-63.872 28.648-63.872 63.864V279.44c0 35.216 28.656 63.864 63.872 63.864s63.872-28.648 63.872-63.864V143.704c0-35.216-28.656-63.864-63.872-63.864z"
        fill={getIconColor(color, 0, '#3C9D17')}
      />
    </Svg>
  );
};

IBio.defaultProps = {
  size: 18,
};

IBio = React.memo ? React.memo(IBio) : IBio;

export default IBio;