import React, { useState, useEffect } from 'react'; 
import './Hero.css';

const Hero = () => {
  const themes = [
    {
      title: "New Arrival 2026",
      subtitle: "Experience the Future of Audio",
      description: "Premium sound, zero distractions.",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000",
      accent: "#FFD700"
    },
    {
      title: "Summer Collection",
      subtitle: "Elevate Your Summer Style",
      description: "New arrivals in sustainable fashion.",
      image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=1000",
      accent: "#FF6B6B" 
    }
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % themes.length);
    }, 10000);
    return () => clearInterval(timer);
  }, [themes.length]);

  const activeTheme = themes[current];

  return (
    <>
    <section className="hero-container">
      <div 
        className="hero-accent-blob" 
        style={{ backgroundColor: activeTheme.accent }}
      ></div>

      <div className="hero-content">
        <span className="badge" style={{ backgroundColor: activeTheme.accent }}>
          {activeTheme.title}
        </span>
        <h1>{activeTheme.subtitle}</h1>
        <p>{activeTheme.description}</p>
        
        <div className="hero-btns">
          <button className="primary-btn">Shop Now</button>
          <button className="secondary-btn">Learn More</button>
        </div>
      </div>

      <div className="hero-image">
        <img 
          key={activeTheme.image} 
          src={activeTheme.image} 
          alt={activeTheme.subtitle} 
        />
      </div>
    </section>
    </>
  );
};

export default Hero;