/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IEcology = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M600.096 602.176c138.464-138.44 375.408-131.328 385.44-130.96a39.92 39.92 0 0 1 38.424 41.136l-0.032 0.736c0.624 31.416 0.04 250.808-131.088 381.896-42.44 42.432-88.056 68.08-135.576 76.232a39.92 39.92 0 0 1-13.496-78.688c30.928-5.312 62.088-23.48 92.624-54 84.016-84 102.72-219.84 106.712-286.496-66.792 4.104-202.904 22.96-286.56 106.6-37.744 37.736-55.976 74.912-55.728 113.64 0.064 10.016 1.432 19.536 3.504 28.376 51.12-52.4 107.216-96.68 167.904-132.4a39.92 39.92 0 0 1 40.504 68.808c-105.392 62.04-192.384 149.128-265.928 266.24a39.896 39.896 0 0 1-55.04 12.576 39.92 39.92 0 0 1-12.584-55.04 1007.408 1007.408 0 0 1 65.032-91.92c-10.688-22.896-22.976-55.84-23.24-96.128-0.376-60.344 26.24-117.744 79.128-170.608zM512.992 0c218.992 0 413.456 139.224 483.904 346.44a39.92 39.92 0 1 1-75.592 25.704 430.544 430.544 0 0 0-56.376-110.456c-31.376 11.12-66.64 20.624-104.728 28.32A845.44 845.44 0 0 1 779.488 394.4a39.92 39.92 0 0 1-79.256 9.648 756.856 756.856 0 0 0-19.176-101.104c-41.6 5.28-85.336 8.632-130.144 9.888v190.184c0 4.8-0.888 9.376-2.44 13.64a39.896 39.896 0 0 1-39.472 34.264H316.296c2.64 58.472 11.04 114.984 24.248 166.16 22.696-2.896 46.024-5.216 69.792-6.92a39.92 39.92 0 1 1 5.696 79.64c-17.024 1.216-33.76 2.776-50.144 4.64 13.912 34.064 30.344 63.92 48.936 87.976 13.608 17.6 8.168 36.976 1.728 55.904l-1.288 3.784c-6.024 17.48-11.728 30.096-16.984 37.52-9.84 13.904-23.12 18.728-34.776 18.728a40.856 40.856 0 0 1-12.728-2c-101.264-33.408-188.32-96.688-251.768-183.008C34.232 725.2 0 620.664 0 510.992c0-136.496 53.152-264.808 149.664-361.328C246.184 53.152 374.504 0 510.992 0c0.48 0 0.96 0.024 1.432 0.032 0.192 0 0.376-0.032 0.56-0.032z m-228.08 806.728a780.384 780.384 0 0 0-71.008 17.064 429.72 429.72 0 0 0 118.304 79.712c-18.08-28.352-33.92-60.96-47.296-96.776z m-48.552-255.816H81.68a430.376 430.376 0 0 0 75.752 207.256c31-10.952 66.008-20.392 103.888-28.08-13.824-55.624-22.392-116.264-24.952-179.176z m104.352-248c-13.552 51.688-21.88 108.632-24.456 168.16h154.816V312.824a1334.432 1334.432 0 0 1-130.36-9.92z m-181.776-40.56a428.64 428.64 0 0 0-77.264 208.72h154.672c2.56-63.536 11.184-124.792 25.328-181.088-37.288-7.544-71.864-16.808-102.736-27.632z m391.976-172.456V232.96c35.864-1.056 70.856-3.512 104.36-7.272-27.816-67.04-64.624-115.776-104.36-135.784z m-79.84 0.144c-32.88 16.648-64.656 53.184-90.92 105.704-4.8 9.6-9.344 19.6-13.64 29.92 33.56 3.768 68.624 6.232 104.56 7.28z m217.96 27.32c0.784 1.216 1.576 2.416 2.352 3.648 17 27.064 32.096 58.24 44.984 92.448a773.688 773.688 0 0 0 71.496-17.168 431.736 431.736 0 0 0-118.832-78.928z m-357.04 1.416A432.8 432.8 0 0 0 216 196.84a777.272 777.272 0 0 0 69.504 16.592 569.488 569.488 0 0 1 23.232-53.392 461.456 461.456 0 0 1 23.256-41.264z"
        fill={getIconColor(color, 0, '#3C9D17')}
      />
    </Svg>
  );
};

IEcology.defaultProps = {
  size: 18,
};

IEcology = React.memo ? React.memo(IEcology) : IEcology;

export default IEcology;
