import React, { forwardRef } from 'react'
import R from '@/Resources'
import {
  StyleSheet,
  TextInput,
  TextStyle,
  TextInputProps,
  StyleProp,
  ViewStyle,
} from 'react-native'

import View from '../View'

interface InputProps extends TextInputProps {
  inputStyle?: StyleProp<TextStyle>
  inputContainerStyle?: StyleProp<ViewStyle>
}

export default forwardRef<TextInput, InputProps>(
  ({ inputStyle, inputContainerStyle, ...rest }: InputProps, ref) => {
    return (
      <View row middle style={[styles.container, inputContainerStyle]}>
        <TextInput
          ref={ref}
          style={[styles.input, inputStyle]}
          placeholderTextColor={R.color.placeholderTextColor}
          {...rest}
        />
      </View>
    )
  },
)

const styles = StyleSheet.create({
  container: {
    minHeight: 50,
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 10,
    borderColor: R.color.borderColor,
  },
  input: {
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderColor: '#F2F2F2',
    fontSize: 18,
    flex: 1,
    alignSelf: 'stretch',
    letterSpacing: 0.56,
    // lineHeight: 22,
    color: R.color.primaryText,
    fontFamily: R.font.muliRegular,
  },
})
