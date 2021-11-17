import { Dimensions, StyleSheet } from 'react-native'
import colors from '../colors'

const { width, height } = Dimensions.get('window')

export default StyleSheet.create({
  // global styles
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  divider: {
    height: 1,
    alignSelf: 'stretch',
    backgroundColor: colors.divider,
  },
  loading: {
    width: width,
    elevation: 10,
    height: height,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgBackground: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
