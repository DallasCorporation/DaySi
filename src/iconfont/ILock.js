/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let ILock = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M800 416V288a288 288 0 0 0-288-288 288 288 0 0 0-288 288v128a96 96 0 0 0-96 96v224a288 288 0 0 0 288 288h192a288 288 0 0 0 288-288v-224a96 96 0 0 0-96-96zM288 288a224 224 0 1 1 448 0v128h-64V288.064a160 160 0 0 0-160-160 160 160 0 0 0-160 160V416H288V288z m352 0v128h-256V288a128 128 0 0 1 256 0z m192 320v128c0 123.488-100.512 224-224 224h-192c-123.488 0-224-100.512-224-224v-224a32 32 0 0 1 32-32h576c17.632 0 32 14.336 32 32v96z"
        fill={getIconColor(color, 0, '#bfbfbf')}
      />
      <Path
        d="M512 608a64 64 0 0 0-64 64c0 19.424 10.656 56.32 21.344 85.504 8.704 23.744 19.648 42.432 42.656 42.432 25.024 0 33.952-18.496 42.688-42.112 10.816-29.248 21.312-66.336 21.312-85.824a64 64 0 0 0-64-64z"
        fill={getIconColor(color, 1, '#bfbfbf')}
      />
    </Svg>
  );
};

ILock.defaultProps = {
  size: 18,
};

ILock = React.memo ? React.memo(ILock) : ILock;

export default ILock;
