import { Product } from '../../globals/types';
import { CartButton } from '../Cart/CartButton';
import { HamburgerButton } from '../Hamburger/HamburgerButton';
import { NavLinks } from './NavLinks';
import { NavLogo } from './NavLogo';
import { UserButton } from '../User/UserButton';
import { SearchBar } from '../Search/SearchButton';

type Props = {
  cart: Product[];
  changeCategory: (category: string) => void;
  deleteCartProduct: (id: number) => void;
  updateProductQuantity: (id: number, amount: number) => void;
};

export const Nav = ({
  cart,
  changeCategory,
  deleteCartProduct,
  updateProductQuantity,
}: Props) => {
  return (
    <nav className='fixed bg-[#F0F0F0] shadow-lg shadow-gray-600 lg:bg-opacity-0 lg:shadow-none w-full h-16 flex justify-between py-4 px-6 lg:px-10 items-center font-medium'>
      <div className='flex'>
        <div className='flex lg:hidden items-center'>
          <HamburgerButton changeCategory={changeCategory} />
        </div>
        <NavLogo />
        <NavLinks />
      </div>
      <div className='flex gap-6 items-center'>
        <SearchBar />
        <UserButton />
        <CartButton
          cart={cart}
          deleteCartProduct={deleteCartProduct}
          updateProductQuantity={updateProductQuantity}
        />
      </div>
    </nav>
  );
};
