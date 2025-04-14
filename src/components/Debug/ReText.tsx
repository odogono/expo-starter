// from https://github.com/wcandillon/react-native-redash/blob/master/src/ReText.tsx
import React from 'react';
import {
  StyleSheet,
  TextInput,
  type TextProps as RNTextProps
} from 'react-native';

import Animated, {
  AnimatedProps,
  SharedValue,
  useAnimatedProps
} from 'react-native-reanimated';

const styles = StyleSheet.create({
  baseStyle: {
    color: 'black'
  }
});

Animated.addWhitelistedNativeProps({ text: true });

type TextProps = {
  style?: AnimatedProps<RNTextProps>['style'];
  text: SharedValue<string>;
}

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

export const ReText = (props: TextProps) => {
  const { style, text } = { style: {}, ...props };
  const animatedProps = useAnimatedProps(() => ({
      text: text.value
      // Here we use any because the text prop is not available in the type
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any));
  return (
    <AnimatedTextInput
      editable={false}
      style={[styles.baseStyle, style]}
      underlineColorAndroid='transparent'
      value={text.value}
      {...{ animatedProps }}
    />
  );
};
