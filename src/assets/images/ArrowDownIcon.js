import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function ArrowDownIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M6 9l6 6 6-6"
        stroke="#0C0C0C"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default ArrowDownIcon;
