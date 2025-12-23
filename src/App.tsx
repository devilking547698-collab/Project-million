import React, { useState } from 'react';
import './App.css';
import HomePage from './components/HomePage';
import RemedyDetail from './components/RemedyDetail';
import CategoryPage from './components/CategoryPage';
import SearchResults from './components/SearchResults';
import SymptomChecker from './components/SymptomChecker';
import Favorites from './components/Favorites';
import { Remedy } from './data/remedies';

type Page = 'home' | 'remedy' | 'category' | 'search' | 'symptom-checker' | 'favorites';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedRemedy, setSelectedRemedy] = useState<Remedy | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [favorites, setFavorites] = useState<string[]>(() => {
    const saved = localStorage.getItem('healthAppFavorites');
    return saved ? JSON.parse(saved) : [];
  });

  const handleRemedySelect = (remedy: Remedy) => {
    setSelectedRemedy(remedy);
    setCurrentPage('remedy');
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage('category');
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentPage('search');
  };

  const handleNavigateHome = () => {
    setCurrentPage('home');
  };

  const handleNavigateSymptomChecker = () => {
    setCurrentPage('symptom-checker');
  };

  const handleNavigateFavorites = () => {
    setCurrentPage('favorites');
  };

  const toggleFavorite = (remedyId: string) => {
    setFavorites(prev => {
      const newFavorites = prev.includes(remedyId)
        ? prev.filter(id => id !== remedyId)
        : [...prev, remedyId];
      localStorage.setItem('healthAppFavorites', JSON.stringify(newFavorites));
      return newFavorites;
    });
  };

  return (
    <div className="App">
      <header className="app-header">
        <div className="header-content">
          <h1 onClick={handleNavigateHome} style={{ cursor: 'pointer' }}>
            🌿 Natural Health Remedies
          </h1>
          <nav className="main-nav">
            <button onClick={handleNavigateHome} className="nav-button">Home</button>
            <button onClick={handleNavigateSymptomChecker} className="nav-button">Symptom Checker</button>
            <button onClick={handleNavigateFavorites} className="nav-button">
              Favorites {favorites.length > 0 && `(${favorites.length})`}
            </button>
          </nav>
        </div>
      </header>

      <main className="app-main">
        {currentPage === 'home' && (
          <HomePage
            onRemedySelect={handleRemedySelect}
            onCategorySelect={handleCategorySelect}
            onSearch={handleSearch}
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
          />
        )}
        {currentPage === 'remedy' && selectedRemedy && (
          <RemedyDetail
            remedy={selectedRemedy}
            onBack={handleNavigateHome}
            isFavorite={favorites.includes(selectedRemedy.id)}
            onToggleFavorite={toggleFavorite}
          />
        )}
        {currentPage === 'category' && (
          <CategoryPage
            category={selectedCategory}
            onRemedySelect={handleRemedySelect}
            onBack={handleNavigateHome}
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
          />
        )}
        {currentPage === 'search' && (
          <SearchResults
            query={searchQuery}
            onRemedySelect={handleRemedySelect}
            onBack={handleNavigateHome}
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
          />
        )}
        {currentPage === 'symptom-checker' && (
          <SymptomChecker
            onRemedySelect={handleRemedySelect}
            onBack={handleNavigateHome}
          />
        )}
        {currentPage === 'favorites' && (
          <Favorites
            favorites={favorites}
            onRemedySelect={handleRemedySelect}
            onBack={handleNavigateHome}
            onToggleFavorite={toggleFavorite}
          />
        )}
      </main>

      <footer className="app-footer">
        <p>⚠️ Disclaimer: These remedies are for informational purposes only and are not a substitute for professional medical advice.</p>
        <p>Always consult with a healthcare provider before trying new treatments.</p>
      </footer>
    </div>
  );
}

export default App;
