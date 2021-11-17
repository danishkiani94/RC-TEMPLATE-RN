import React from 'react'
import R from '@/Resources'
import { ActivityIndicator } from 'react-native'

import Text from '../Text'
import View, { viewProps } from '../View'

type LoadingProps = viewProps & {
  title?: string
  indicatorColor?: 'black' | 'white'
}

export default ({
  title,
  indicatorColor = 'black',
  ...props
}: LoadingProps) => (
  <View style={R.style.loading} {...props}>
    <ActivityIndicator size="large" color={indicatorColor} />
    {title && <Text>{title}</Text>}
  </View>
)
