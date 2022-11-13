import { Product } from '../../globals/types';
import TrashIcon from '../Icons/TrashIcon';

type Props = {
  product: Product;
  deleteCartProduct: (id: number) => void;
  updateProductQuantity: (id: number, amount: number) => void;
};

export const CartProductCard = ({
  product,
  deleteCartProduct,
  updateProductQuantity,
}: Props) => {
  return (
    <li className='flex max-w-[20rem] mb-8 lg:gap-4'>
      <div className='flex-shrink-0 h-24 lg:h-36 max-h-36 w-16 lg:w-32 max-w-32 bg-white border border-gray-400 p-2 flex justify-center items-center'>
        <img
          src={product.image}
          className='max-h-32 h-18 lg:h-32 max-w-24  w-12 lg:w-24'
        />
      </div>
      <div className='flex flex-col flex-shrink-0 justify-between p-2'>
        <div className='text-sm'>
          <h1 className='max-w-[8rem] lg:max-w-[10rem] max-h-10 lg:max-h-24 overflow-hidden font-bold'>
            {product.title}
          </h1>
          <h1 className='uppercase mt-1'>{product.price} USD</h1>
        </div>
        <div className='flex gap-2 font-bold text-2xl'>
          <div className='flex'>
            <button
              onClick={() => updateProductQuantity(product.id, -1)}
              disabled={product.quantity == 1}
              className='px-1 lg:px-2 text-base lg:text-2xl hover:text-orange-600 transition-all'
            >
              -
            </button>
            <div className='border text-sm lg:text-xl px-1 lg:px-2 border-gray-400'>
              {product.quantity}
            </div>
            <button
              onClick={() => updateProductQuantity(product.id, 1)}
              className='px-1 lg:px-2 text-base lg:text-2xl hover:text-green-600 transition-all'
            >
              +
            </button>
          </div>
          <button
            onClick={() => deleteCartProduct(product.id)}
            className='lg:mt-1 hover:text-red-600 transition-all'
          >
            <TrashIcon height='0.75em' width='0.75em' />
          </button>
        </div>
      </div>
    </li>
  );
};
