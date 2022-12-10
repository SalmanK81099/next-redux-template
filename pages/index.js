/* eslint-disable react-hooks/exhaustive-deps */
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Display from '../components/Display';
import Products from '../components/Products';
import {
  decrement,
  increment,
  resetCount,
  setCount,
  setCountStartAsync,
} from '../store/counter/counter.action';
import { selectCountReducer } from '../store/counter/counter.selector';
import { fetchProductsStartAsync } from '../store/products/products.action';
import { selectProductReducer } from '../store/products/products.selector';

export default function Home() {
  const dispatch = useDispatch();
  const [customCount, setCustomCount] = useState(0);
  const { loading, error } = useSelector(selectProductReducer);

  const setCustomCountHandler = () => {
    // console.log(Number(customCount));
    dispatch(setCountStartAsync(Number(customCount)));
  };

  useEffect(() => {
    dispatch(fetchProductsStartAsync());
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <Display />

      <input
        placeholder={'Set Count'}
        onChange={(e) => setCustomCount(e.target.value)}
        type={'number'}
      />
      <button onClick={setCustomCountHandler}>Set Count</button>

      <Products />
    </div>
  );
}
