import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function UserIconComponent(props) {
  return (
    <Svg
      width={30}
      height={30}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M15 2.5C8.1 2.5 2.5 8.1 2.5 15S8.1 27.5 15 27.5 27.5 21.9 27.5 15 21.9 2.5 15 2.5zm0 3.75A3.745 3.745 0 0118.75 10 3.745 3.745 0 0115 13.75 3.745 3.745 0 0111.25 10 3.745 3.745 0 0115 6.25zM15 24a9 9 0 01-7.5-4.025c.037-2.488 5-3.85 7.5-3.85 2.488 0 7.462 1.363 7.5 3.85A9 9 0 0115 24z"
        fill="#fff"
      />
    </Svg>
  );
}

const UserIcon = React.memo(UserIconComponent);
export default UserIcon;
