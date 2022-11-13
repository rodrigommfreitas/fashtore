import { useNavigate } from 'react-router-dom';

type Props = {
  changeCategory: (category: string) => void;
};

export const Categories = ({ changeCategory }: Props) => {
  const navigate = useNavigate();

  const handleClick = (category: string) => {
    changeCategory(category);
    navigate('/products');
  };

  return (
    <div className='hidden lg:flex absolute left-10 flex-col gap-10 items-start font-bold text-3xl'>
      <button
        onClick={() => handleClick('all')}
        className='hover:scale-110 hover:translate-x-4 hover:text-gray-800 transition-all ease-in-out duration-300'
      >
        NEW
      </button>
      <button
        onClick={() => handleClick("men's clothing")}
        className='hover:scale-110 hover:translate-x-4 hover:text-gray-800 transition-all ease-in-out duration-300'
      >
        MAN
      </button>
      <button
        onClick={() => handleClick("women's clothing")}
        className='hover:scale-110 hover:translate-x-4 hover:text-gray-800 transition-all ease-in-out duration-300'
      >
        WOMAN
      </button>
      <button
        onClick={() => handleClick('jewelery')}
        className='hover:scale-110 hover:translate-x-4 hover:text-gray-800 transition-all ease-in-out duration-300'
      >
        JEWELERY
      </button>
    </div>
  );
};
