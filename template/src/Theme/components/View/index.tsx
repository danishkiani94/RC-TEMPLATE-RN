import React from 'react'
import shorthand from 'react-native-styles-shorthand'
import {
  View,
  StyleSheet,
  StyleProp,
  ViewStyle,
  SafeAreaView,
  ViewProps,
} from 'react-native'

export interface viewProps extends ViewProps {
  safe?: boolean
  row?: boolean
  wrap?: boolean
  margin?: string
  center?: boolean
  middle?: boolean
  shadow?: boolean
  padding?: string
  stretch?: boolean
  borderRadius?: number
  style?: StyleProp<ViewStyle>
  flex?: number | boolean
  justifyContent?: String
  backgroundColor?: string
  children?: React.ReactNode
}

export default ({
  row,
  flex,
  wrap,
  safe,
  style,
  middle,
  center,
  margin,
  shadow,
  padding,
  stretch,
  children,
  borderRadius,
  justifyContent,
  backgroundColor,
  ...props
}: viewProps) => {
  const spacing = shorthand({
    margin: { margin: margin || 0 },
    padding: { padding: padding || 0 },
  })
  const finalStyle = [
    row && styles.row,
    wrap && styles.wrap,
    middle && styles.middle,
    center && styles.center,
    stretch && styles.stretch,
    shadow && styles.shadow,
    margin && spacing.margin,
    padding && spacing.padding,
    borderRadius && { borderRadius },
    justifyContent && { justifyContent },
    backgroundColor && { backgroundColor },
    flex && { flex: flex === true ? 1 : flex },
    style,
  ]

  const Block = safe ? SafeAreaView : View
  return (
    <Block style={finalStyle} {...props}>
      {children}
    </Block>
  )
}

const styles = StyleSheet.create({
  wrap: { flexWrap: 'wrap' },
  row: { flexDirection: 'row' },
  middle: { alignItems: 'center' },
  stretch: { alignSelf: 'stretch' },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  shadow: {
    shadowColor: 'rgba(23, 64, 107, 0.2)',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 1,
  },
})
