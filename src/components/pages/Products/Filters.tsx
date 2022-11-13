type Props = {
  category: string;
  changeCategory: (category: string) => void;
};

export const Filters: React.FC<Props> = ({ category, changeCategory }) => {
  return (
    <div className='fixed top-24 left-10 w-36 flex flex-col gap-2 items-start text-lg font-medium'>
      <h1 className='font-medium text-xl'>Showing/</h1>
      <h1 className='mb-12 h-16 font-bold text-2xl'>
        {category.toUpperCase()}
      </h1>
      <button
        onClick={() => changeCategory('all')}
        className='hover:text-gray-500 transition-all ease-in-out duration-300'
      >
        ALL PRODUCTS
      </button>
      <button
        onClick={() => changeCategory("men's clothing")}
        className='hover:text-gray-500 transition-all ease-in-out duration-300'
      >
        MAN
      </button>
      <button
        onClick={() => changeCategory("women's clothing")}
        className='hover:text-gray-500 transition-all ease-in-out duration-300'
      >
        WOMAN
      </button>
      <button
        onClick={() => changeCategory('jewelery')}
        className='hover:text-gray-500 transition-all ease-in-out duration-300'
      >
        JEWELERY
      </button>
    </div>
  );
};
