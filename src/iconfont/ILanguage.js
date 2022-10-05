/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let ILanguage = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M446.857143 616q-0.571429 1.714286-7.142857 2.857143t-18-6.571429l-11.428571-5.142857q-25.142857-11.428571-49.714286-28-4-2.857143-23.428571-18t-21.714286-16.285714q-38.285714 58.857143-76.571429 103.428571-46.285714 54.285714-60 62.857143-2.285714 1.142857-11.142857 2.285714t-10.571429 0q3.428571-2.285714 46.857143-52.571429 12-13.714286 48.857143-65.714286t44.857143-67.428571q9.714286-17.142857 29.142857-56.285714t20.571429-44.285714q-4.571429-0.571429-62.857143 18.857143-4.571429 1.142857-15.714286 4.285714t-19.714286 5.428571-9.714286 2.857143q-1.142857 1.142857-1.142857 6t-0.571429 5.428571q-2.857143 5.714286-17.714286 8.571429-13.142857 4-26.857143 0-10.285714-2.285714-16-12-2.285714-3.428571-2.857143-13.142857 3.428571-1.142857 14-2.857143t16.857143-3.428571q33.142857-9.142857 60-18.285714 57.142857-20 58.285714-20 5.714286-1.142857 24.571429-11.142857t25.142857-12.285714q5.142857-1.714286 12.285714-4.571429t8.285714-3.142857 3.428571 2.857143q1.142857 6.857143-0.571429 18.857143 0 1.142857-7.142857 15.428571t-15.142857 30.571429-9.714286 19.142857q-14.285714 28.571429-44 74.857143l36.571429 16q6.857143 3.428571 42.571429 18.285714t38.571429 16q2.285714 0.571429 6 14.571429t2.571429 17.428571zm-117.142857-277.714286q1.714286 8.571429-2.285714 16-6.857143 13.142857-28.571429 21.714286-17.142857 6.857143-34.285714 6.857143-14.857143-1.714286-28-14.857143-8-8.571429-10.285714-23.428571l0.571429-1.714286q1.714286 1.714286 11.142857 2.857143t15.142857 0 33.142857-9.142857q20.571429-6.857143 31.428571-8 9.714286 0 12 9.714286zm398.857143 73.714286l36 129.714286-79.428571-24zm-633.142857 457.142857l396.571429-132.571429 0-589.714286-396.571429 133.142857 0 589.142857zm709.142857-181.142857l58.285714 17.714286-103.428571-375.428571-57.142857-17.714286-123.428571 306.285714 58.285714 17.714286 25.714286-62.857143 120.571429 37.142857zm-287.428571-549.714286l327.428571 105.142857 0-217.142857zm177.714286 756l90.285714 7.428571-30.857143 91.428571-22.857143-37.714286q-74.285714 47.428571-157.714286 61.714286-33.142857 6.857143-52 6.857143l-48 0q-45.142857 0-114-22.285714t-104.857143-48.571429q-4.571429-4-4.571429-9.142857 0-4.571429 2.857143-7.714286t7.428571-3.142857q2.285714 0 10.285714 4.285714t17.428571 9.428571 11.714286 6.285714q41.714286 21.142857 91.142857 35.142857t90 14q54.285714 0 95.428571-8.285714t89.714286-28.857143q8.571429-4 17.428571-8.857143t19.428571-10.857143 16.285714-9.428571zm256-616.571429l0 616.571429-442.285714-140.571429q-8 3.428571-214.285714 72.857143t-210.285714 69.428571q-7.428571 0-10.285714-7.428571 0-0.571429-0.571429-1.714286l0-616q1.714286-5.142857 2.285714-5.714286 2.857143-3.428571 11.428571-6.285714 60.571429-20 85.142857-28.571429l0-219.428571 318.857143 113.142857q1.142857 0 91.714286-31.428571t180.571429-62 92.285714-30.571429q11.428571 0 11.428571 12l0 238.857143z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

ILanguage.defaultProps = {
  size: 18,
};

ILanguage = React.memo ? React.memo(ILanguage) : ILanguage;

export default ILanguage;