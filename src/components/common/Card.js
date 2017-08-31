import React from 'react'
import { View } from 'react-native'

const Card = ({ children, style }) => {
  return (
    <View style={[styles.containerStyle, style]}>
      {children}
    </View>
  )
}

const styles = {
  containerStyle: {
    borderRadius: 2,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1
  }
}

export { Card }
