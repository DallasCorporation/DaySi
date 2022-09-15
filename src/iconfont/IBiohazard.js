/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IBiohazard = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1074 1024" width={size} height={size} {...rest}>
      <Path
        d="M1071.515489 584.50634c-5.522627-85.491605-42.485618-153.760672-104.082211-192.226019-29.686217-18.531854-63.090555-28.855305-98.777803-30.802493 16.769314-31.541081 25.556837-65.658829 25.556837-101.001961 0-74.3876-38.859821-143.395256-109.411797-194.299103C740.988795 34.585324 687.94472 12.352135 630.31804 0.887229c-25.976489-5.178512-50.240796 14.570334-50.240796 41.100765A41.973642 41.973642 0 0 0 613.968379 83.139117c45.884803 9.098066 87.715763 26.505251 121.883869 51.155639 48.100568 34.696868 74.597427 79.515754 74.597427 126.181111 0 29.795327-10.827034 58.835279-31.155001 84.971236-58.432413-69.301412-145.762096-113.390103-243.180225-113.390103-96.20953 0-182.582405 42.980808-240.989639 110.788257-19.052223-25.45612-29.157455-53.547658-29.157455-82.36939 0-46.665357 26.488465-91.484243 74.589034-126.181111 34.168106-24.650387 76.007459-42.04918 121.892262-51.155639a41.982035 41.982035 0 0 0 33.874349-41.159516c0-26.53043-24.255914-46.279277-50.240796-41.100765-57.618287 11.464906-110.653969 33.698095-154.465689 65.306321-70.56037 50.903847-109.42019 119.903109-109.42019 194.299103 0 34.831157 8.527339 68.495679 24.843427 99.675859-36.996564 1.443605-71.609501 11.8342-102.252525 30.970354C43.182241 429.604213 6.21925 497.864887 0.705016 583.364885c-2.786493 43.165455 2.727741 88.244526 15.862864 132.752869 7.469814 25.34701 36.1069 37.634435 59.506723 25.430941 17.835231-9.307892 26.438107-29.963188 20.730833-49.283988-10.315058-34.999018-14.662658-70.123931-12.505644-103.486304 3.726514-57.744183 26.740257-102.646999 64.794345-126.407723 22.166045-13.848532 45.800873-18.372386 67.219936-18.372386a161.985861 161.985861 0 0 1 19.505447 1.216992 318.054622 318.054622 0 0 0-18.019878 105.777606c0 154.994451 110.922546 284.490816 257.406445 313.052365-11.045254 22.375871-26.664719 40.278246-46.304456 52.540492-37.156031 23.206783-78.424657 20.22725-106.507802 13.638706-55.310198-12.975655-110.653969-50.836703-154.423723-104.359182-12.52243-15.317316-33.907921-19.941886-51.43261-10.801855l-0.66305 0.335722c-23.273927 12.144743-29.828899 42.703837-13.261019 63.090556a433.148514 433.148514 0 0 0 71.072346 69.611955c40.597182 31.406792 85.416068 53.480513 129.622261 63.845929 20.009031 4.700108 39.631981 7.024983 58.675811 7.024983 40.37057 0 78.122508-10.482919 111.224696-31.155001 25.078433-15.661431 46.077843-36.257975 62.528221-60.950327 16.559487 25.195936 37.802296 46.203739 63.266809 62.108568 33.110581 20.672082 70.854126 31.146608 111.224696 31.146608 19.04383 0 38.66678-2.324875 58.675811-7.01659 44.206193-10.37381 89.033472-32.447531 129.630655-63.854323a433.148514 433.148514 0 0 0 71.063952-69.611955c16.56788-20.386718 10.012908-50.945812-13.261019-63.082162l-0.654657-0.335722c-17.524688-9.148424-38.918572-4.515461-51.441003 10.793462-43.769755 53.522479-99.113525 91.391919-154.432116 104.359181-28.074752 6.588544-69.343377 9.568077-106.507802-13.638706-19.933493-12.455286-35.737606-30.718562-46.808039-53.589623C743.229739 835.785858 854.41247 706.155204 854.41247 550.984499a318.096587 318.096587 0 0 0-17.625405-104.669724c6.093354-0.721802 12.488858-1.175027 19.110975-1.175027 21.419063 0 45.045498 4.532247 67.211542 18.372386 38.062481 23.760724 61.076223 68.655147 64.794345 126.416116 2.165407 33.412731-2.198979 68.604789-12.564396 103.654165-5.673702 19.220084 2.887209 39.76627 20.621724 49.015411l0.419652 0.21822c23.265534 12.13635 51.734759-0.08393 59.187787-25.288259 13.185481-44.600667 18.724894-89.772061 15.938402-133.021447zM578.104877 782.204628a279.916604 279.916604 0 0 1-0.117502-7.629282v-2.274516c0.235005-28.452439 4.951899-57.895258 13.865318-87.212181 8.208403-27.02562-3.802052-56.065573-28.888878-68.957297l-0.553941-0.285364a57.870078 57.870078 0 0 0-52.758711-0.075537c-25.128791 12.82458-37.214783 41.856139-29.065131 68.906939 8.879847 29.426033 13.537989 58.986354 13.655492 87.531116l-0.016786 2.484343c-0.016786 2.509522-0.067144 5.010651-0.142682 7.503386C384.737403 762.304707 301.562279 666.187501 301.562279 550.984499c0-27.621527 4.800824-54.135171 13.571562-78.777165 27.797781 15.38446 54.487679 36.476194 78.466622 62.083389 17.524688 18.733287 45.431579 23.332678 68.260674 11.683126l0.71341-0.360902a58.096691 58.096691 0 0 0 31.650191-51.751545v-2.341661c0-26.840973-18.338814-50.307941-44.41602-56.451652-33.513448-7.889467-64.592911-20.327967-91.778-36.845489 43.047952-50.307941 106.910668-82.251888 178.075338-82.251888 71.953616 0 136.429025 32.648964 179.48537 83.913712-27.529203 16.282517-58.91921 28.452439-92.709628 36.039756-26.320604 5.900314-44.88603 29.543535-44.88603 56.569155v1.552714a58.096691 58.096691 0 0 0 31.515902 51.684401l1.326101 0.671444c22.820702 11.733484 50.752772 7.167665 68.336212-11.540443 23.920192-25.45612 50.542946-46.413565 78.248403-61.688916a234.35913 234.35913 0 0 1 13.23584 77.811964c0 115.219788-83.19191 211.336994-192.553349 231.228522z"
        fill={getIconColor(color, 0, '#3C9D17')}
      />
    </Svg>
  );
};

IBiohazard.defaultProps = {
  size: 18,
};

IBiohazard = React.memo ? React.memo(IBiohazard) : IBiohazard;

export default IBiohazard;
