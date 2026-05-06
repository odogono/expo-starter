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
  card: {
    backgroundColor: '#dbeafe', // bg-blue-100 equivalent
    borderRadius: 16, // rounded-2xl equivalent
    boxShadow: '0px 2px 3.84px rgba(0, 0, 0, 0.25)',
    elevation: 5, // shadow-lg equivalent for Android
    padding: 32 // p-8 equivalent
  },
  container: {
    backgroundColor: '#ffffff', // white
    flex: 1
  },
  content: {
    alignItems: 'center',
    flex: 1,
    gap: 16, // space-y-4 equivalent
    justifyContent: 'center',
    paddingHorizontal: 16 // px-4 equivalent
  },
  subtitle: {
    color: '#4b5563', // text-gray-600 equivalent
    fontSize: 18, // text-lg equivalent
    marginTop: 8, // mt-2 equivalent
    textAlign: 'center'
  },
  title: {
    color: '#2563eb', // text-blue-600 equivalent
    fontSize: 36, // text-4xl equivalent
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
