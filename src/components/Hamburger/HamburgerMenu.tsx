import { useNavigate } from 'react-router-dom';
import { CloseIcon } from '../Icons/CloseIcon';
import { NavLogo } from '../Nav/NavLogo';

type Props = {
  showHamburgerMenu: boolean;
  toggleHamburgerMenu: () => void;
  changeCategory: (category: string) => void;
};

export const HamburgerMenu = ({
  showHamburgerMenu,
  toggleHamburgerMenu,
  changeCategory,
}: Props) => {
  const navigate = useNavigate();

  const handleClick = (category: string) => {
    changeCategory(category);
    navigate('/products');
  };

  return (
    <div
      className={`fixed h-screen w-2/3 max-w-sm top-0 py-4 bg-gray-100 shadow-xl shadow-black ease-in-out duration-700 ${
        showHamburgerMenu ? 'left-0' : '-left-3/4'
      }`}
    >
      <div className='flex justify-between'>
        <NavLogo />
        <button className='mr-4' onClick={toggleHamburgerMenu}>
          <CloseIcon />
        </button>
      </div>

      <div className='flex flex-col items-start mt-8 mx-6 gap-4 text-xl md:text-2xl font-bold'>
        <button
          onClick={() => {
            navigate('/products');
            toggleHamburgerMenu();
          }}
        >
          SHOP
        </button>
        <button
          onClick={() => {
            navigate('/contact');
            toggleHamburgerMenu();
          }}
        >
          CONTACT
        </button>
        <div className='bg-black h-[0.0625rem] my-4 w-full' />
        <button
          onClick={() => {
            handleClick('all');
            toggleHamburgerMenu();
          }}
        >
          NEW
        </button>
        <button
          onClick={() => {
            handleClick("men's clothing");
            toggleHamburgerMenu();
          }}
        >
          MAN
        </button>
        <button
          onClick={() => {
            handleClick("women's clothing");
            toggleHamburgerMenu();
          }}
        >
          WOMAN
        </button>
        <button
          onClick={() => {
            handleClick('jewelery');
            toggleHamburgerMenu();
          }}
        >
          JEWELERY
        </button>
      </div>
    </div>
  );
};
