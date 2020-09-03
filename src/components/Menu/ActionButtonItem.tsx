import React from 'react'
import {StyleSheet, View, Animated, TouchableOpacity} from 'react-native'

const styles = StyleSheet.create({
  actionButton: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: 2,
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: '#444',
    shadowRadius: 1,
    backgroundColor: 'red',
    position: 'absolute',
    zIndex: 9999,
  },
})

export interface ActionButtonItemProps {
  angle?: number
  radius?: number
  size?: number
  buttonColor?: string
  onPress(): void
  startDegree?: number
  endDegree?: number
  anim?: Animated.Value
  activeOpacity?: number
}

const ActionButtonItem: React.FC<ActionButtonItemProps> = ({
  angle,
  radius,
  buttonColor,
  onPress,
  children,
  startDegree,
  endDegree,
  size,
  anim,
  activeOpacity,
}) => {
  const offsetX = radius * Math.cos(angle)
  const offsetY = radius * Math.sin(angle)

  return (
    <Animated.View
      style={[
        {
          opacity: anim,
          width: 60,
          height: 60,
          transform: [
            {
              translateY: anim.interpolate({
                inputRange: [0, 1],
                outputRange: [0, offsetY],
              }),
            },
            {
              translateX: anim.interpolate({
                inputRange: [0, 1],
                outputRange: [0, offsetX],
              }),
            },
            {
              rotate: anim.interpolate({
                inputRange: [0, 1],
                outputRange: [`${startDegree}deg`, `${endDegree}deg`],
              }),
            },
            {
              scale: anim.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1],
              }),
            },
          ],
        },
      ]}>
      <TouchableOpacity
        style={{flex: 1}}
        activeOpacity={activeOpacity || 0.85}
        onPress={onPress}>
        <View
          style={[
            styles.actionButton,
            {
              width: 60,
              height: 60,
              borderRadius: 60 / 2,
              backgroundColor: buttonColor,
            },
          ]}>
          {children}
        </View>
      </TouchableOpacity>
    </Animated.View>
  )
}

ActionButtonItem.defaultProps = {
  onPress: () => {},
  startDegree: 0,
  endDegree: 720,
}

export default ActionButtonItem
