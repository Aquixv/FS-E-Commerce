import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../Landing page/Productcard';
import '../Landing page/Products.css';

const CategoryPage = ({ isAll = false }) => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);

    const url = isAll 
      ? 'https://dummyjson.com/products?limit=0' 
      : `https://dummyjson.com/products/category/${categoryName}`;

    fetch(url)
      .then(res => res.json())
      .then(data => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch(err => console.error("Fetch error:", err));
  }, [categoryName, isAll]);
  const pageTitle = isAll 
    ? "All Products" 
    : categoryName.charAt(0).toUpperCase() + categoryName.slice(1).replace('-', ' ');

  if (loading) return <div className="loader">Loading {pageTitle}...</div>;

  return (
    <section className="product-section" style={{ paddingTop: '40px' }}>
      <div className="section-header">
        <h2>{pageTitle}</h2>
        <span className="results-count">{products.length} Results found</span>
      </div>
      
      <div className="product-grid page-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default CategoryPage;