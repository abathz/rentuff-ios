import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import { updateLendingData, createNewLending } from 'actions'

class DeliveryMethod extends Component {
  handleSubmit () {
    const { lending } = this.props
    this.props.createNewLending(lending)
  }

  renderDeliveryCost () {
    const { lending } = this.props
    const {
      deliveryCost,
      price
    } = styles
    if (!lending.method_1) {
      return <View style={{ marginBottom: 20 }}/>
    }

    return (
      <View style={deliveryCost}>
        <View style={price}>
          <TextInput
            style={{ marginHorizontal: 10 }}
            onChangeText={value => this.props.updateLendingData({ prop: 'delivery_price', value })}
            placeholder={'0-5 km'}
          />
        </View>
        <View style={price}>
          <TextInput
            style={{ marginHorizontal: 10 }}
            onChangeText={value => this.props.updateLendingData({ prop: 'delivery_price_far', value })}
            placeholder={'5-10 km'}
          />
        </View>
      </View>
    )
  }

  render () {
    const {
      container,
      descContainer,
      headerText,
      descText,
      radioButton,
      selectedRadioButton,
      card,
      containerButtonSubmit,
      buttonSubmit,
      textButton
    } = styles

    const { lending } = this.props
    return (
      <View style={{ flex: 1 }}>
        <View style={container}>
          <View style={card}>
            <View style={descContainer}>
              <Text style={headerText}>Barang diantar oleh pemilik barang</Text>
              <Text style={descText}>Biaya di bawah adalah biaya total antar dan ambil barang</Text>
            </View>
            <TouchableOpacity style={{ flex: 1 }} onPress={() => this.props.updateLendingData({ prop: 'method_1', value: !lending.method_1 })}>
              <View style={radioButton}>
                {!lending.method_1 ? <View /> : <View style={selectedRadioButton} />}
              </View>
            </TouchableOpacity>
          </View>
          {this.renderDeliveryCost()}
          <View style={{ flexDirection: 'row' }}>
            <View style={descContainer}>
              <Text style={headerText}>Barang diambil oleh penyewa</Text>
              <Text style={descText}>Pemilik barang tidak memberikan layanan pengiriman barang</Text>
            </View>
            <TouchableOpacity style={{ flex: 1 }} onPress={() => this.props.updateLendingData({ prop: 'method_3', value: !lending.method_3 })}>
              <View style={radioButton}>
                {!lending.method_3 ? <View /> : <View style={selectedRadioButton} />}
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={containerButtonSubmit}>
          <TouchableOpacity style={buttonSubmit} onPress={this.handleSubmit.bind(this)}>
            <Text style={textButton}>Post</Text>
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
  },
  descContainer: {
    flex: 7
  },
  headerText: {
    marginBottom: 5,
    fontSize: 13,
    fontFamily: 'HelveticaNeue-Bold'
  },
  descText: {
    fontSize: 12,
    fontFamily: 'Helvetica Neue'
  },
  radioButton: {
    width: 38,
    height: 38,
    borderRadius: 20,
    borderWidth: 1.8,
    borderColor: '#aaa'
  },
  selectedRadioButton: {
    margin: 2,
    borderRadius: 20,
    width: 30,
    height: 30,
    backgroundColor: '#3bbeb8'
  },
  card: {
    flexDirection: 'row'
  },
  deliveryCost: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20
  },
  price: {
    justifyContent: 'center',
    width: 150,
    height: 50,
    backgroundColor: '#ddd'
  },
  containerButtonSubmit: {
    shadowOffset: { height: 2 },
    shadowOpacity: 0.2,
    elevation: 0,
    position: 'relative'
  },
  buttonSubmit: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3bbeb8',
    paddingVertical: 15
  },
  textButton: {
    fontFamily: 'HelveticaNeue-Bold',
    fontSize: 16,
    color: '#fff'
  }
})

const mapStateToProps = ({ lending }) => {
  return { lending }
}

export default connect(mapStateToProps, { updateLendingData, createNewLending })(DeliveryMethod)
