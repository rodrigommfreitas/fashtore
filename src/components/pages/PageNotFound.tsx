import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const PageNotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.backgroundImage = "url('/src/assets/bg-blur.jpg')";
  }, []);

  return (
    <div className='w-screen h-screen flex items-center justify-center'>
      <h1 className='text-3xl text-white font-bold'>
        The page you were looking for does not exist.
        <button
          onClick={() => navigate('/home')}
          className=' ml-2 underline underline-offset-[10px] decoration-4 hover:text-gray- transition-all'
        >
          Return to homepage.
        </button>
      </h1>
    </div>
  );
};
