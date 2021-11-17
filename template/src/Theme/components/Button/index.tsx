import React from 'react'
import shorthand from 'react-native-styles-shorthand'
import {
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
} from 'react-native'

import R from '@/Resources'
import Text from '../Text'

type ButtonProps = {
  onPress: () => void
  label: string
  margin?: string
  padding?: string
  style?: ViewStyle
  primary?: boolean
  outline?: boolean
  secondary?: boolean
  labelStyle?: TextStyle
}

const Button = ({
  onPress,
  label,
  style,
  primary = true,
  secondary,
  outline,
  margin,
  padding,
  labelStyle,
}: ButtonProps) => {
  const spacing = shorthand({
    margin: { margin: margin || 0 },
    padding: { padding: padding || 0 },
  })
  const styleBlock = [
    margin && spacing.margin,
    padding && spacing.padding,
    primary && { backgroundColor: R.color.primary },
    secondary && { backgroundColor: '#F2F2F2' },
    outline && styles.outline,
    styles.container,
    style,
  ]
  return (
    <TouchableOpacity style={styleBlock} onPress={onPress}>
      <Text style={[styles.label, labelStyle]}>{label}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    minHeight: 56,
    borderRadius: 50,
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#FFD400',
  },
  label: {
    fontSize: 16,
    lineHeight: 17,
    textAlign: 'center',
    fontWeight: 'bold',
    color: R.color.white,
    letterSpacing: 0.5,
    fontFamily: R.font.muliBold,
  },
})

export default Button
