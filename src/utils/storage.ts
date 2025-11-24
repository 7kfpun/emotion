import { FeelingLog, NotificationSettings } from '../types';

const LOGS_KEY = 'feeling_logs';
const SETTINGS_KEY = 'notification_settings';

export const saveFeelingLog = (log: FeelingLog): void => {
  const logs = getFeelingLogs();
  logs.push(log);
  localStorage.setItem(LOGS_KEY, JSON.stringify(logs));
};

export const getFeelingLogs = (): FeelingLog[] => {
  const logs = localStorage.getItem(LOGS_KEY);
  return logs ? JSON.parse(logs) : [];
};

export const getTodaysLog = (): FeelingLog | null => {
  const logs = getFeelingLogs();
  const today = new Date().toDateString();
  return logs.find(log => new Date(log.date).toDateString() === today) || null;
};

export const getNotificationSettings = (): NotificationSettings => {
  const settings = localStorage.getItem(SETTINGS_KEY);
  return settings ? JSON.parse(settings) : { enabled: false, time: '20:00' };
};

export const saveNotificationSettings = (settings: NotificationSettings): void => {
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
};

export const getStreakDays = (): number => {
  const logs = getFeelingLogs();
  if (logs.length === 0) return 0;

  const sortedLogs = logs.sort((a, b) => b.timestamp - a.timestamp);
  let streak = 0;
  let currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);

  for (const log of sortedLogs) {
    const logDate = new Date(log.date);
    logDate.setHours(0, 0, 0, 0);

    if (logDate.getTime() === currentDate.getTime()) {
      streak++;
      currentDate.setDate(currentDate.getDate() - 1);
    } else if (logDate.getTime() < currentDate.getTime()) {
      break;
    }
  }

  return streak;
};
