import React, {useEffect, useCallback, useState} from 'react'
import {
  View,
  Animated,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native'

import ActionButtonItem, {ActionButtonItemProps} from './ActionButtonItem'

import {styles} from './styles'
import {alignMap} from './alignMap'
import {ActionButtonProps} from './types'

interface Item {
  Item: React.FC<ActionButtonItemProps>
}

type ActionButtonType<T = {}> = React.FC<T> & Item

let timeout: any

const ActionButton: ActionButtonType<ActionButtonProps> = ({
  active: act,
  bgColor,
  buttonColor,
  buttonTextColor,
  size,
  itemSize,
  autoInactive,
  onPress,
  onOverlayPress,
  onLongPress,
  backdrop,
  startDegree,
  endDegree,
  radius,
  children,
  position,
  outRangeScale,
  btnOutRange,
  degrees,
  icon,
  btnOutRangeTxt,
}) => {
  const [active, setActive] = useState(act ?? false)
  const animation = new Animated.Value(active ? 1 : 0)

  useEffect(() => clearTimeout(timeout))

  const getButtonSize = useCallback(() => {
    return {
      width: size,
      height: size,
    }
  }, [size])

  const getActionButtonStyle = useCallback(() => {
    return [styles.actionBarItem, getButtonSize()]
  }, [getButtonSize])

  const getActionContainerStyle = useCallback(() => {
    const {alignItems, justifyContent} = alignMap[position]
    return [
      styles.overlay,
      styles.actionContainer,
      {
        alignItems,
        justifyContent,
      },
    ]
  }, [position])

  const reset = useCallback(() => {
    Animated.spring(animation, {
      toValue: 0,
      useNativeDriver: false,
    }).start()

    setTimeout(() => {
      setActive(!active)
    }, 250)
  }, [active, animation])

  const animateButton = useCallback(() => {
    Animated.spring(animation, {
      toValue: active ? 0 : 1,
      useNativeDriver: false,
    }).start()

    setTimeout(() => {
      setActive(!active)
    }, 250)
  }, [active, animation])

  const renderButtonIcon = useCallback(() => {
    if (icon) {
      return icon
    }

    return (
      <Animated.Text
        style={[
          styles.btnText,
          {
            color: animation.interpolate({
              inputRange: [0, 1],
              outputRange: [buttonTextColor, btnOutRangeTxt],
            }),
          },
        ]}>
        +
      </Animated.Text>
    )
  }, [animation, btnOutRangeTxt, buttonTextColor, icon])

  const renderButton = useCallback(() => {
    return (
      <View style={getActionButtonStyle()}>
        <TouchableOpacity
          activeOpacity={0.85}
          onLongPress={onLongPress}
          onPress={() => {
            onPress()
            if (children) {
              animateButton()
            }
          }}>
          <Animated.View
            style={[
              styles.btn,
              {
                width: size,
                height: size,
                borderRadius: size / 2,
                backgroundColor: animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [buttonColor, btnOutRange],
                }),
                transform: [
                  {
                    scale: animation.interpolate({
                      inputRange: [0, 1],
                      outputRange: [1, outRangeScale],
                    }),
                  },
                  {
                    rotate: animation.interpolate({
                      inputRange: [0, 1],
                      outputRange: ['0deg', `${degrees}deg`],
                    }),
                  },
                ],
              },
            ]}>
            {renderButtonIcon()}
          </Animated.View>
        </TouchableOpacity>
      </View>
    )
  }, [
    animateButton,
    animation,
    btnOutRange,
    buttonColor,
    children,
    degrees,
    getActionButtonStyle,
    onLongPress,
    onPress,
    outRangeScale,
    renderButtonIcon,
    size,
  ])

  const renderActions = useCallback(() => {
    if (!active) return null
    const startDegreeIntern = startDegree || alignMap[position].startDegree
    const endDegreeIntern = endDegree || alignMap[position].endDegree

    const startRadian = (startDegreeIntern * Math.PI) / 180
    const endRadian = (endDegreeIntern * Math.PI) / 180

    const childrenCount = React.Children.count(children)
    let offset = 0
    if (childrenCount !== 1) {
      offset = (endRadian - startRadian) / (childrenCount - 1)
    }

    return React.Children.map(children, ({props}, index) => {
      return (
        <View pointerEvents="box-none" style={getActionContainerStyle()}>
          <ActionButtonItem
            key={index.toString()}
            // position={position}
            anim={animation}
            size={itemSize}
            radius={radius}
            angle={startRadian + index * offset}
            {...props}
            onPress={() => {
              if (autoInactive) {
                timeout = setTimeout(() => {
                  reset()
                }, 200)
              }
              props.onPress()
            }}
          />
        </View>
      )
    })
  }, [
    active,
    animation,
    autoInactive,
    children,
    endDegree,
    getActionContainerStyle,
    itemSize,
    position,
    radius,
    reset,
    startDegree,
  ])

  const mBackdrop = useCallback(() => {
    if (backdrop) {
      return (
        <TouchableWithoutFeedback
          style={styles.overlay}
          onPress={() => {
            reset()
            onOverlayPress()
          }}>
          <Animated.View
            style={{
              backgroundColor: bgColor,
              opacity: animation,
              flex: 1,
            }}>
            {backdrop}
          </Animated.View>
        </TouchableWithoutFeedback>
      )
    }
    return null
  }, [animation, backdrop, bgColor, onOverlayPress, reset])

  return (
    <View pointerEvents="box-none" style={styles.overlay}>
      {mBackdrop()}

      {children && renderActions()}
      <View pointerEvents="box-none" style={getActionContainerStyle()}>
        {renderButton()}
      </View>
    </View>
  )
}

ActionButton.Item = ActionButtonItem

ActionButton.defaultProps = {
  active: false,
  bgColor: 'transparent',
  buttonColor: '#f4a63d',
  buttonTextColor: 'rgba(255,255,255,1)',
  btnOutRange: '#3a2875',
  btnOutRangeTxt: 'rgba(255,255,255,1)',
  position: 'center',
  outRangeScale: 1,
  autoInactive: true,
  onPress: () => {},
  onOverlayPress: () => {},
  backdrop: false,
  degrees: 135,
  size: 63,
  itemSize: 36,
  radius: 100,
}

export default ActionButton
