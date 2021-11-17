import R from '@/Resources'
import React, { useState } from 'react'
import { Picker } from '@react-native-picker/picker'
import {
  StyleSheet,
  TextStyle,
  TextInputProps,
  StyleProp,
  ViewProps,
  View,
} from 'react-native'

interface InputProps extends TextInputProps {
  inputStyle?: StyleProp<TextStyle>
  inputContainerStyle?: StyleProp<ViewProps>
}

export default ({ inputStyle, inputContainerStyle }: InputProps) => {
  const [selectedLanguage, setSelectedLanguage] = useState()
  return (
    <View style={[styles.container, inputContainerStyle]}>
      <Picker
        dropdownIconColor={R.color.primaryButtonColor}
        selectedValue={selectedLanguage}
        style={[styles.input, inputStyle]}
        onValueChange={setSelectedLanguage}
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    minHeight: 50,
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
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
    lineHeight: 22,
    color: R.color.primaryText,
    fontFamily: R.font.muliRegular,
  },
})
