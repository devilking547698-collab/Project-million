import React from 'react';
import { remedies, Remedy } from '../data/remedies';
import RemedyCard from './RemedyCard';
import './CategoryPage.css';

interface CategoryPageProps {
  category: string;
  onRemedySelect: (remedy: Remedy) => void;
  onBack: () => void;
  favorites: string[];
  onToggleFavorite: (id: string) => void;
}

const CategoryPage: React.FC<CategoryPageProps> = ({
  category,
  onRemedySelect,
  onBack,
  favorites,
  onToggleFavorite
}) => {
  const categoryRemedies = remedies.filter(remedy => remedy.category === category);

  return (
    <div className="category-page">
      <div className="category-header">
        <button onClick={onBack} className="back-button">← Back</button>
        <h2>{category}</h2>
        <p className="results-count">{categoryRemedies.length} remedies found</p>
      </div>

      <div className="remedies-grid">
        {categoryRemedies.map(remedy => (
          <RemedyCard
            key={remedy.id}
            remedy={remedy}
            onClick={() => onRemedySelect(remedy)}
            isFavorite={favorites.includes(remedy.id)}
            onToggleFavorite={onToggleFavorite}
          />
        ))}
      </div>

      {categoryRemedies.length === 0 && (
        <div className="no-results">
          <p>No remedies found in this category.</p>
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
