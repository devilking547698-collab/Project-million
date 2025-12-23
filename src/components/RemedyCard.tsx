import React from 'react';
import { Remedy } from '../data/remedies';
import './RemedyCard.css';

interface RemedyCardProps {
  remedy: Remedy;
  onClick: () => void;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
}

const RemedyCard: React.FC<RemedyCardProps> = ({
  remedy,
  onClick,
  isFavorite,
  onToggleFavorite
}) => {
  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onToggleFavorite(remedy.id);
  };

  return (
    <div className="remedy-card" onClick={onClick}>
      <button
        className={`favorite-button ${isFavorite ? 'favorite' : ''}`}
        onClick={handleFavoriteClick}
        aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
      >
        {isFavorite ? '❤️' : '🤍'}
      </button>
      
      <h4>{remedy.name}</h4>
      <span className="category-badge">{remedy.category}</span>
      <p className="remedy-description">{remedy.description}</p>
      
      <div className="ailments-list">
        {remedy.ailments.slice(0, 3).map((ailment, index) => (
          <span key={index} className="ailment-tag">{ailment}</span>
        ))}
        {remedy.ailments.length > 3 && (
          <span className="ailment-tag more">+{remedy.ailments.length - 3} more</span>
        )}
      </div>
      
      <button className="view-details-btn">View Details →</button>
    </div>
  );
};

export default RemedyCard;
