import React from 'react'
import { TextInput, View, Text } from 'react-native'

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry, style, autoFocus, onChange }) => {
  const { inputStyle, labelStyle, containerStyle } = styles

  return (
    <View style={[containerStyle, style]}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        autoFocus={autoFocus}
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
        onChange={onChange}
      />
    </View>
  )
}

const styles = {
  inputStyle: {
    color: '#686868',
    paddingBottom: 10,
    marginLeft: 35,
    marginRight: 35,
    lineHeight: 23,
    borderBottomWidth: 1,
    borderColor: '#b3b2b4',
    fontSize: 20
  },
  labelStyle: {
    color: '#b3b2b4',
    fontFamily: 'HelveticaNeue-Bold',
    fontSize: 14,
    paddingLeft: 35,
    paddingBottom: 8
  },
  containerStyle: {
    height: 40
  }
}

export { Input }
