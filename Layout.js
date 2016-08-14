'use strict';

import { PixelRatio } from 'react-native';

const pixel = PixelRatio.get();

export default {
  pixel: 1 / pixel,
  tabBarHeight: 49,
  tabBarBorderTopWidth: 3 / pixel,
};
