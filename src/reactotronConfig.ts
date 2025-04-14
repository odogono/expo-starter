import Reactotron from 'reactotron-react-native';

Reactotron.configure({
  name: 'ODGN Expo Starter'
})
  .useReactNative({
    editor: false,
    errors: { veto: stackFrame => false },
    networking: {
      ignoreUrls: /symbolicate|127.0.0.1/
    },
    overlay: false
  })
  .connect();
