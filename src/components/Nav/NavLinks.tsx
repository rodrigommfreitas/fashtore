import { useNavigate } from 'react-router-dom';

export const NavLinks = () => {
  const navigate = useNavigate();

  return (
    <div className='hidden lg:flex gap-8 items-center'>
      <button
        onClick={() => navigate('/products')}
        className='hover:text-gray-600 transition-all'
      >
        Shop
      </button>
      <button
        onClick={() => navigate('/contact')}
        className='hover:text-gray-600 transition-all'
      >
        Contact
      </button>
    </div>
  );
};
