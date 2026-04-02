import React, { useEffect, useState } from 'react';
import './Products.css';
import ProductCard from './Productcard';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=8')
      .then(res => res.json())
      .then(data => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch(err => console.error("Fetch error:", err));
  }, []);

  if (loading) return <div className="loader">Loading Top Deals...</div>;

  return (
    <section className="product-section">
      <div className="section-header">
        <h2>Today's Best Deals For You!</h2>
        <a href="#all" className="view-all">View All</a>
      </div>
      
      <div className="product-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;