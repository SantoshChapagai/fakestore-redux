import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../app/hooks';
import { fetchProducts } from '../features/productsSlice';
import Product from './Product';

const List = () => {

  const products = useSelector(state => state.products.products);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);


  return (
    <div className='productContainer'>
      {products.map((product) => (<Product key={product.id} {...product} />)
      )}
    </div>
  );
};

export default List;