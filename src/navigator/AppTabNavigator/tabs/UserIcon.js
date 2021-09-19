import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function UserIcon(props) {
  const color = props.color || '#fff';
  return (
    <Svg
      width={25}
      height={25}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M12.5 2.083C6.75 2.083 2.083 6.75 2.083 12.5S6.75 22.917 12.5 22.917 22.917 18.25 22.917 12.5 18.25 2.083 12.5 2.083zm0 3.125a3.12 3.12 0 013.125 3.125 3.12 3.12 0 01-3.125 3.125 3.12 3.12 0 01-3.125-3.125A3.12 3.12 0 0112.5 5.208zM12.5 20a7.5 7.5 0 01-6.25-3.354c.031-2.073 4.167-3.209 6.25-3.209 2.073 0 6.219 1.136 6.25 3.209A7.5 7.5 0 0112.5 20z"
        fill={color}
        fillOpacity={0.7}
      />
    </Svg>
  );
}

export default UserIcon;
