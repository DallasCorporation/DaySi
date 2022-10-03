/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let I20A = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M886.079072 572.623768c3.710145 47.786667-8.622377 104.010203-20.279652 144.458203a37.12371 37.12371 0 0 1-45.931594 25.377391 37.10887 37.10887 0 0 1-25.377391-45.931594c15.026087-52.090435 21.073623-98.318841 16.621449-126.842435a37.12371 37.12371 0 0 1 5.505855-25.87455C817.567536 542.334145 912.695652 393.794783 912.695652 291.246377c0-93.747942-79.805217-164.730435-185.625971-165.101449-99.201855 0-172.937275 43.438377-231.94342 136.704a37.101449 37.101449 0 1 1-62.71629-39.66887 472.501797 472.501797 0 0 1 38.088348-52.224c-23.277449-5.646841-43.186087-13.163594-61.803594-20.198029-34.719536-13.133913-64.734609-24.486957-112.929392-24.620522C204.03571 126.612406 111.304348 183.429565 111.304348 291.253797c0 102.548406 95.128116 251.080348 96.092753 252.571826a37.138551 37.138551 0 0 1 5.491015 25.85971c-5.713623 36.544928 5.89913 101.376 30.297043 169.182609 25.050899 69.632 59.13971 131.435594 91.195363 165.338899 17.459942 18.476522 29.414029 23.314551 34.229797 23.31455h0.126145c0.304232-0.037101 0.608464-0.051942 0.912695-0.074203l0.296812-0.037101c-1.01658-10.99687-5.11258-28.976232-8.051014-41.902377-9.906087-43.549681-22.246029-97.747478-9.497971-154.445913 15.300638-68.066319 63.792232-121.277217 144.124289-158.148638a37.071768 37.071768 0 0 1 30.512232-0.200347c80.821797 35.83258 129.573101 88.553739 144.896 156.716521 12.740638 56.639072 0.281971 111.230145-9.720579 155.084058-2.849391 12.488348-7.190261 31.49913-8.206841 42.904116 0.207768 0.022261 0.408116 0.059362 0.623304 0.074203 0.051942 0.014841 0.096464 0 0.155826 0.014841 7.257043 0.526841 33.354203-11.278841 70.537276-71.398029a37.101449 37.101449 0 0 1 63.109565 39.038145C744.640928 965.936232 699.955942 1001.73913 655.493565 1001.73913c-2.099942 0-4.199884-0.103884-6.299826-0.25971-24.294029-0.415536-42.911536-8.473971-55.318261-24.034319-22.528-28.249043-13.950145-65.869913-4.006956-109.434434 17.348638-76.072812 36.923362-161.873623-77.608812-220.197102-114.68058 60.126609-95.23942 145.526725-78.016927 221.228522 9.809623 43.097043 18.276174 80.309797-4.155363 108.410435-12.406725 15.552928-31.076174 23.618783-55.474087 24.026898-2.048 0.148406-4.10342 0.25971-6.15884 0.25971-29.213681 0-58.768696-15.634551-88.004638-46.554898-39.290435-41.561043-78.321159-111.244986-107.074783-191.183768-26.520116-73.683478-39.119768-142.254377-35.439304-191.347015C113.67142 532.73229 37.101449 398.321159 37.101449 291.246377 37.101449 155.959652 147.344696 53.396406 293.865739 51.95687c0.326493-0.014841 0.667826-0.014841 1.001739-0.014841h1.625044c61.365797 0.274551 102.296116 15.745855 138.440348 29.406609 33.346783 12.614493 62.360116 23.529739 107.148985 24.32371C595.270493 69.661681 656.64371 51.942029 727.210667 51.942029c68.927072 0.24487 133.157101 23.373913 180.980869 65.127884C958.953739 161.383884 986.898551 223.23942 986.898551 291.246377c0 107.030261-76.525449 241.40429-100.819479 281.369971zM837.676522 291.246377c0-25.451594-9.349565-46.562319-27.781565-62.760812-20.613565-18.120348-49.983072-28.204522-82.706551-28.397449h-0.222609a37.101449 37.101449 0 0 0-0.222609 74.202898c16.977623 0.103884 28.775884 5.194203 34.163015 9.928348 2.018319 1.78087 2.56742 2.255768 2.56742 7.027015a37.101449 37.101449 0 1 0 74.202899 0z"
        fill={getIconColor(color, 0, '#000000')}
      />
    </Svg>
  );
};

I20A.defaultProps = {
  size: 18,
};

I20A = React.memo ? React.memo(I20A) : I20A;

export default I20A;
