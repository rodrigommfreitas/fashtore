import { useNavigate } from 'react-router-dom';

export const NavLogo = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate('/home')}
      className='text-2xl lg:text-3xl ml-6 lg:mx-10 font-bold lg:ml-0'
    >
      Fashtore
    </button>
  );
};
