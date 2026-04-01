import React, { useEffect, useState } from 'react';
import './Products.css';

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
        <h2>Todays Best Deals For You!</h2>
        <a href="#all" className="view-all">View All</a>
      </div>
      
      <div className="product-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <div className="wishlist-icon">♡</div>
            <div className="image-container">
              <img src={product.thumbnail} alt={product.title} />
            </div>
            <div className="product-info">
              <div className="title-price">
                <h3>{product.title}</h3>
                <span className="price">${product.price}</span>
              </div>
              <p className="description">{product.description.substring(0, 50)}...</p>
              <div className="rating">
                {"⭐".repeat(Math.round(product.rating))} 
                <span>({product.stock} in stock)</span>
              </div>
              <button className="add-to-cart-btn">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductList;