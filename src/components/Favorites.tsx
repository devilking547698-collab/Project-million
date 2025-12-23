import React from 'react';
import { remedies, Remedy } from '../data/remedies';
import RemedyCard from './RemedyCard';
import './Favorites.css';

interface FavoritesProps {
  favorites: string[];
  onRemedySelect: (remedy: Remedy) => void;
  onBack: () => void;
  onToggleFavorite: (id: string) => void;
}

const Favorites: React.FC<FavoritesProps> = ({
  favorites,
  onRemedySelect,
  onBack,
  onToggleFavorite
}) => {
  const favoriteRemedies = remedies.filter(remedy => favorites.includes(remedy.id));

  return (
    <div className="favorites-page">
      <div className="favorites-header">
        <button onClick={onBack} className="back-button">← Back</button>
        <div>
          <h2>Your Favorites</h2>
          <p className="results-count">{favoriteRemedies.length} saved remedies</p>
        </div>
      </div>

      {favoriteRemedies.length > 0 ? (
        <div className="remedies-grid">
          {favoriteRemedies.map(remedy => (
            <RemedyCard
              key={remedy.id}
              remedy={remedy}
              onClick={() => onRemedySelect(remedy)}
              isFavorite={true}
              onToggleFavorite={onToggleFavorite}
            />
          ))}
        </div>
      ) : (
        <div className="empty-favorites">
          <span className="empty-icon">❤️</span>
          <h3>No Favorites Yet</h3>
          <p>Start adding remedies to your favorites to access them quickly!</p>
          <button onClick={onBack} className="browse-button">Browse Remedies</button>
        </div>
      )}
    </div>
  );
};

export default Favorites;
