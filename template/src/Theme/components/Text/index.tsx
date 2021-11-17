import React from 'react'
import shorthand from 'react-native-styles-shorthand'
import { Text, TextStyle, StyleSheet, StyleProp, TextProps } from 'react-native'

interface textProps extends TextProps {
  h2?: boolean
  size?: number
  link?: boolean
  bold?: Boolean
  color?: string
  margin?: string
  center?: boolean
  padding?: string
  uppercase?: boolean
  lineHeight?: number
  letterSpacing?: number
  fontFamily?: string
  underline?: boolean
  children: React.ReactNode
  style?: StyleProp<TextStyle>
}

export default ({
  h2,
  size,
  link,
  bold,
  color,
  style,
  center,
  margin,
  padding,
  children,
  uppercase,
  underline,
  fontFamily,
  lineHeight,
  letterSpacing,
  ...props
}: textProps) => {
  const spacing = shorthand({
    margin: { margin: margin || 0 },
    padding: { padding: padding || 0 },
  })
  const styleBlock = [
    h2 && styles.h2,
    link && styles.link,
    color && { color },
    bold && styles.bold,
    center && styles.center,
    margin && spacing.margin,
    padding && spacing.padding,
    size && { fontSize: size },
    fontFamily && { fontFamily },
    lineHeight && { lineHeight },
    letterSpacing && { letterSpacing },
    underline && styles.underline,
    uppercase && styles.uppercase,
    style && style,
  ]

  return (
    <Text style={styleBlock} {...props}>
      {children}
    </Text>
  )
}

const styles = StyleSheet.create({
  h2: {
    fontSize: 20,
    lineHeight: 24,
  },
  link: {
    color: '#336699',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  bold: { fontWeight: 'bold' },
  center: { textAlign: 'center' },
  uppercase: { textTransform: 'uppercase' },
  underline: { textDecorationLine: 'underline' },
})
