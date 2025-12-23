import React from 'react';
import { remedies, Remedy } from '../data/remedies';
import RemedyCard from './RemedyCard';
import './SearchResults.css';

interface SearchResultsProps {
  query: string;
  onRemedySelect: (remedy: Remedy) => void;
  onBack: () => void;
  favorites: string[];
  onToggleFavorite: (id: string) => void;
}

const SearchResults: React.FC<SearchResultsProps> = ({
  query,
  onRemedySelect,
  onBack,
  favorites,
  onToggleFavorite
}) => {
  const searchResults = remedies.filter(remedy => {
    const searchLower = query.toLowerCase();
    return (
      remedy.name.toLowerCase().includes(searchLower) ||
      remedy.description.toLowerCase().includes(searchLower) ||
      remedy.ailments.some(ailment => ailment.toLowerCase().includes(searchLower)) ||
      remedy.category.toLowerCase().includes(searchLower) ||
      remedy.ingredients.some(ingredient => ingredient.toLowerCase().includes(searchLower))
    );
  });

  return (
    <div className="search-results">
      <div className="search-header">
        <button onClick={onBack} className="back-button">← Back</button>
        <div>
          <h2>Search Results</h2>
          <p className="search-query">Showing results for: "<strong>{query}</strong>"</p>
          <p className="results-count">{searchResults.length} remedies found</p>
        </div>
      </div>

      <div className="remedies-grid">
        {searchResults.map(remedy => (
          <RemedyCard
            key={remedy.id}
            remedy={remedy}
            onClick={() => onRemedySelect(remedy)}
            isFavorite={favorites.includes(remedy.id)}
            onToggleFavorite={onToggleFavorite}
          />
        ))}
      </div>

      {searchResults.length === 0 && (
        <div className="no-results">
          <h3>No results found</h3>
          <p>Try searching for different keywords or browse by category.</p>
        </div>
      )}
    </div>
  );
};

export default SearchResults;
