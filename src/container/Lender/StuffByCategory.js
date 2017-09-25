import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  TouchableHighlight,
  StyleSheet
} from 'react-native'
import { Actions } from 'react-native-router-flux'
import {
  LazyloadScrollView,
  LazyloadView,
  LazyloadImage
} from 'react-native-lazyload'
import { Spinner } from 'components/common'
import { getStuffByCategory, refreshContent } from 'actions'

class StuffByCategory extends Component {
  state = { loading: true }

  componentDidMount () {
    this.props.getStuffByCategory(this.props.id)
  }

  componentWillUnmount () {
    this.props.refreshContent()
  }

  onLoadStart () {
    this.setState({ loading: true })
  }

  renderListOfStuff () {
    const { stuffs } = this.props.allStuff
    const {
      containerStuff,
      imageStyle,
      textStyle,
      footerText,
      containerButtonSewa,
      buttonSewa,
      textButton
    } = styles

    return stuffs.map(stuff => {
      return (
        <View key={stuff.id_stuff} style={containerStuff}>
          <LazyloadImage host="lazyload">
            <ImageBackground style={imageStyle} source={{ uri: stuff.stuff_photo }}>
              <View style={containerButtonSewa}>
                <TouchableHighlight style={buttonSewa} activeOpacity={1} underlayColor="#eee" onPress={() => Actions.createNewLending({ title: 'Listing' })}>
                  <Text style={textButton}>Sewakan</Text>
                </TouchableHighlight>
              </View>
            </ImageBackground>
          </LazyloadImage>
          <Text style={textStyle}>{stuff.stuff_name}</Text>
          <Text style={footerText}>{stuff.n_renter} lender</Text>
        </View>
      )
    })
  }

  render () {
    const {
      container,
      containerContent
    } = styles

    if (!this.props.allStuff) { return <Spinner /> }

    return (
      <LazyloadScrollView name="lazyload">
        <View style={container}>
          <View style={containerContent}>
            {this.renderListOfStuff()}
          </View>
        </View>
      </LazyloadScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
    paddingLeft: 15,
    paddingRight: 15
  },
  containerContent: {
    paddingRight: 10,
    paddingLeft: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  containerStuff: {
    paddingBottom: 15
  },
  imageStyle: {
    width: 150,
    height: 150
  },
  textStyle: {
    fontSize: 14,
    paddingTop: 5,
    fontFamily: 'Helvetica Neue'
  },
  footerText: {
    fontSize: 11,
    paddingTop: 5,
    fontFamily: 'Helvetica Neue',
    color: '#3bbeb8'
  },
  containerButtonSewa: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 10
  },
  buttonSewa: {
    padding: 10,
    backgroundColor: '#3bbeb8',
    borderRadius: 20
  },
  textButton: {
    fontFamily: 'Helvetica Neue',
    textAlign: 'center',
    color: '#fff'
  }
})

const mapStateToProps = ({ categories }) => {
  const { allStuff } = categories

  return { allStuff }
}

export default connect(mapStateToProps, { getStuffByCategory, refreshContent })(StuffByCategory)
