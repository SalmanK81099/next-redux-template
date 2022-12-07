import React from 'react';
import { useSelector } from 'react-redux';
import { selectCountReducer } from '../store/counter/counter.selector';

const Display = () => {
  const { count } = useSelector(selectCountReducer);
  return <h1>Count {count}</h1>;
};

export default Display;
