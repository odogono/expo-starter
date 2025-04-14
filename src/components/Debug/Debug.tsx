import { StyleSheet, View } from 'react-native';

import { makeMutable } from 'react-native-reanimated';

import { ReText } from './ReText';

const debugMsg = makeMutable<string>('Hello');
const debugMsg2 = makeMutable<string>('World');
const debugMsg3 = makeMutable<string>('!');
const debugMsg4 = makeMutable<string>('4');
const debugMsg5 = makeMutable<string>('5');

export const setDebugMsg1 = (msg: string) => {
  'worklet';
  debugMsg.value = msg;
};
export const setDebugMsg2 = (msg: string) => {
  'worklet';
  debugMsg2.value = msg;
};
export const setDebugMsg3 = (msg: string) => {
  'worklet';
  debugMsg3.value = msg;
};
export const setDebugMsg4 = (msg: string) => {
  'worklet';
  debugMsg4.value = msg;
};
export const setDebugMsg5 = (msg: string) => {
  'worklet';
  debugMsg5.value = msg;
};

export const Debug = () => (
    <View style={styles.container}>
      <ReText style={styles.debugText} text={debugMsg} />
      <ReText style={styles.debugText} text={debugMsg2} />
      <ReText style={styles.debugText} text={debugMsg3} />
      <ReText style={styles.debugText} text={debugMsg4} />
      <ReText style={styles.debugText} text={debugMsg5} />
    </View>
  );

const styles = StyleSheet.create({
  container: {
    bottom: 46,
    position: 'absolute',
    width: '80%'
  },
  debugText: {
    color: '#fff'
  }
});
