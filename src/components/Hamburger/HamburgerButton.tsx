import { useState } from 'react';
import { HamburgerMenuIcon } from '../Icons/HamburgerMenuIcon';
import { HamburgerMenu } from './HamburgerMenu';

type Props = {
  changeCategory: (category: string) => void;
};

export const HamburgerButton = ({ changeCategory }: Props) => {
  const [showHamburgerMenu, setShowHamburgerMenu] = useState<boolean>(false);

  const toggleHamburgerMenu = () => {
    showHamburgerMenu
      ? setShowHamburgerMenu(false)
      : setShowHamburgerMenu(true);
  };
  return (
    <>
      <button onClick={toggleHamburgerMenu}>
        <HamburgerMenuIcon width='1.25em' height='1.25em' />
      </button>
      <HamburgerMenu
        showHamburgerMenu={showHamburgerMenu}
        toggleHamburgerMenu={toggleHamburgerMenu}
        changeCategory={changeCategory}
      />
    </>
  );
};
