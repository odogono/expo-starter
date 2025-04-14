import { useRef } from 'react';

import { addNetworkStateListener } from 'expo-network';
import { createStore } from 'jotai';
import { Provider as JotaiProvider } from 'jotai/react';
import { useSyncQueries } from 'tanstack-query-dev-tools-expo-plugin';

import { INFINITY, ONE_DAY } from '@helpers/time';
import {
  QueryClient,
  QueryClientProvider,
  onlineManager
} from '@tanstack/react-query';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import { createSqlitePersister } from './storage';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: ONE_DAY,
      staleTime: INFINITY
    }
  }
});

// create the Jotai store
export const store = createStore();

onlineManager.setEventListener(setOnline => {
  const eventSubscription = addNetworkStateListener(state => {
    setOnline(!!state.isConnected);
  });
  return eventSubscription.remove;
});

export const StateProvider = ({ children }: { children: React.ReactNode }) => {
  const persisterRef = useRef(createSqlitePersister());

  useSyncQueries({ queryClient });

  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{
        persister: persisterRef.current
      }}
    >
      <QueryClientProvider client={queryClient}>
        <JotaiProvider store={store}>{children}</JotaiProvider>
      </QueryClientProvider>
    </PersistQueryClientProvider>
  );
};
