import { SearchIcon } from '../Icons/SearchIcon';
import { SearchMenu } from './SearchMenu';

export const SearchBar = () => {
  return (
    <button
      className='lg:w-60 flex gap-2 items-center lg:border-b border-black'
      onClick={() => <SearchMenu />}
    >
      <SearchIcon />
      <span className='hidden lg:flex'>SEARCH</span>
    </button>
  );
};
