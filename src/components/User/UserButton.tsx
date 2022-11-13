import { useState } from 'react';
import { UserIcon } from '../Icons/UserIcon';
import { UserMenu } from './UserMenu';

export const UserButton = () => {
  const [showUserMenu, setShowUserMenu] = useState<boolean>(false);

  const toggleUserMenu = () => {
    showUserMenu ? setShowUserMenu(false) : setShowUserMenu(true);
  };

  return (
    <>
      <button onClick={toggleUserMenu}>
        <UserIcon width='1.25em' height='1.25em' />
      </button>
      <UserMenu showUserMenu={showUserMenu} toggleUserMenu={toggleUserMenu} />
    </>
  );
};
