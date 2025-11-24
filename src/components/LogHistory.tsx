import { FeelingLog } from '../types';
import { feelings } from '../data/feelings';
import './LogHistory.css';

interface LogHistoryProps {
  logs: FeelingLog[];
  onClose: () => void;
}

export default function LogHistory({ logs, onClose }: LogHistoryProps) {
  const sortedLogs = [...logs].sort((a, b) => b.timestamp - a.timestamp);

  const getFeeling = (feelingId: string) => {
    return feelings.find(f => f.id === feelingId);
  };

  return (
    <div className="log-history-overlay" onClick={onClose}>
      <div className="log-history-modal" onClick={(e) => e.stopPropagation()}>
        <div className="log-history-header">
          <h2>Your Feeling History</h2>
          <button onClick={onClose} className="close-btn">✕</button>
        </div>

        <div className="log-history-content">
          {sortedLogs.length === 0 ? (
            <p className="no-logs">No feelings logged yet. Start tracking your emotions today!</p>
          ) : (
            <div className="logs-list">
              {sortedLogs.map((log) => {
                const feeling = getFeeling(log.feelingId);
                const date = new Date(log.date);
                const isToday = date.toDateString() === new Date().toDateString();

                return (
                  <div key={log.id} className="log-item">
                    <div
                      className="log-feeling-indicator"
                      style={{ backgroundColor: feeling?.color || '#ccc' }}
                    />
                    <div className="log-details">
                      <div className="log-feeling-name">{log.feelingName}</div>
                      <div className="log-date">
                        {isToday ? 'Today' : date.toLocaleDateString('en-US', {
                          weekday: 'short',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </div>
                      {log.note && <div className="log-note">{log.note}</div>}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
