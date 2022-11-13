import { AxiosError } from 'axios';
import { useQuery } from 'react-query';
import { useState } from 'react';
import { getData } from './services/getData';
import { Data, Product } from './globals/types';
import { Nav } from './components/Nav/Nav';
import { Views } from './Views/Views';

export const App = () => {
  const { data, isLoading, isError, error } = useQuery('products', getData, {
    select: (data) => {
      // Remove products which belong to the electronics category
      const products: Data = data?.data.filter(
        (item: Product) => item.category !== 'electronics'
      );
      products.map((product: Product) => (product.quantity = 1));
      return products;
    },
  });

  const [cart, setCart] = useState<Product[]>([]);
  const [category, setCategory] = useState<string>('all');

  const changeCategory = (category: string) => {
    setCategory(category);
  };

  const addToCart = (newProduct: Product) => {
    const alreadyInCart = cart
      .map((product) => product.id)
      .includes(newProduct.id);
    if (alreadyInCart) {
      updateProductQuantity(newProduct.id, 1);
    } else {
      setCart([...cart, newProduct]);
    }
  };

  const deleteCartProduct = (id: number) =>
    setCart(cart.filter((product) => product.id !== id));

  const updateProductQuantity = (id: number, amount: number) =>
    setCart(
      cart.map((product: Product) =>
        product.id === id
          ? { ...product, quantity: (product.quantity as number) + amount }
          : product
      )
    );

  if (isError) return <h1>{(error as AxiosError).message}</h1>;

  return (
    <>
      <Nav
        cart={cart}
        changeCategory={changeCategory}
        deleteCartProduct={deleteCartProduct}
        updateProductQuantity={updateProductQuantity}
      />
      {isLoading && <h1>Loading...</h1>}
      <Views
        data={data}
        addToCart={addToCart}
        category={category}
        changeCategory={changeCategory}
      />
    </>
  );
};
