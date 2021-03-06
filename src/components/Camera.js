import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View
} from 'react-native'
import Camera from 'react-native-camera'
import ImagePicker from 'react-native-image-picker'

class NativeCamera extends Component {
  state = { avatarSource: '' }

  render () {
    return (
      <View style={styles.container}>
        {/* <Camera
          ref={(cam) => {
            this.camera = cam
          }}
          style={styles.preview}
          type="front"
          aspect={Camera.constants.Aspect.fill}>
          <Text style={styles.capture} onPress={this.takePicture.bind(this)}>[CAPTURE]</Text>
        </Camera> */}
      </View>
    )
  }

  takePicture () {
    this.camera.capture()
      .then((data) => console.log(data))
      .catch(err => console.error(err))
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
})

export default NativeCamera
