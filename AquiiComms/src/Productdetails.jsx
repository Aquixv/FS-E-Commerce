import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    

    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
      .catch(err => console.error(err));
  }, [id]);

  if (loading) return <div className="loader">Loading product...</div>;
  if (!product) return <div>Product not found!</div>;

  return (
    <div className="product-details-container" style={{ padding: '40px 5%', display: 'flex', gap: '40px' }}>
    
      <div className="product-gallery" style={{ flex: '1' }}>
        <img 
          src={product.thumbnail} 
          alt={product.title} 
          style={{ width: '100%', borderRadius: '15px', background: '#f5f5f5' }} 
        />
      </div>

      <div className="product-info-panel" style={{ flex: '1' }}>
        <p className="brand">{product.brand}</p>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>{product.title}</h1>
        <div className="rating">⭐ {product.rating}</div>
        
        <h2 style={{ fontSize: '2rem', color: '#222', margin: '20px 0' }}>
          ${product.price}
        </h2>
        
        <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '30px' }}>
          {product.description}
        </p>

        <button 
          style={{ padding: '15px 40px', background: '#000', color: '#fff', borderRadius: '30px', fontSize: '1.1rem', cursor: 'pointer' }}
        >
          Add to Cart
        </button>
<div className="product-reviews" style={{ marginTop: '50px', borderTop: '1px solid #eee', paddingTop: '30px' }}>
  <h3 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>Customer Reviews</h3>

  {product.reviews && product.reviews.length > 0 ? (
    <div className="reviews-list" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      {product.reviews.map((review, index) => (
        <div key={index} className="review-card" style={{ background: '#f9f9f9', padding: '20px', borderRadius: '12px' }}>
          
          <div className="review-header" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
            <strong style={{ fontSize: '1.1rem' }}>{review.reviewerName}</strong>
            <span style={{ color: '#FFB800' }}>{"⭐".repeat(review.rating)}</span>
          </div>
          
          <p style={{ color: '#555', fontStyle: 'italic', margin: '0' }}>"{review.comment}"</p>
          <span style={{ fontSize: '0.8rem', color: '#999', display: 'block', marginTop: '10px' }}>
            {new Date(review.date).toLocaleDateString()}
          </span>

        </div>
      ))}
    </div>
  ) : (
    <p>No reviews yet for this product.</p>
  )}
</div>
      </div>
      
    </div>
  );
};

export default ProductDetails;