import { Route, Routes } from 'react-router-dom';
import { Contact } from '../components/pages/Contact';
import { Home } from '../components/pages/Home/Home';
import { PageNotFound } from '../components/pages/PageNotFound';
import { Products } from '../components/pages/Products/Products';
import { Data, Product } from '../globals/types';

type Props = {
  data?: Data;
  addToCart: (product: Product) => void;
  category: string;
  changeCategory: (category: string) => void;
};

export const Views = ({ data, addToCart, category, changeCategory }: Props) => {
  return (
    <Routes>
      <Route index element={<Home changeCategory={changeCategory} />} />
      <Route path='/home' element={<Home changeCategory={changeCategory} />} />
      <Route
        path='/products'
        element={
          <Products
            data={data}
            addToCart={addToCart}
            category={category}
            changeCategory={changeCategory}
          />
        }
      />
      <Route path='/contact' element={<Contact />} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  );
};
