import React from 'react'
import { TouchableOpacity } from 'react-native'

const Button = ({ style, onPress, children }) => {
  const { buttonStyle } = styles

  return (
    <TouchableOpacity style={[buttonStyle, style]} onPress={onPress}>
      {children}
    </TouchableOpacity>
  )
}

const styles = {
  buttonStyle: {
    width: 100,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#fff',
    position: 'absolute',
    top: 300,
    right: 15
  }
}

export { Button }
