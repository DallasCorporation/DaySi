/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IHouse = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M935.384 974.77H98.462c-11.816 0-21.662 9.846-21.662 21.662 0 11.816 9.846 21.662 21.662 21.662h836.924c11.816 0 21.662-9.846 21.662-21.662-0.002-11.816-9.848-21.662-21.664-21.662z"
        fill={getIconColor(color, 0, '#ACB2BA')}
      />
      <Path
        d="M951.138 472.616L517.908 157.538 72.862 482.462 0 384 517.908 5.908 1024 374.154z"
        fill={getIconColor(color, 1, '#F26F5A')}
      />
      <Path
        d="M864.492 257.97V35.446h-98.462v149.662z"
        fill={getIconColor(color, 2, '#F05640')}
      />
      <Path
        d="M517.908 157.538L129.97 441.108v576.984h775.876V437.17z"
        fill={getIconColor(color, 3, '#E8EAE8')}
      />
      <Path
        d="M232.37 708.924h230.4v309.17h-230.4z"
        fill={getIconColor(color, 4, '#425A6B')}
      />
      <Path
        d="M527.754 521.846h-19.692c-47.262 0-86.646-39.384-86.646-86.646v-19.692c0-47.262 39.384-86.646 86.646-86.646h19.692c47.262 0 86.646 39.384 86.646 86.646v19.692c0 47.262-39.384 86.646-86.646 86.646zM805.416 687.262H569.108c-11.816 0-21.662 9.846-21.662 21.662v236.308c0 11.816 9.846 21.662 21.662 21.662h236.308c11.816 0 21.662-9.846 21.662-21.662V708.924c-0.002-11.816-9.848-21.662-21.662-21.662z m-21.662 118.154h-74.83v-74.83h74.83v74.83zM665.6 732.554v74.83h-74.83v-74.83H665.6z m-74.83 118.154H665.6v74.83h-74.83v-74.83z m118.154 72.862V848.74h74.83v74.83h-74.83z"
        fill={getIconColor(color, 5, '#ACB2BA')}
      />
    </Svg>
  );
};

IHouse.defaultProps = {
  size: 18,
};

IHouse = React.memo ? React.memo(IHouse) : IHouse;

export default IHouse;
