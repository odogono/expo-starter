import { Platform } from 'react-native';

import { documentDirectory } from 'expo-file-system';
import SuperJSON from 'superjson';

import { IOS_DOCUMENT_PATH, Storage } from '@op-engineering/op-sqlite';
import {
  PersistedClient,
  Persister
} from '@tanstack/react-query-persist-client';

export const getDBPath = () =>
  Platform.OS === 'ios' ? IOS_DOCUMENT_PATH : documentDirectory;

export const createPersister = (key: string = 'reactQuery'): Persister => {
  const storage = new Storage({
    location: getDBPath()
  });

  return {
    persistClient: async (client: PersistedClient) => {
      await storage.setItem(key, SuperJSON.stringify(client));
    },
    removeClient: async () => {
      await storage.removeItem(key);
    },
    restoreClient: async () => {
      const client = await storage.getItem(key);
      return client ? SuperJSON.parse(client) : undefined;
    }
  };
};
