import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function ReceiveIcon(props) {
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
        d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M14 7l-5 5 5 5M9 12h12"
        stroke="#25282B"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default ReceiveIcon;
