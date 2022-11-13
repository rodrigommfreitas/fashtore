import { useNavigate } from 'react-router-dom';
import { Product } from '../../globals/types';
import { CloseIcon } from '../Icons/CloseIcon';
import { CartProducts } from './CartProducts';

type Props = {
  cart: Product[];
  showCart: boolean;
  toggleCart: () => void;
  deleteCartProduct: (id: number) => void;
  updateProductQuantity: (id: number, amount: number) => void;
};

export const Cart = ({
  cart,
  showCart,
  toggleCart,
  deleteCartProduct,
  updateProductQuantity,
}: Props) => {
  const navigate = useNavigate();

  const subtotal = cart
    .reduce((acc, cur) => acc + cur.price * cur.quantity, 0)
    .toFixed(2);

  return (
    <div
      className={`fixed h-screen w-2/3 max-w-sm bg-gray-100 border-l border-gray-500 top-0 py-[1.38rem] px-2 flex flex-col gap-16 justify-between shadow-xl shadow-black ease-in-out duration-700 ${
        showCart ? 'right-0' : '-right-3/4'
      }`}
    >
      <div className='flex justify-between mx-3 lg:mx-7'>
        <h1 className='text-lg lg:text-xl font-semibold'>
          Your shopping cart.
        </h1>
        <button className='' onClick={() => toggleCart()}>
          <CloseIcon />
        </button>
      </div>
      {cart.length > 0 ? (
        <>
          <CartProducts
            cart={cart}
            deleteCartProduct={deleteCartProduct}
            updateProductQuantity={updateProductQuantity}
          />
          <h1 className='flex gap-1 font-bold mx-6'>
            Subtotal: <h1 className='font-medium'>{subtotal} USD</h1>
          </h1>
          <button className='bg-black text-white font-bold py-4 mx-6 tracking-widest border-2 border-black hover:bg-white hover:text-black transition-all duration-500'>
            CHECKOUT
          </button>
        </>
      ) : (
        <>
          <h1 className='text-center'>Your cart is empty.</h1>
          <button
            onClick={() => {
              navigate('/products');
              toggleCart();
            }}
            className='bg-black text-white font-bold py-4 mx-6 tracking-widest border-2 border-black hover:bg-white hover:text-black transition-all duration-300'
          >
            BROWSE SHOP
          </button>
        </>
      )}
    </div>
  );
};
