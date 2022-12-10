import React from 'react';
import { useSelector } from 'react-redux';
import { selectProductReducer } from '../store/products/products.selector';

const Products = () => {
  const { data } = useSelector(selectProductReducer);

  return (
    <div>
      {data.map((product) => (
        <div key={product.id}>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;
