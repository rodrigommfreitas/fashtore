import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Categories } from '../Home/Categories';

type Props = {
  changeCategory: (category: string) => void;
};

export const Home = ({ changeCategory }: Props) => {
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.backgroundImage =
      "url('src/assets/waldemar-brandt-JF1AzM_QFeE-unsplash.jpg')";
  }, []);

  return (
    <div className='h-screen flex justify-center items-center'>
      <Categories changeCategory={changeCategory} />
      <button
        onClick={() => navigate('/products')}
        className='lg:backdrop-brightness-50 font-bold text-white tracking-widest hover:bg-white hover:text-black text-3xl py-2 px-8 border-solid border-2 border-white transition-colors ease-in-out duration-500'
      >
        SHOP
      </button>
    </div>
  );
};
