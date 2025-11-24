export const requestNotificationPermission = async (): Promise<boolean> => {
  if (!('Notification' in window)) {
    console.log('This browser does not support notifications');
    return false;
  }

  if (Notification.permission === 'granted') {
    return true;
  }

  if (Notification.permission !== 'denied') {
    const permission = await Notification.requestPermission();
    return permission === 'granted';
  }

  return false;
};

export const scheduleNotification = (time: string): void => {
  const [hours, minutes] = time.split(':').map(Number);
  const now = new Date();
  const scheduledTime = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    hours,
    minutes,
    0
  );

  if (scheduledTime <= now) {
    scheduledTime.setDate(scheduledTime.getDate() + 1);
  }

  const timeout = scheduledTime.getTime() - now.getTime();

  setTimeout(() => {
    showNotification();
    // Reschedule for next day
    scheduleNotification(time);
  }, timeout);
};

export const showNotification = (): void => {
  if (Notification.permission === 'granted') {
    new Notification('Feeling Logger Reminder', {
      body: 'How are you feeling today? Take a moment to check in with yourself.',
      icon: '/vite.svg',
      badge: '/vite.svg',
    });
  }
};
