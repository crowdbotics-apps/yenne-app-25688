import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function NotificationOn(props) {
  return (
    <Svg
      width={25}
      height={25}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M12.5 23.806a1.855 1.855 0 001.792-1.584h-3.653a1.854 1.854 0 001.861 1.584zM22.576 19.326a10.001 10.001 0 01-1.743-2.034 8.773 8.773 0 01-.937-3.34V10.52a7.573 7.573 0 00-.111-1.243 5.166 5.166 0 01-1.556-.584c.185.594.278 1.212.278 1.834v3.43a9.888 9.888 0 001.146 4.063c.48.76 1.048 1.459 1.694 2.083H3.563a11.227 11.227 0 001.694-2.083 9.889 9.889 0 001.146-4.063v-3.437A6.11 6.11 0 0112.5 4.38a5.98 5.98 0 013.306 1 5.203 5.203 0 01-.18-1.214v-.438a7.348 7.348 0 00-2.306-.694V2.16a.927.927 0 00-1.855 0v.91a7.507 7.507 0 00-6.458 7.45v3.431a8.77 8.77 0 01-.937 3.34 9.999 9.999 0 01-1.716 2.035.693.693 0 00-.236.521v.945a.695.695 0 00.695.694h19.305a.695.695 0 00.695-.694v-.945a.694.694 0 00-.236-.52zM20.834 7.639a3.472 3.472 0 100-6.945 3.472 3.472 0 000 6.945z"
        fill="#fff"
      />
    </Svg>
  );
}

export default NotificationOn;