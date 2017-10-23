import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  AsyncStorage,
  StyleSheet
} from 'react-native'
import { Spinner } from 'components/common'
import { Actions } from 'react-native-router-flux'
import { getHomeCategory } from 'actions'

class MainScene extends Component {
  state = { firstName: '' }

  componentDidMount () {
    AsyncStorage.getItem('firstName')
      .then(firstName => {
        this.setState({ firstName })
      })
    AsyncStorage.getItem('api')
      .then(res => console.log(res))
    this.props.getHomeCategory()
  }

  render () {
    const { container } = styles
    const { home } = this.props

    if (!home) { return <Spinner/> }

    return (
      <View style={container}>
        <StatusBar barStyle="light-content"/>
        <View>
          <TouchableOpacity onPress={() => Actions.renterStuffNonMotor({ title: 'Aktivitas Outdoor', id: home.categories[0].id_category })}>
            <Text>Peralatan Outdoor</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Motor</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Actions.renterStuffNonMotor({ title: 'Kamera', id: home.categories[1].id_category })}>
            <Text>Kamera</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Kategori Lainnya</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#fff'
  }
})

const mapStateToProps = ({ auth, renter }) => {
  const { user } = auth
  const { home } = renter

  return { user, home }
}

export default connect(mapStateToProps, { getHomeCategory })(MainScene)
