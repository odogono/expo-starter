import { useEffect, useRef } from 'react';

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
import { setupNetworkStateListener } from './network';
import { createPersister } from './storage';

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

export const StateProvider = ({ children }: { children: React.ReactNode }) => {
  const persisterRef = useRef(createPersister());

  useSyncQueries({ queryClient });

  useEffect(() => {
    const removeListener = setupNetworkStateListener();
    return () => {
      if (removeListener) removeListener();
    };
  }, []);

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
