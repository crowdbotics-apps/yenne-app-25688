import * as React from 'react';

import WalletIcon from './WalletIcon';
import CardsIcon from './CardsIcon';
import UserIcon from './UserIcon.js';
import HomeIcon from './HomeIcon';

export default function TabBarIcon({ route, focused }) {
  const color = focused ? '#fff' : '#E2D0F3';

  switch (route.name) {
    case 'Accounts':
      return <WalletIcon {...{ color }} />;
    case 'Cards':
      return <CardsIcon {...{ color }} />;
    case 'Profile':
      return <UserIcon {...{ color }} />;
    case 'Home':
      return <HomeIcon {...{ color }} />;
    default:
      return null;
  }
}
