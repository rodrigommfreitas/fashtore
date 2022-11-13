/* eslint-disable react/no-unescaped-entities */
import { CloseIcon } from '../Icons/CloseIcon';

type Props = {
  showUserMenu: boolean;
  toggleUserMenu: () => void;
};

export const UserMenu = ({ showUserMenu, toggleUserMenu }: Props) => {
  return (
    <div
      className={`fixed h-screen w-2/3 max-w-sm bg-gray-100 border-l border-gray-500 top-0 py-[1.38rem] px-4 flex flex-col gap-16 shadow-xl shadow-black ease-in-out duration-700 ${
        showUserMenu ? 'right-0' : '-right-3/4'
      }`}
    >
      <div className='flex justify-between mx-3 lg:mx-7'>
        <h1 className='text-lg lg:text-xl font-semibold'>Your account.</h1>
        <button className='' onClick={() => toggleUserMenu()}>
          <CloseIcon />
        </button>
      </div>
      <div className='flex flex-col items-center mt-28 lg:mt-64 font-bold'>
        <button className='bg-black text-white w-48 lg:w-64 py-4 px-6 tracking-widest border-2 border-black hover:bg-white hover:text-black transition-all duration-300'>
          LOG IN
        </button>
        <div className='bg-black h-[0.0625rem] mt-8 w-32 lg:w-48 ' />
        <h1 className='my-4 text-sm font-normal lg:font-medium lg:text-base'>
          Don't have an account yet?
        </h1>
        <button className='bg-black text-white w-48 lg:w-64 py-4 px-6 tracking-widest border-2 border-black hover:bg-white hover:text-black transition-all duration-300'>
          REGISTER
        </button>
      </div>
    </div>
  );
};
