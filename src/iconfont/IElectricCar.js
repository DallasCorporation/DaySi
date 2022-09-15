/* eslint-disable */

import React from 'react';
import { Svg, Path } from 'react-native-svg';
import { getIconColor } from './helper';

let IElectricCar = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M165.224081 365.512154c44.35999 0 86.05598-19.247995 123.927971-57.199986 31.479993-31.535993 52.239988-70.199984 65.919985-108.303975h273.791936c17.767996 68.935984 80.359981 119.999972 154.631963 119.999972h78.815982a39.959991 39.959991 0 0 0 39.919991-39.999991v-3.999999h79.839981a39.967991 39.967991 0 0 0 39.93599-39.99999c0-22.087995-17.879996-39.999991-39.93599-39.999991h-79.839981v-59.999986h79.839981a39.967991 39.967991 0 0 0 39.93599-39.999991c0-22.087995-17.879996-39.999991-39.93599-39.99999h-79.839981v-15.999996A39.967991 39.967991 0 0 0 862.311918 0.00024h-78.815982c-74.271983 0-136.863968 51.079988-154.639963 120.007972H375.192032c6.095999-38.591991 6.199999-68.783984 6.039999-78.399982l0.008-0.28A39.967991 39.967991 0 0 0 342.80804 0.11224c-6.975998-0.256-171.99996-5.199999-269.183937 92.175978-38.159991 38.239991-57.359987 80.095981-57.079987 124.423971 0.28 44.51199 21.799995 79.455981 34.959992 96.703978C17.872116 383.92815 0.00012 462.120132 0.00012 542.584113v281.247934c0 66.159984 53.727987 119.999972 119.759972 119.999972h36.815991c16.479996 46.559989 60.855986 79.999981 112.895974 79.999981 52.047988 0 96.415977-33.439992 112.903973-79.999981h100.679977a39.959991 39.959991 0 0 0 39.91999-39.999991c0-22.095995-17.871996-39.999991-39.91999-39.99999H382.37603c-16.479996-46.559989-60.855986-79.999981-112.903973-79.999982-52.039988 0-96.415977 33.439992-112.895974 79.999982H119.760092c-22.015995 0-39.919991-17.943996-39.919991-39.999991V727.792069c0-8.743998 0.544-17.399996 1.608-25.959993l687.039839-0.344 119.823972 44.639989 0.192 0.064c31.991993 11.735997 54.047987 43.46399 53.639987 77.159982v40.479991H855.43992c-16.479996-46.559989-60.847986-79.999981-112.895974-79.999982-66.039985 0-119.759972 53.831987-119.759972 119.999972 0 66.159984 53.719987 119.999972 119.759972 119.999972 52.047988 0 96.415977-33.439992 112.895974-79.999981h126.63997a39.967991 39.967991 0 0 0 39.91999-39.999991v-79.775981c0.704-67.959984-41.83999-129.39997-105.959975-152.959964L779.943937 620.400095 540.567993 438.416137a120.303972 120.303972 0 0 0-72.399983-24.407994H187.632076a118.919972 118.919972 0 0 0-94.479978 46.263989 40.023991 40.023991 0 0 0-4.959999 8.255998l-3.559999 7.991998a448.623895 448.623895 0 0 1 34.471992-118.983972c19.799995 6.111999 37.471991 7.975998 46.119989 7.975998zM783.495936 80.000221h38.887991v159.999963h-38.887991c-44.02399 0-79.839981-35.887992-79.839981-79.999982s35.815992-79.999981 79.839981-79.999981zM269.472057 863.840038c22.015995 0 39.919991 17.943996 39.91999 39.99999s-17.903996 39.999991-39.91999 39.999991c-22.015995 0-39.919991-17.943996-39.919991-39.999991s17.903996-39.999991 39.919991-39.99999z m473.071889 79.999981c-22.015995 0-39.919991-17.943996-39.919991-39.999991s17.903996-39.999991 39.919991-39.99999c22.015995 0 39.919991 17.943996 39.919991 39.99999s-17.903996 39.999991-39.919991 39.999991zM355.304037 494.000124h112.863973c8.663998 0 17.231996 2.879999 24.135995 8.135998l157.439963 119.687972H355.304037V494.008124z m-196.527954 12.351997a39.583991 39.583991 0 0 1 28.855993-12.351997h87.823979v127.82397H107.280095l51.495988-115.471973z m-62.391986-290.159932c-0.136-22.455995 10.879997-44.47999 33.695993-67.343984 47.735989-47.831989 123.223971-62.511985 169.43996-66.959984-4.423999 46.335989-19.071996 121.999971-66.823985 169.83996-22.671995 22.719995-44.74399 33.767992-67.471984 33.767992-1.296 0-3.039999-0.144-5.023999-0.408a433.255898 433.255898 0 0 1 30.583993-38.735991 424.423901 424.423901 0 0 1 26.199994-27.039993 40.055991 40.055991 0 0 0 1.712-56.535987 39.871991 39.871991 0 0 0-56.431987-1.72 504.319882 504.319882 0 0 0-31.159993 32.151993 513.19988 513.19988 0 0 0-32.159992 40.19199 65.335985 65.335985 0 0 1-2.56-17.199996z"
        fill={getIconColor(color, 0, '#3C9D17')}
      />
    </Svg>
  );
};

IElectricCar.defaultProps = {
  size: 18,
};

IElectricCar = React.memo ? React.memo(IElectricCar) : IElectricCar;

export default IElectricCar;
