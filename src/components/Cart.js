import React from 'react';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Product from './Product';

const Cart = () => {
  const cartItems = useSelector(state => state.cart.cart);
  console.log("cartItems", cartItems)
  return (
    <div>
      <Container>
        <h1>Cart will be here</h1>
        {cartItems.length === 0 && <p>Your cart is empty</p>}
        {cartItems.map((item) => (
          <Product {...item} />
        ))}
      </Container>
    </div>
  );
};

export default Cart;