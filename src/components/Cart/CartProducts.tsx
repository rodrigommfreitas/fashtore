import { Product } from '../../globals/types';
import { CartProductCard } from './CartProductCard';

type Props = {
  cart: Product[];
  deleteCartProduct: (id: number) => void;
  updateProductQuantity: (id: number, amount: number) => void;
};

export const CartProducts = ({
  cart,
  deleteCartProduct,
  updateProductQuantity,
}: Props) => {
  return (
    <div className='max-h-max  mx-2 lg:mx-6 overflow-y-scroll overflow-x-hidden'>
      {cart.map((product: Product) => (
        <CartProductCard
          key={product.id}
          product={product}
          deleteCartProduct={deleteCartProduct}
          updateProductQuantity={updateProductQuantity}
        />
      ))}
    </div>
  );
};
