
import React, { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { useAppDispatch } from '../app/hooks';
import { addToCart, removeItemFromCart } from "../features/cartSlice";


const Product = (props) => {
  const { image, title, category, price, description, id, rating } = props;
  const product = props;
  const cartItems = props.cartItems;
  const dispatch = useAppDispatch();
  const location = useLocation();

  const [show, setShow] = useState(false);

  const toggleDescription = () => {
    setShow(!show);
  }

  const showHandler = () => {
    if (show) {
      return <p>{description};</p>
    } else {
      return <p>{description.slice(0, 100)}...</p>
    }
  }

  const totalHeight = show ? "auto" : "auto";

  const handleAddProduct = () => {
    console.log("products", product);
    dispatch(addToCart(product))

  }
  const handleRemoveProduct = (item) => {
    if (item.index === product.index)
      dispatch(removeItemFromCart(product));
  }

  return (

    <div>
      <section className='Detail'>
        <article className='Detail_thumbnail' style={{ height: totalHeight }}>
          <img src={image} alt={title} />
          <h3 className='id'>{id}</h3>
          <h4 className='title'>{title}</h4>
          <h2 className='category'>{category}</h2>
          <h3 className='price'>Price: {price}€</h3>
          <h5 className='rating'>Rating: {rating.rate}</h5>
          <h5 className='count'>Total ratings: {rating.count}</h5>
          <div className='description'>
            {showHandler()}
            <Card.Link onClick={toggleDescription} style={{ cursor: "ponter" }}>{show ? 'See Less' : 'See More'}</Card.Link>
          </div>
          <Button variant="primary" onClick={handleAddProduct}>Add to cart</Button>
          {location.pathname === "/cart" && <Button variant='danger' onClick={handleRemoveProduct}>Remove from cart</Button>}
          {/* {(cartItems.length > 0 && cartItems.find(item => item.id === product.id)) && <Button variant='danger' onClick={handleRemoveProduct}>Remove from cart</Button>} */}
        </article>
      </section>

    </div>
  );
};

export default Product;