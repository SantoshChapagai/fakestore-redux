import React, { useState } from 'react';
import { Card } from 'react-bootstrap';


const Product = (props) => {
  const { image, title, category, price, description, id, rating } = props

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
        </article>
      </section>

    </div>
  );
};

export default Product;