import { useState } from 'react';
import { Product } from '../../globals/types';
import { CartIcon } from '../Icons/CartIcon';
import { Cart } from './Cart';

type Props = {
  cart: Product[];
  deleteCartProduct: (id: number) => void;
  updateProductQuantity: (id: number, amount: number) => void;
};

export const CartButton = ({
  cart,
  deleteCartProduct,
  updateProductQuantity,
}: Props) => {
  const [showCart, setShowCart] = useState<boolean>(false);

  const toggleCart = () => {
    showCart ? setShowCart(false) : setShowCart(true);
  };

  const totalProducts = cart.reduce((acc, cur) => acc + cur.quantity, 0);

  return (
    <>
      <button onClick={toggleCart}>
        <CartIcon />
      </button>
      {cart.length > 0 && (
        <span className='-z-10 absolute flex justify-center items-center right-3 lg:right-7 bottom-2 w-5 h-5 text-xs font-bold text-white px-[0.2rem] bg-black rounded-md'>
          {totalProducts < 100 ? (
            <span>{totalProducts}</span>
          ) : (
            <span>99+</span>
          )}
        </span>
      )}
      <Cart
        cart={cart}
        showCart={showCart}
        toggleCart={toggleCart}
        deleteCartProduct={deleteCartProduct}
        updateProductQuantity={updateProductQuantity}
      />
    </>
  );
};
