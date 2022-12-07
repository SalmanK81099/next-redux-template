import React from 'react';
import { useSelector } from 'react-redux';
import { selectCountReducer } from '../store/counter/counter.selector';

const Display = () => {
  const { count, loading, error } = useSelector(selectCountReducer);

  if (loading) {
    return <h1>Loading....</h1>;
  }

  return (
    <div>
      {error ? (
        <h1
          style={{
            color: 'red',
          }}
        >
          {error}
        </h1>
      ) : (
        <h1>Count {count}</h1>
      )}
    </div>
  );
};

export default Display;
