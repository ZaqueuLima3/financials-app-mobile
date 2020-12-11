import React, {
  useState,
  useCallback,
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef,
} from 'react'
import {TextInputProperties} from 'react-native'
import {useField} from '@unform/core'

import {Container, TextInput, Icon} from './styles'
import {useColors} from '../../hooks/theme'

interface InputProps extends TextInputProperties {
  name: string
  icon: string
  containerStyle?: {}
}

interface InputValueReference {
  value: string
}

interface InputRef {
  focus(): void
}

const Input: React.RefForwardingComponent<InputRef, InputProps> = (
  {name, icon, containerStyle = {}, ...rest},
  ref,
) => {
  const inputElementRef = useRef<any>(null)
  const {colors} = useColors()
  const {registerField, fieldName, defaultValue = '', error} = useField(name)
  const inputValueRef = useRef<InputValueReference>({value: defaultValue})

  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)

  const handleInputFocus = useCallback(() => {
    setIsFocused(true)
  }, [])

  const handleInputBlur = useCallback(() => {
    setIsFocused(false)

    setIsFilled(!!inputValueRef.current.value)
  }, [])

  useImperativeHandle(ref, () => ({
    focus() {
      inputElementRef.current?.focus()
    },
  }))

  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
      setValue(reference: any, value) {
        inputValueRef.current.value = value
        inputElementRef.current.setNativeProps({text: value})
      },
      clearValue() {
        inputValueRef.current.value = ''
        inputElementRef.current.clear()
      },
    })
  }, [fieldName, registerField])

  return (
    <Container
      colors={colors}
      style={containerStyle}
      isFocused={isFocused}
      hasError={!!error}>
      <Icon
        name={icon}
        size={20}
        color={isFocused || isFilled ? colors.primary : colors.text}
      />

      <TextInput
        ref={inputElementRef}
        color={colors.text}
        placeholderTextColor={colors.mediumGrey}
        defaultValue={defaultValue}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        onChangeText={(value) => {
          inputValueRef.current.value = value
        }}
        {...rest}
      />
    </Container>
  )
}

export default forwardRef(Input)
