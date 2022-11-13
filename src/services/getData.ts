import axios from 'axios';
import { Data } from '../globals/types';

export const getData = () => {
  return axios.get<Data>('https://fakestoreapi.com/products');
};
