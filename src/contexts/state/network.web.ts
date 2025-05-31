import { onlineManager } from '@tanstack/react-query';

export const setupNetworkStateListener = () => {
  const handleOnline = () => onlineManager.setOnline(true);
  const handleOffline = () => onlineManager.setOnline(false);

  window.addEventListener('online', handleOnline);
  window.addEventListener('offline', handleOffline);

  // Set initial state
  onlineManager.setOnline(navigator.onLine);

  return () => {
    window.removeEventListener('online', handleOnline);
    window.removeEventListener('offline', handleOffline);
  };
};
