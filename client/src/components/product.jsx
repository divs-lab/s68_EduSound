import React from 'react';
import PropTypes from 'prop-types';
import './product.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h2 className="product-name">{product.name}</h2>
      <p className="product-description">{product.description}</p>
      <div className="product-footer">
        <span className="product-price">${product.price}</span>
        <button className="add-to-cart">Add to Cart</button>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired
  }).isRequired
};

const ProductList = () => {
  const dummyProducts = [
    {
      id: 1,
      name: 'Wireless Headphones',
      description: 'High-quality sound and noise cancellation.',
      price: 99.99,
      image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fzebronics.com%2Fproducts%2Fzeb-sound-bomb-1&psig=AOvVaw1QHc-qm8WMZzc77q3tqW6g&ust=1740888802023000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLCW26eC6IsDFQAAAAAdAAAAABAE'
    },
    {
      id: 2,
      name: 'Earpods',
      description: 'Listen to high definition music',
      price: 199.99,
      image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fzebronics.com%2Fcollections%2Fwireless-earbuds&psig=AOvVaw1QHc-qm8WMZzc77q3tqW6g&ust=1740888802023000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLCW26eC6IsDFQAAAAAdAAAAABAJ'
    }
  ];

  return (
    <div className="product-list">
      {dummyProducts.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
