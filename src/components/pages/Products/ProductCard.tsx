import { Product } from '../../../globals/types';

type Props = {
  product: Product;
  addToCart: (product: Product) => void;
};

export const ProductCard = ({ product, addToCart }: Props) => {
  return (
    <li className='bg-white shadow-sm shadow-black border border-solid border-black rounded-sm flex flex-col justify-between items-center'>
      <div className='h-80 w-full p-4 flex items-center justify-center'>
        <img src={product.image} className='max-h-64'></img>
      </div>
      <div className='w-full bg-gray-100'>
        <div className='h-28 border-t border-gray-300 px-4 py-2 flex justify-between items-center text-base lg:font-medium'>
          <span>{product.title}</span>
          <span className='w-48 text-right'>{product.price + ' USD'}</span>
        </div>
        <button
          onClick={() => {
            addToCart(product);
          }}
          className='bg-black text-white w-full h-12 font-medium'
        >
          ADD TO CART
        </button>
      </div>
    </li>
  );
};
