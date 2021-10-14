import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function NotificationOff(props) {
  return (
    <Svg
      width={25}
      height={25}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M22.576 19.326a10.001 10.001 0 01-1.743-2.034 8.773 8.773 0 01-.937-3.34V10.52a7.507 7.507 0 00-6.556-7.465V2.16a.927.927 0 00-1.854 0v.91a7.507 7.507 0 00-6.479 7.45v3.431a8.77 8.77 0 01-.937 3.34 9.999 9.999 0 01-1.716 2.035.693.693 0 00-.236.521v.945a.695.695 0 00.695.694h19.305a.695.695 0 00.695-.694v-.945a.694.694 0 00-.236-.52zm-19.013.771a11.23 11.23 0 001.694-2.083 9.89 9.89 0 001.146-4.063v-3.43a6.07 6.07 0 1112.132 0v3.43a9.889 9.889 0 001.146 4.063c.48.76 1.048 1.459 1.694 2.083H3.563zM12.5 23.806a1.855 1.855 0 001.792-1.584h-3.653a1.854 1.854 0 001.861 1.584z"
        fill="#fff"
      />
    </Svg>
  );
}

export default NotificationOff;
