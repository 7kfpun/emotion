import { useState, useEffect } from 'react';
import { Feeling, FeelingLog } from './types';
import { encouragingMessages } from './data/feelings';
import { getFeelingLogs, saveFeelingLog, getTodaysLog, getStreakDays } from './utils/storage';
import FeelingsGrid from './components/FeelingsGrid';
import SearchBar from './components/SearchBar';
import LogHistory from './components/LogHistory';
import NotificationSettings from './components/NotificationSettings';
import HelpTooltip from './components/HelpTooltip';
import './App.css';

function App() {
  const [selectedFeeling, setSelectedFeeling] = useState<Feeling | undefined>();
  const [searchQuery, setSearchQuery] = useState('');
  const [logs, setLogs] = useState<FeelingLog[]>([]);
  const [showHistory, setShowHistory] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [todaysLog, setTodaysLog] = useState<FeelingLog | null>(null);
  const [encouragement, setEncouragement] = useState('');
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    setLogs(getFeelingLogs());
    setTodaysLog(getTodaysLog());
    setStreak(getStreakDays());
  }, []);

  const handleSelectFeeling = (feeling: Feeling) => {
    setSelectedFeeling(feeling);
  };

  const handleLogFeeling = () => {
    if (!selectedFeeling) return;

    const log: FeelingLog = {
      id: `${Date.now()}-${selectedFeeling.id}`,
      date: new Date().toISOString(),
      feelingId: selectedFeeling.id,
      feelingName: selectedFeeling.name,
      timestamp: Date.now(),
    };

    saveFeelingLog(log);
    const updatedLogs = getFeelingLogs();
    setLogs(updatedLogs);
    setTodaysLog(log);
    setStreak(getStreakDays());

    // Show success message with encouragement
    const randomMessage = encouragingMessages[Math.floor(Math.random() * encouragingMessages.length)];
    setEncouragement(randomMessage);
    setShowSuccess(true);

    setTimeout(() => {
      setShowSuccess(false);
      setSelectedFeeling(undefined);
    }, 3000);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="app-title">Feeling Logger</h1>
        <p className="app-subtitle">How are you feeling today?</p>
        {streak > 0 && (
          <div className="streak-badge">
            🔥 {streak} day{streak !== 1 ? 's' : ''} streak!
          </div>
        )}
      </header>

      <main className="app-main">
        <SearchBar value={searchQuery} onChange={setSearchQuery} />

        <FeelingsGrid
          onSelect={handleSelectFeeling}
          selectedFeeling={selectedFeeling}
          searchQuery={searchQuery}
        />

        {selectedFeeling && (
          <div className="selection-panel">
            <div className="selected-feeling">
              <div
                className="selected-feeling-color"
                style={{ backgroundColor: selectedFeeling.color }}
              />
              <div className="selected-feeling-info">
                <h3>{selectedFeeling.name}</h3>
                <p>{selectedFeeling.description}</p>
              </div>
            </div>

            {todaysLog ? (
              <div className="already-logged">
                <p>You've already logged your feeling today!</p>
                <p className="small">
                  Today you felt: <strong>{todaysLog.feelingName}</strong>
                </p>
              </div>
            ) : (
              <button
                className="log-button"
                onClick={handleLogFeeling}
              >
                Log This Feeling
              </button>
            )}
          </div>
        )}

        {showSuccess && (
          <div className="success-message">
            <div className="success-content">
              <div className="success-icon">✓</div>
              <h3>Feeling Logged!</h3>
              <p>{encouragement}</p>
            </div>
          </div>
        )}
      </main>

      <footer className="app-footer">
        <button
          className="footer-button"
          onClick={() => setShowHistory(true)}
        >
          📊 History ({logs.length})
        </button>
        <button
          className="footer-button"
          onClick={() => setShowNotifications(true)}
        >
          🔔 Reminders
        </button>
      </footer>

      {showHistory && (
        <LogHistory logs={logs} onClose={() => setShowHistory(false)} />
      )}

      {showNotifications && (
        <NotificationSettings onClose={() => setShowNotifications(false)} />
      )}

      <HelpTooltip />
    </div>
  );
}

export default App;
