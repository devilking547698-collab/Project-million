import React, { useState } from 'react';
import { remedies, categories } from '../data/remedies';
import { Remedy } from '../data/remedies';
import RemedyCard from './RemedyCard';
import './HomePage.css';

interface HomePageProps {
  onRemedySelect: (remedy: Remedy) => void;
  onCategorySelect: (category: string) => void;
  onSearch: (query: string) => void;
  favorites: string[];
  onToggleFavorite: (id: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({
  onRemedySelect,
  onCategorySelect,
  onSearch,
  favorites,
  onToggleFavorite
}) => {
  const [searchInput, setSearchInput] = useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      onSearch(searchInput.trim());
    }
  };

  const featuredRemedies = remedies.slice(0, 6);

  return (
    <div className="home-page">
      <section className="hero-section">
        <h2>Discover Natural Healing</h2>
        <p>Explore time-tested home remedies for common health concerns</p>
        
        <form onSubmit={handleSearchSubmit} className="search-form">
          <input
            type="text"
            placeholder="Search for remedies or ailments..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="search-input"
          />
          <button type="submit" className="search-button">🔍 Search</button>
        </form>
      </section>

      <section className="categories-section">
        <h3>Browse by Category</h3>
        <div className="categories-grid">
          {categories.map((category) => (
            <div
              key={category}
              className="category-card"
              onClick={() => onCategorySelect(category)}
            >
              <div className="category-icon">{getCategoryIcon(category)}</div>
              <h4>{category}</h4>
            </div>
          ))}
        </div>
      </section>

      <section className="featured-section">
        <h3>Featured Remedies</h3>
        <div className="remedies-grid">
          {featuredRemedies.map((remedy) => (
            <RemedyCard
              key={remedy.id}
              remedy={remedy}
              onClick={() => onRemedySelect(remedy)}
              isFavorite={favorites.includes(remedy.id)}
              onToggleFavorite={onToggleFavorite}
            />
          ))}
        </div>
      </section>

      <section className="quick-tips">
        <h3>Quick Health Tips</h3>
        <div className="tips-grid">
          <div className="tip-card">
            <span className="tip-icon">💧</span>
            <h4>Stay Hydrated</h4>
            <p>Drink at least 8 glasses of water daily for optimal health</p>
          </div>
          <div className="tip-card">
            <span className="tip-icon">🥗</span>
            <h4>Eat Balanced</h4>
            <p>Include fruits, vegetables, and whole grains in your diet</p>
          </div>
          <div className="tip-card">
            <span className="tip-icon">😴</span>
            <h4>Get Rest</h4>
            <p>Aim for 7-9 hours of quality sleep each night</p>
          </div>
          <div className="tip-card">
            <span className="tip-icon">🏃</span>
            <h4>Stay Active</h4>
            <p>Regular exercise strengthens immunity and improves mood</p>
          </div>
        </div>
      </section>
    </div>
  );
};

function getCategoryIcon(category: string): string {
  const icons: Record<string, string> = {
    'Respiratory': '🫁',
    'Digestive': '🫃',
    'Anti-inflammatory': '💪',
    'Skin Care': '✨',
    'Pain Relief': '💊',
    'Sleep & Relaxation': '😴',
    'Immune System': '🛡️',
    'Oral Health': '🦷'
  };
  return icons[category] || '🌿';
}

export default HomePage;
