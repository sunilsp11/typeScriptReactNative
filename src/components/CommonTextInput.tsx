import { View, Text, TextInput } from 'react-native'
import React from 'react'

type InputProps={
    placeholder: string,
    value: string,
    onChangeText: any,
    keyBoardType: string,
    maxLength: number,
disabled: boolean,
valid: boolean
}

const CommonTextInput = ({
    placeholder,
    value,
    onChangeText,
    keyBoardType,
    maxLength,
disabled,
valid
}:InputProps) => {
  return (
    <View
      style={{
        width: '90%',
        height: 50,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: valid ? '#9eee' : 'red',
        marginTop: 10
      }}>
      <TextInput
        keyboardType={keyBoardType}
        placeholder={placeholder}
        value={value}
        onChangeText={text => onChangeText(text)}
        editable={!disabled}
        maxLength={maxLength}
      />

  
    </View>
  )
}

export default CommonTextInput