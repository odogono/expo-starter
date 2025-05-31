import SuperJSON from 'superjson';

import {
  PersistedClient,
  Persister
} from '@tanstack/react-query-persist-client';

export const createPersister = (key: string = 'reactQuery'): Persister => {
  return {
    persistClient: async (client: PersistedClient) => {
      localStorage.setItem(key, SuperJSON.stringify(client));
    },
    removeClient: async () => {
      localStorage.removeItem(key);
    },
    restoreClient: async () => {
      const client = localStorage.getItem(key);
      return client ? SuperJSON.parse(client) : undefined;
    }
  };
};
