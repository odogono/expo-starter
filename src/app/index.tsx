import { Text, View } from 'react-native';

import { StatusBar } from 'expo-status-bar';

import { StateProvider } from '@contexts/state/provider';

export default function Home() {
  return (
    <StateProvider>
      <View className='flex-1 bg-white dark:bg-gray-900'>
        <StatusBar style='auto' />
        <View className='flex-1 items-center justify-center space-y-4 px-4'>
          <View className='rounded-2xl bg-blue-100 p-8 shadow-lg dark:bg-blue-900'>
            <Text className='text-center text-4xl font-bold text-blue-600 dark:text-blue-400'>
              ODGN Expo Starter
            </Text>
            <Text className='mt-2 text-center text-lg text-gray-600 dark:text-gray-300'>
              The next great app starts there
            </Text>
          </View>
        </View>
      </View>
    </StateProvider>
  );
}
