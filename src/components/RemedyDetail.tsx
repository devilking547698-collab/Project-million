import React from 'react';
import { Remedy } from '../data/remedies';
import './RemedyDetail.css';

interface RemedyDetailProps {
  remedy: Remedy;
  onBack: () => void;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
}

const RemedyDetail: React.FC<RemedyDetailProps> = ({
  remedy,
  onBack,
  isFavorite,
  onToggleFavorite
}) => {
  return (
    <div className="remedy-detail">
      <div className="detail-header">
        <button onClick={onBack} className="back-button">← Back</button>
        <button
          className={`favorite-button-large ${isFavorite ? 'favorite' : ''}`}
          onClick={() => onToggleFavorite(remedy.id)}
        >
          {isFavorite ? '❤️ Remove from Favorites' : '🤍 Add to Favorites'}
        </button>
      </div>

      <div className="detail-content">
        <div className="detail-title-section">
          <h2>{remedy.name}</h2>
          <span className="category-badge-large">{remedy.category}</span>
        </div>

        <p className="detail-description">{remedy.description}</p>

        <section className="detail-section">
          <h3>🎯 Treats</h3>
          <div className="ailments-list-detail">
            {remedy.ailments.map((ailment, index) => (
              <span key={index} className="ailment-tag-large">{ailment}</span>
            ))}
          </div>
        </section>

        <section className="detail-section">
          <h3>🛒 Ingredients</h3>
          <ul className="ingredients-list">
            {remedy.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </section>

        <section className="detail-section">
          <h3>📝 Preparation</h3>
          <ol className="preparation-list">
            {remedy.preparation.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </section>

        <section className="detail-section">
          <h3>💡 How to Use</h3>
          <p className="usage-text">{remedy.usage}</p>
        </section>

        <section className="detail-section">
          <h3>✅ Benefits</h3>
          <ul className="benefits-list">
            {remedy.benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </section>

        <section className="detail-section warning-section">
          <h3>⚠️ Precautions</h3>
          <ul className="precautions-list">
            {remedy.precautions.map((precaution, index) => (
              <li key={index}>{precaution}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default RemedyDetail;
