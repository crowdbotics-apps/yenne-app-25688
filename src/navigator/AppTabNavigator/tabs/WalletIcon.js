import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function WalletIcon(props) {
  const color = props.color || '#fff';
  return (
    <Svg
      width={21}
      height={21}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M20.222 8.417h-.694V4.25a.695.695 0 00-.695-.694H2.167a.694.694 0 01-.695-.57v-.25a.694.694 0 01.695-.57h16.375a.694.694 0 100-1.388H2.167A2.083 2.083 0 00.083 2.86a2.139 2.139 0 000 .25v14.285a2.847 2.847 0 002.868 2.826h15.882a.695.695 0 00.695-.694V15.36h.694a.694.694 0 00.695-.694V9.11a.694.694 0 00-.695-.694zM18.14 18.833H2.95a1.465 1.465 0 01-1.479-1.437V4.86c.226.065.46.094.695.083h15.972v3.473h-4.861a3.472 3.472 0 000 6.944h4.86v3.472zm1.389-4.86h-6.25a2.083 2.083 0 110-4.167h6.25v4.166z"
        fill={color}
        fillOpacity={0.7}
      />
    </Svg>
  );
}

export default WalletIcon;
