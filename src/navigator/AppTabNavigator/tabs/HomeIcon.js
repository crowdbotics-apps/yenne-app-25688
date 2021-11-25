import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';

function HomeIcon(props) {
  const color = props.color || '#fff';
  return (
    <Svg
      width={29}
      height={25}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#prefix__clip0)">
        <Path
          d="M26.108 12.329L16.674 2.9l-.632-.632a.769.769 0 00-1.084 0L4.892 12.329a1.56 1.56 0 00-.459 1.123c.01.86.725 1.546 1.585 1.546h1.037v7.951h16.89v-7.952h1.06c.417 0 .81-.163 1.105-.458a1.553 1.553 0 00.457-1.106c0-.415-.164-.809-.46-1.104zm-9.24 8.862h-2.735v-4.98h2.734v4.98zm5.319-7.951v7.951H18.43v-5.566a.976.976 0 00-.977-.977h-3.906a.976.976 0 00-.977.977v5.566H8.813V13.24H6.469l9.033-9.026.564.564 8.467 8.462h-2.346z"
          fill={color}
          fillOpacity={0.7}
        />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0">
          <Path fill={color} d="M0 0h25v25H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default HomeIcon;
