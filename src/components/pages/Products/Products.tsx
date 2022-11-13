import { useEffect } from 'react';
import { Product, Data } from '../../../globals/types';
import { Filters } from './Filters';
import { ProductCard } from './ProductCard';

type Props = {
  data?: Data;
  addToCart: (product: Product) => void;
  category: string;
  changeCategory: (category: string) => void;
};

export const Products = ({
  data,
  addToCart,
  category,
  changeCategory,
}: Props) => {
  useEffect(() => {
    document.body.style.backgroundImage = 'none';
    document.body.style.backgroundColor = '#F0F0F0';
  }, []);

  return (
    <>
      <div className='hidden lg:flex'>
        <Filters category={category} changeCategory={changeCategory} />
      </div>
      <div className='flex justify-center'>
        <ul className='my-24 lg:ml-[calc(3rem+11rem)] mx-8 gap-8 lg:gap-12 lg:mx-12 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 '>
          {category === 'all'
            ? data?.map((product: Product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  addToCart={addToCart}
                />
              ))
            : data?.map((product: Product) => {
                if (product.category === category)
                  return (
                    <ProductCard
                      key={product.id}
                      product={product}
                      addToCart={addToCart}
                    />
                  );
              })}
        </ul>
      </div>
    </>
  );
};
