import React, { useState } from 'react';
import { remedies, allAilments, Remedy } from '../data/remedies';
import RemedyCard from './RemedyCard';
import './SymptomChecker.css';

interface SymptomCheckerProps {
  onRemedySelect: (remedy: Remedy) => void;
  onBack: () => void;
}

const SymptomChecker: React.FC<SymptomCheckerProps> = ({
  onRemedySelect,
  onBack
}) => {
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [favorites, setFavorites] = useState<string[]>(() => {
    const saved = localStorage.getItem('healthAppFavorites');
    return saved ? JSON.parse(saved) : [];
  });

  const toggleSymptom = (symptom: string) => {
    setSelectedSymptoms(prev =>
      prev.includes(symptom)
        ? prev.filter(s => s !== symptom)
        : [...prev, symptom]
    );
    setShowResults(false);
  };

  const handleCheckSymptoms = () => {
    setShowResults(true);
  };

  const handleReset = () => {
    setSelectedSymptoms([]);
    setShowResults(false);
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

  const matchingRemedies = remedies.filter(remedy =>
    selectedSymptoms.some(symptom =>
      remedy.ailments.some(ailment =>
        ailment.toLowerCase().includes(symptom.toLowerCase())
      )
    )
  ).sort((a, b) => {
    const aMatches = selectedSymptoms.filter(symptom =>
      a.ailments.some(ailment =>
        ailment.toLowerCase().includes(symptom.toLowerCase())
      )
    ).length;
    const bMatches = selectedSymptoms.filter(symptom =>
      b.ailments.some(ailment =>
        ailment.toLowerCase().includes(symptom.toLowerCase())
      )
    ).length;
    return bMatches - aMatches;
  });

  return (
    <div className="symptom-checker">
      <div className="symptom-header">
        <button onClick={onBack} className="back-button">← Back</button>
        <div>
          <h2>Symptom Checker</h2>
          <p>Select your symptoms to find suitable remedies</p>
        </div>
      </div>

      <div className="symptom-content">
        <section className="symptom-selection">
          <div className="selection-header">
            <h3>Select Your Symptoms</h3>
            {selectedSymptoms.length > 0 && (
              <button onClick={handleReset} className="reset-button">
                Clear All
              </button>
            )}
          </div>
          
          <div className="symptoms-grid">
            {allAilments.map(ailment => (
              <button
                key={ailment}
                className={`symptom-tag ${selectedSymptoms.includes(ailment) ? 'selected' : ''}`}
                onClick={() => toggleSymptom(ailment)}
              >
                {ailment}
              </button>
            ))}
          </div>

          {selectedSymptoms.length > 0 && (
            <div className="selected-symptoms">
              <h4>Selected Symptoms ({selectedSymptoms.length}):</h4>
              <div className="selected-list">
                {selectedSymptoms.map(symptom => (
                  <span key={symptom} className="selected-symptom">
                    {symptom}
                    <button
                      onClick={() => toggleSymptom(symptom)}
                      className="remove-symptom"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
              <button
                onClick={handleCheckSymptoms}
                className="check-button"
              >
                Find Remedies ({matchingRemedies.length})
              </button>
            </div>
          )}
        </section>

        {showResults && selectedSymptoms.length > 0 && (
          <section className="results-section">
            <h3>Recommended Remedies</h3>
            {matchingRemedies.length > 0 ? (
              <div className="remedies-grid">
                {matchingRemedies.map(remedy => (
                  <RemedyCard
                    key={remedy.id}
                    remedy={remedy}
                    onClick={() => onRemedySelect(remedy)}
                    isFavorite={favorites.includes(remedy.id)}
                    onToggleFavorite={toggleFavorite}
                  />
                ))}
              </div>
            ) : (
              <div className="no-results">
                <p>No remedies found for the selected symptoms.</p>
                <p>Try selecting different symptoms or consult a healthcare professional.</p>
              </div>
            )}
          </section>
        )}

        {!showResults && selectedSymptoms.length === 0 && (
          <div className="empty-state">
            <span className="empty-icon">🩺</span>
            <h3>Get Started</h3>
            <p>Select one or more symptoms above to find suitable home remedies.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SymptomChecker;
