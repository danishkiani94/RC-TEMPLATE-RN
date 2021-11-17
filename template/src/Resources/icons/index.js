import React, { Component } from 'react'
import { Easing, Animated } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons'
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'

const color = 'black'

export const BellIcon = props => <Icon name="bell" color={color} {...props} />

export const ChevronLeftIcon = props => (
  <Icon name="chevron-left" color={color} {...props} />
)
export const ChevronRightIcon = props => (
  <Icon name="chevron-right" color={color} {...props} />
)

export const ChevronCircleUpIcon = props => (
  <Icon name="chevron-circle-up" color={color} {...props} />
)
export const ChevronCircleDownIcon = props => (
  <Icon name="chevron-circle-down" color={color} {...props} />
)

export const ArrowLeftIcon = props => (
  <Icon name="arrow-left" color={color} {...props} />
)
export const ArrowRightIcon = props => (
  <Icon name="arrow-right" color={color} {...props} />
)
export const SignOutIcon = props => (
  <SimpleIcon name="logout" color={color} {...props} />
)
export const CheckCircle = props => (
  <Icon name="check-circle" color={color} {...props} />
)
export const CalendarIcon = props => (
  <Icon name="calendar" color={color} {...props} />
)

export const DeleteIcon = props => (
  <MaterialCommunityIcon name="delete" size={35} color={'red'} {...props} />
)

export const DoubleRight = props => (
  <Icon name="angle-double-right" color={color} {...props} />
)

export class IconSpinner extends Component {
  spinValue = new Animated.Value(0)

  componentDidMount() {
    this.spin()
  }

  spin = () => {
    this.spinValue.setValue(0)

    Animated.timing(this.spinValue, {
      toValue: 1,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => this.spin())
  }

  render() {
    const { style } = this.props
    const rotate = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    })

    return (
      <Animated.View style={{ transform: [{ rotate }] }}>
        <Icon
          style={style}
          name={this.props.name || 'spinner'}
          {...this.props}
        />
      </Animated.View>
    )
  }
}

const icons = {}
export default icons
