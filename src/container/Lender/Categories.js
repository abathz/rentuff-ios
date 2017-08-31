import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  View,
  Text,
  ScrollView,
  TouchableHighlight,
  StyleSheet
} from 'react-native'
import { Actions } from 'react-native-router-flux'
import { getListCategory } from 'actions'
import { Spinner } from 'components/common'

class Lender extends Component {
  componentDidMount () {
    this.props.getListCategory()
  }

  renderListView () {
    const {
      containerListView,
      listText
    } = styles

    const { all } = this.props

    const sortCategory = all.categories.sort((a, b) => {
      let nameA = a.category_name.toLowerCase()
      let nameB = b.category_name.toLowerCase()
      if (nameA < nameB) { return -1 }
      if (nameA > nameB) { return 1 }
      return 0
    })

    return sortCategory.map((category) => {
      return (
        <View key={category.id_category} style={containerListView}>
          <TouchableHighlight activeOpacity={1} underlayColor="#eee" onPress={() => { Actions.stuffByCategory({ title: category.category_name, id: category.id_category }) }}>
            <Text style={listText}>{category.category_name}</Text>
          </TouchableHighlight>
        </View>
      )
    })
  }

  render () {
    const {
      container,
      containerContent,
      headerText
    } = styles

    if (!this.props.all) { return (<Spinner />) }

    return (
      <View style={container}>
        <View style={containerContent}>
          <Text style={headerText}>Apa yang mau kamu sewakan?</Text>
        </View>
        <ScrollView>
          {this.renderListView()}
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  containerContent: {
    marginTop: 20,
    marginLeft: 15,
    marginRight: 15
  },
  containerListView: {
    flex: 1,
    marginLeft: 15,
    marginRight: 15,
    borderBottomWidth: 1,
    borderColor: '#ddd'
  },
  headerText: {
    fontSize: 18,
    marginBottom: 20,
    fontFamily: 'HelveticaNeue-Bold'
  },
  listText: {
    paddingTop: 20,
    paddingRight: 15,
    paddingBottom: 20
  }
})

const mapStateToProps = ({ categories }) => {
  const { all } = categories

  return { all }
}

export default connect(mapStateToProps, { getListCategory })(Lender)
