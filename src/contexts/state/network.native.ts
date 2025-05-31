import { addNetworkStateListener } from 'expo-network';

import { onlineManager } from '@tanstack/react-query';

export const setupNetworkStateListener = () => {
  const eventSubscription = addNetworkStateListener(state => {
    onlineManager.setOnline(!!state.isConnected);
  });
  return eventSubscription.remove;
};
