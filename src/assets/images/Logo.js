import * as React from 'react';
import { Image } from 'react-native';
import Logo from './icon.png';
function SvgComponent(props) {
  return (
    <Image
      style={{ backgroundColor: 'red', flex: 1, width: 50, height: 50 }}
      source={Logo}
    />
  );
}

export default SvgComponent;
