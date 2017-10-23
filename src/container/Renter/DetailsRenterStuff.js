import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import { Actions } from 'react-native-router-flux'
import Swiper from 'react-native-swiper'
import StarRating from 'react-native-star-rating'
import { getDetailsStuff, decrementStock, incrementStock } from 'actions'
import { Spinner } from 'components/common'

class DetailsRenterStuff extends Component {
  componentWillMount () {
    this.props.getDetailsStuff(this.props.id)
  }

  renderBackground () {
    const { lend_detail } = this.props.detailsStuff
    return lend_detail.photos.map(photo => {
      return (
        <View key={photo} style={{ flex: 1 }}>
          <Image style={{ flex: 1, width: window.innerWidth }} source={{ uri: photo }} />
        </View>
      )
    })
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
      container,
      content,
      contentProfile,
      contentRating,
      contentMediaSocial,
      contentStock,
      contentDescription,
      placeholderImage,
      profileName,
      addressDistance,
      stockBarang,
      buttonStock,
      valueStock,
      containerButtonSubmit,
      buttonSubmit,
      textButton,
      textSyarat,
      syaratItem,
      bulletItem
    } = styles

    const { detailsStuff, count } = this.props

    if (!detailsStuff) { return <Spinner /> }

    return (
      <View style={{ flex: 1 }}>
        <View style={{ backgroundColor: '#3bbeb8', height: 21 }}/>
        <ScrollView style={container}>
          <Swiper height={250}>
            {this.renderBackground()}
          </Swiper>
          <View style={content}>
            <View style={contentProfile}>
              <View style={placeholderImage} />
              <Text style={profileName}>{`${detailsStuff.lend_detail.profile.first_name} ${detailsStuff.lend_detail.profile.last_name}`}</Text>
              <Text style={addressDistance}>{detailsStuff.lend_detail.address_line}</Text>
              <Text style={addressDistance}>{`${this.props.distance.toFixed(1)} Km dari kamu`}</Text>
            </View>
            <View style={contentRating}>
              <Text>Rating Lender</Text>
              <StarRating
                disabled
                maxStars={5}
                rating={detailsStuff.lend_detail.profile.review_lender}
                starSize={15}
                starStyle={{ paddingLeft: 5 }}
                starColor={'#ccc'}
              />
            </View>
            <View style={contentMediaSocial}>
              <Text>Online ID</Text>
            </View>
            <View style={contentStock}>
              <Text>Jumlah</Text>
              <View style={stockBarang}>
                <TouchableHighlight activeOpacity={1} underlayColor="#ddd" style={buttonStock} onPress={this.valueDecrement.bind(this)}>
                  <Text style={{ color: '#fff' }}>-</Text>
                </TouchableHighlight>
                <View style={valueStock}><Text>{count}</Text></View>
                <TouchableHighlight activeOpacity={1} underlayColor="#ddd" style={buttonStock} onPress={this.valueIncrement.bind(this)}>
                  <Text style={{ color: '#fff' }}>+</Text>
                </TouchableHighlight>
              </View>
            </View>
            <View style={contentDescription}>
              <Text style={{ marginBottom: 10 }}>Deskripsi</Text>
              <Text style={{ fontSize: 12, color: '#666' }}>{detailsStuff.lend_detail.description}</Text>
            </View>
            <View style={contentDescription}>
              <Text>Syarat peminjaman</Text>
              <View>
                {detailsStuff.lend_detail.requirement_1 === 1
                  ? <View style={syaratItem}>
                    <View style={{ flex: 1 }}>
                      <View style={bulletItem} />
                    </View>
                    <Text style={textSyarat}>1 tanda pengenal asli ditahan sampai barang dikembalikan (KTP, SIM, Passport, dll)</Text>
                  </View>
                  : <View/>
                }
                {detailsStuff.lend_detail.requirement_2 === 1
                  ? <View style={syaratItem}>
                    <View style={{ flex: 1 }}>
                      <View style={bulletItem} />
                    </View>
                    <Text style={textSyarat}>Menunjukkan minimal 2 tanda pengenal (KTP, SIM, Passport, dll)</Text>
                  </View>
                  : <View />
                }
                {detailsStuff.lend_detail.requirement_2 === 1
                  ? <View style={syaratItem}>
                    <View style={{ flex: 1 }}>
                      <View style={bulletItem} />
                    </View>
                    <Text style={textSyarat}>Penerima barang harus pengguna akun yang bersangkutan</Text>
                  </View>
                  : <View />
                }
              </View>
            </View>
          </View>
        </ScrollView>
        <View style={containerButtonSubmit}>
          <TouchableOpacity style={buttonSubmit} onPress={() => Actions.selectDateRent()}>
            <Text style={textButton}>Pilih Tanggal Sewa</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  content: {
    paddingHorizontal: 15,
    paddingBottom: 15
  },
  contentProfile: {
    marginTop: 20,
    paddingBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ccc'
  },
  contentRating: {
    marginTop: 20,
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#ccc'
  },
  contentMediaSocial: {
    marginTop: 20,
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#ccc'
  },
  contentStock: {
    marginTop: 20,
    paddingBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: '#ccc'
  },
  contentDescription: {
    marginTop: 20,
    paddingBottom: 20
  },
  placeholderImage: {
    width: 100,
    height: 100,
    backgroundColor: '#ddd',
    borderRadius: 50
  },
  profileName: {
    fontFamily: 'HelveticaNeue-Bold',
    marginTop: 10,
    marginBottom: 5
  },
  addressDistance: {
    fontSize: 12,
    color: '#aaa'
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
    flex: 6,
    fontSize: 12,
    fontFamily: 'Helvetica Neue',
    color: '#aaa'
  },
  syaratItem: {
    marginTop: 20,
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ccc'
  },
  bulletItem: {
    width: 20,
    height: 20,
    backgroundColor: '#3bbeb8',
    borderRadius: 20
  }
})

const mapStateToProps = ({ renter, count }) => {
  const { detailsStuff } = renter

  return { detailsStuff, count }
}

export default connect(mapStateToProps, { getDetailsStuff, decrementStock, incrementStock })(DetailsRenterStuff)
