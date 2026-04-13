import React from 'react';
import './Categories.css';

const categories = [
  { id: 1, title: 'Furniture', img: '../public/assets/furniture.jpg', color: '#e0f2f1' },
  { id: 2, title: 'Hand Bag', img: '../public/assets/handbag.jpg', color: '#fff3e0' },
  { id: 3, title: 'Books', img: '../public/assets/Books.jpg', color: '#fce4ec' },
  { id: 4, title: 'Tech', img: '../public/assets/tech.jpg', color: '#e8eaf6' },
  { id: 5, title: 'Sneakers', img: '../public/assets/Sneakers.jpg', color: '#f3e5f5' },
  { id: 6, title: 'Travel', img: '../public/assets/travel.jpg', color: '#fff9c4' }
];

const CategoryList = () => (
  <section className="category-section">
    <h2>Shop Our Top Categories</h2>
    <div className="category-grid">
      {categories.map((cat) => (
  <div 
    key={cat.id} 
    className="category-card" 
    style={{ backgroundImage: `url(${cat.img})` }} 
  >
    <div className="category-overlay">
      <h3>{cat.title}</h3> 
    </div>
  </div>
))}
    </div>
  </section>
);

export default CategoryList;