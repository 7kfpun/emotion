import { useState } from 'react';
import { helpTexts } from '../data/feelings';
import './HelpTooltip.css';

export default function HelpTooltip() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="help-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Help"
      >
        ?
      </button>

      {isOpen && (
        <div className="help-overlay" onClick={() => setIsOpen(false)}>
          <div className="help-modal" onClick={(e) => e.stopPropagation()}>
            <div className="help-header">
              <h2>How to Use</h2>
              <button onClick={() => setIsOpen(false)} className="close-btn">✕</button>
            </div>

            <div className="help-content">
              {Object.entries(helpTexts).map(([key, text]) => (
                <div key={key} className="help-item">
                  <h3>{key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}</h3>
                  <p>{text}</p>
                </div>
              ))}

              <div className="help-item">
                <h3>Tips</h3>
                <ul>
                  <li>Log your feelings daily to track patterns over time</li>
                  <li>There's no right or wrong feeling - all emotions are valid</li>
                  <li>Use the search if you're having trouble finding the perfect word</li>
                  <li>Enable notifications to build a consistent tracking habit</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
