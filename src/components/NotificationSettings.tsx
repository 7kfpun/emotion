import { useState, useEffect } from 'react';
import { NotificationSettings as NotificationSettingsType } from '../types';
import { getNotificationSettings, saveNotificationSettings } from '../utils/storage';
import { requestNotificationPermission, scheduleNotification } from '../utils/notifications';
import './NotificationSettings.css';

interface NotificationSettingsProps {
  onClose: () => void;
}

export default function NotificationSettings({ onClose }: NotificationSettingsProps) {
  const [settings, setSettings] = useState<NotificationSettingsType>(getNotificationSettings());
  const [permission, setPermission] = useState(Notification.permission);

  useEffect(() => {
    if (settings.enabled && permission === 'granted') {
      scheduleNotification(settings.time);
    }
  }, [settings, permission]);

  const handleToggle = async () => {
    if (!settings.enabled) {
      const granted = await requestNotificationPermission();
      if (granted) {
        setPermission('granted');
        const newSettings = { ...settings, enabled: true };
        setSettings(newSettings);
        saveNotificationSettings(newSettings);
      }
    } else {
      const newSettings = { ...settings, enabled: false };
      setSettings(newSettings);
      saveNotificationSettings(newSettings);
    }
  };

  const handleTimeChange = (time: string) => {
    const newSettings = { ...settings, time };
    setSettings(newSettings);
    saveNotificationSettings(newSettings);
  };

  return (
    <div className="notification-overlay" onClick={onClose}>
      <div className="notification-modal" onClick={(e) => e.stopPropagation()}>
        <div className="notification-header">
          <h2>Daily Reminders</h2>
          <button onClick={onClose} className="close-btn">✕</button>
        </div>

        <div className="notification-content">
          <div className="notification-item">
            <div className="notification-info">
              <h3>Enable Daily Notifications</h3>
              <p>Get a gentle reminder to log your feelings each day</p>
            </div>
            <label className="toggle-switch">
              <input
                type="checkbox"
                checked={settings.enabled}
                onChange={handleToggle}
              />
              <span className="toggle-slider"></span>
            </label>
          </div>

          {settings.enabled && (
            <div className="notification-item">
              <div className="notification-info">
                <h3>Notification Time</h3>
                <p>Choose when you'd like to receive your daily reminder</p>
              </div>
              <input
                type="time"
                value={settings.time}
                onChange={(e) => handleTimeChange(e.target.value)}
                className="time-input"
              />
            </div>
          )}

          {permission === 'denied' && (
            <div className="notification-warning">
              Notifications are blocked. Please enable them in your browser settings.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
