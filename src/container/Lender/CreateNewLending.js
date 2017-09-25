import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
  ScrollView,
  Animated,
  Easing,
  StyleSheet
} from 'react-native'
import { Actions } from 'react-native-router-flux'
import ImagePicker from 'react-native-image-picker'
import { updateLendingData, incrementStock, decrementStock } from 'actions'

class CreateNewLending extends Component {
  state = {
    photo_1: '',
    photo_2: '',
    photo_3: '',
    fadeAnim: new Animated.Value(0),
    addContent: false,
    stock: 1
  }

  onImageHandle ({ prop }) {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
        cameraRoll: true
      }
    }

    ImagePicker.showImagePicker(options, (response) => {
      let value = response.uri
      if (prop === 'photo_1') {
        this.props.updateLendingData({ prop: 'photo_1', value })
        this.setState({ photo_1: value })
      } else if (prop === 'photo_2') {
        this.props.updateLendingData({ prop: 'photo_2', value })
        this.setState({ photo_2: value })
      } else {
        this.props.updateLendingData({ prop: 'photo_3', value })
        this.setState({ photo_3: value })
      }
    })
  }

  renderAddHargaSewa () {
    const { additional_price } = this.props
    const { textInput, card } = styles

    if (!this.state.addContent) {
      return <View/>
    }

    Animated.timing(
      this.state.fadeAnim,
      {
        toValue: 1,
        easing: Easing.ease,
        duration: 200
      }
    ).start()

    return (
      <Animated.View style={{ opacity: this.state.fadeAnim }}>
        <Text>Biaya Sewa Hari Selanjutnya</Text>
        <View style={card}>
          <TextInput
            style={textInput}
            value={additional_price}
            onChangeText={value => this.props.updateLendingData({ prop: 'additional_price', value })}
          />
        </View>
      </Animated.View>
    )
  }

  valueLocation () {
    const { mapData } = this.props
    if (!mapData[0]) {
      return ''
    }
    return mapData[0].formattedAddress
  }

  valueIncrement () {
    this.props.incrementStock()
  }

  valueDecrement () {
    if (this.props.count > 1) {
      this.props.decrementStock()
    }
  }

  render () {
    const {
      address_line,
      description,
      additional_terms,
      price,
      count,
      requirement_1,
      requirement_2,
      requirement_3,
      photo_1,
      photo_2,
      photo_3
    } = this.props

    const {
      container,
      textInput,
      infoText,
      imagePlaceholder,
      cardSectionImage,
      cardSectionSyarat,
      itemImagePlaceholder,
      itemImage,
      stockBarang,
      buttonStock,
      valueStock,
      containerButtonSubmit,
      buttonSubmit,
      textButton,
      card,
      textSyarat,
      radioButton,
      selectedRadioButton
    } = styles

    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          <View style={container}>
            <Text>Foto Barang</Text>
            <View style={card}>
              <View style={cardSectionImage}>
                <TouchableHighlight onPress={() => this.onImageHandle({ prop: 'photo_1' })}>
                  {!photo_1
                    ? <View style={itemImagePlaceholder}>
                      <Image
                        style={imagePlaceholder}
                        source={require('/assets/img/camera.png')} />
                    </View>
                    : <View style={itemImage}>
                      <Image
                        style={{ height: 65, width: 101 }}
                        source={{ uri: photo_1 }} />
                    </View>
                  }
                </TouchableHighlight>
                <TouchableHighlight onPress={() => this.onImageHandle({ prop: 'photo_2' })}>
                  {!photo_2
                    ? <View style={itemImagePlaceholder}>
                      <Image
                        style={imagePlaceholder}
                        source={require('/assets/img/camera.png')} />
                    </View>
                    : <View style={itemImage}>
                      <Image
                        style={{ height: 65, width: 101 }}
                        source={{ uri: photo_2 }} />
                    </View>
                  }
                </TouchableHighlight>
                <TouchableHighlight onPress={() => this.onImageHandle({ prop: 'photo_3' })}>
                  {!photo_3
                    ? <View style={itemImagePlaceholder}>
                      <Image
                        style={imagePlaceholder}
                        source={require('/assets/img/camera.png')} />
                    </View>
                    : <View style={itemImage}>
                      <Image
                        style={{ height: 65, width: 101 }}
                        source={{ uri: photo_3 }} />
                    </View>
                  }
                </TouchableHighlight>
              </View>
            </View>
            <Text>Deskripsi Barang</Text>
            <View style={card}>
              <TextInput
                style={textInput}
                multiline
                value={description}
                onChangeText={value => this.props.updateLendingData({ prop: 'description', value })}
              />
            </View>
            <Text>Lokasi Barang</Text>
            <View style={card}>
              <TextInput
                style={textInput}
                value={address_line}
                onFocus={() => Actions.mapView()}
              />
            </View>
            <Text>Biaya Sewa Hari Pertama</Text>
            <View style={card}>
              <TextInput
                style={textInput}
                value={price}
                onChangeText={value => this.props.updateLendingData({ prop: 'price', value })}
              />
            </View>
            {this.renderAddHargaSewa()}
            <TouchableOpacity onPress={() => this.setState({ addContent: !this.state.addContent })}>
              <Text style={infoText}>+ Berikan harga berbeda untuk hari selanjutnya</Text>
            </TouchableOpacity>
            <View style={card}>
              <Text>Stok Barang</Text>
              <View style={stockBarang}>
                <TouchableHighlight activeOpacity={1} underlayColor="#ddd" style={buttonStock} onPress={() => this.valueDecrement()}>
                  <Text style={{ color: '#fff' }}>-</Text>
                </TouchableHighlight>
                <View style={valueStock}><Text>{count}</Text></View>
                <TouchableHighlight activeOpacity={1} underlayColor="#ddd" style={buttonStock} onPress={() => this.valueIncrement()}>
                  <Text style={{ color: '#fff' }}>+</Text>
                </TouchableHighlight>
              </View>
            </View>
            <View style={card}>
              <Text>Syarat untuk peminjam</Text>
              <View style={cardSectionSyarat}>
                <Text style={textSyarat}>1 tanda pengenal asli ditahan sampai barang dikembalikan (KTP, SIM, Passport, dll)</Text>
                <TouchableOpacity style={{ flex: 1 }} onPress={() => this.props.updateLendingData({ prop: 'requirement_1', value: !requirement_1 * 1 })}>
                  <View style={radioButton}>
                    {!requirement_1 ? <View /> : <View style={selectedRadioButton} />}
                  </View>
                </TouchableOpacity>
              </View>
              <View style={cardSectionSyarat}>
                <Text style={textSyarat}>Menunjukkan minimal 3 tanda pengenal (KTP, SIM, Passport, dll)</Text>
                <TouchableOpacity style={{ flex: 1 }} onPress={() => this.props.updateLendingData({ prop: 'requirement_2', value: !requirement_2 * 1 })}>
                  <View style={radioButton}>
                    {!requirement_2 ? <View /> : <View style={selectedRadioButton} />}
                  </View>
                </TouchableOpacity>
              </View>
              <View style={[cardSectionSyarat, { borderBottomWidth: 1, marginBottom: 10, paddingBottom: 15, borderColor: '#ddd' }]}>
                <Text style={textSyarat}>Penerima barang harus pengguna akun yang bersangkutan</Text>
                <TouchableOpacity style={{ flex: 1 }} onPress={() => this.props.updateLendingData({ prop: 'requirement_3', value: !requirement_3 * 1 })}>
                  <View style={radioButton}>
                    {!requirement_3 ? <View /> : <View style={selectedRadioButton} />}
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <Text>Keterangan tambahan</Text>
            <View style={card}>
              <TextInput
                style={textInput}
                multiline
                value={additional_terms}
                onChangeText={value => this.props.updateLendingData({ prop: 'additional_terms', value })}
              />
            </View>
          </View>
        </ScrollView>
        <View style={containerButtonSubmit}>
          <TouchableOpacity style={buttonSubmit} onPress={() => Actions.delivery()}>
            <Text style={textButton}>Lanjut ke Metode Pengiriman</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 15,
    paddingHorizontal: 15
  },
  textInput: {
    backgroundColor: '#ddd',
    padding: 5,
    fontSize: 12
  },
  infoText: {
    fontSize: 11,
    color: '#3bbeb8',
    paddingBottom: 15
  },
  card: {
    marginTop: 8,
    marginBottom: 15
  },
  imagePlaceholder: {
    width: 25,
    height: 25
  },
  cardSectionImage: {
    padding: 8,
    backgroundColor: '#ddd',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  cardSectionSyarat: {
    flexDirection: 'row',
    marginTop: 15,
    paddingTop: 15,
    borderTopWidth: 1,
    borderColor: '#ddd'
  },
  itemImagePlaceholder: {
    backgroundColor: '#aaa',
    paddingHorizontal: 38,
    paddingVertical: 20
  },
  itemImage: {
    height: 'auto',
    width: 'auto'
  },
  stockBarang: {
    marginTop: 8,
    flexDirection: 'row'
  },
  buttonStock: {
    backgroundColor: '#3bbeb8',
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  valueStock: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
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
  },
  textSyarat: {
    justifyContent: 'space-around',
    flex: 7,
    fontSize: 12,
    fontFamily: 'Helvetica Neue',
    color: '#aaa'
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
  }
})

const mapStateToProps = ({ lending, count }) => {
  const {
    address_line,
    description,
    additional_terms,
    price,
    additional_price,
    photo_1,
    photo_2,
    photo_3,
    mapData,
    requirement_1,
    requirement_2,
    requirement_3
  } = lending

  return {
    address_line,
    description,
    additional_terms,
    price,
    additional_price,
    photo_1,
    photo_2,
    photo_3,
    mapData,
    requirement_1,
    requirement_2,
    requirement_3,
    count
  }
}

export default connect(mapStateToProps, { updateLendingData, incrementStock, decrementStock })(CreateNewLending)
