import { StyleSheet, Text, View } from 'react-native';

import { StatusBar } from 'expo-status-bar';

import { StateProvider } from '@contexts/state/provider';

export default function Home() {
  return (
    <StateProvider>
      <View style={styles.container}>
        <StatusBar style='auto' />
        <View style={styles.content}>
          <View style={styles.card}>
            <Text style={styles.title}>ODGN Expo Starter</Text>
            <Text style={styles.subtitle}>The next great app starts there</Text>
          </View>
        </View>
      </View>
    </StateProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff' // white
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16, // px-4 equivalent
    gap: 16 // space-y-4 equivalent
  },
  card: {
    borderRadius: 16, // rounded-2xl equivalent
    backgroundColor: '#dbeafe', // bg-blue-100 equivalent
    padding: 32, // p-8 equivalent
    boxShadow: '0px 2px 3.84px rgba(0, 0, 0, 0.25)',
    elevation: 5 // shadow-lg equivalent for Android
  },
  title: {
    textAlign: 'center',
    fontSize: 36, // text-4xl equivalent
    fontWeight: 'bold',
    color: '#2563eb' // text-blue-600 equivalent
  },
  subtitle: {
    marginTop: 8, // mt-2 equivalent
    textAlign: 'center',
    fontSize: 18, // text-lg equivalent
    color: '#4b5563' // text-gray-600 equivalent
  }
});
