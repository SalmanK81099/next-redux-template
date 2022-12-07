import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Display from '../components/Display';
import {
  decrement,
  increment,
  resetCount,
  setCount,
} from '../store/counter/counter.action';
import { selectCountReducer } from '../store/counter/counter.selector';

export default function Home() {
  const dispatch = useDispatch();
  const [customCount, setCustomCount] = useState(0);

  const setCustomCountHandler = () => {
    // console.log(Number(customCount));
    dispatch(setCount(Number(customCount)));
  };

  return (
    <div>
      <Display />
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrement
      </button>

      <input
        placeholder={'Set Count'}
        onChange={(e) => setCustomCount(e.target.value)}
        type={'number'}
      />
      <button onClick={setCustomCountHandler}>Set Count</button>

      <button
        onClick={() => {
          dispatch(resetCount());
        }}
      >
        reset Count
      </button>
    </div>
  );
}
