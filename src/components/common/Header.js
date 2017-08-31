import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

const Header = ({ headerText, style }) => {
  const { textStyle, viewStyle } = styles
  return (
    <View style={[viewStyle, style]}>
      <TouchableOpacity>
        <Text>{headerText}</Text>
      </TouchableOpacity>
      <Text style={textStyle}>{headerText}</Text>
      <TouchableOpacity>
        <Text>{headerText}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = {
  viewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#3bbeb8',
    height: 60,
    paddingTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
}

export { Header }
