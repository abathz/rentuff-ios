import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet
} from 'react-native'
import StarRating from 'react-native-star-rating'
import { Actions } from 'react-native-router-flux'
import { Spinner } from 'components/common'
import { getUserData, userDataUpdate, editProfile } from 'actions'

class EditProfile extends Component {
  state = {
    text: 'placeholder',
    defaultValue: 'yayayay'
  }

  componentWillMount () {
    this.props.getUserData()
  }

  renderUlasan ({ nextChild, borderTop, containerContent, textChild }) {
    const { review_renter, review_lender } = this.props
    return (
      <View style={containerContent}>
        <View style={nextChild}>
          <Text style={textChild}>Rating sebagai peminjam</Text>
          <StarRating
            disabled
            maxStars={5}
            rating={review_renter}
            starSize={15}
            starStyle={{ paddingLeft: 5 }}
            starColor={'#ccc'}
          />
        </View>
        <View style={[borderTop, nextChild]}>
          <Text style={textChild}>Rating sebagai pemilik barang</Text>
          <StarRating
            disabled
            maxStars={5}
            rating={review_lender}
            starSize={15}
            starStyle={{ paddingLeft: 5 }}
            starColor={'#ccc'}
          />
        </View>
        <View style={[borderTop, nextChild]}>
          <Text style={textChild}>Online ID</Text>
          <View></View>
        </View>
      </View>
    )
  }

  renderProfile ({ nextChild, borderTop, containerContent, textChild, textInputStyle }) {
    const { first_name, last_name } = this.props
    return (
      <View style={containerContent}>
        <View style={nextChild}>
          <Text style={textChild}>Nama depan</Text>
          <TextInput
            style={textInputStyle}
            value={first_name}
            onChangeText={value => this.props.userDataUpdate({ prop: 'first_name', value })}
          />
        </View>
        <View style={[borderTop, nextChild]}>
          <Text style={textChild}>Nama belakang</Text>
          <TextInput
            style={textInputStyle}
            value={last_name}
            onChangeText={value => this.props.userDataUpdate({ prop: 'last_name', value })}
          />
        </View>
      </View>
    )
  }

  renderTextArea ({ nextChild, borderTop, containerContent, textChild }) {
    const { about_me } = this.props
    return (
      <View style={containerContent}>
        <TextInput
          multiline
          caretHidden
          value={about_me}
          style={{ fontSize: 13, padding: 5 }}
          onChangeText={value => this.props.userDataUpdate({ prop: 'about_me', value })}
        />
      </View>
    )
  }

  renderProfileNext ({ nextChild, borderTop, containerContent, textChild, textInputStyle }) {
    const { birth_date, email, phone } = this.props
    return (
      <View style={containerContent}>
        <View style={nextChild}>
          <Text style={textChild}>Birtday</Text>
          <TextInput
            style={textInputStyle}
            value={birth_date}
            onChangeText={value => this.props.userDataUpdate({ prop: 'birth_date', value })}
          />
        </View>
        <View style={[borderTop, nextChild]}>
          <Text style={textChild}>Email</Text>
          <TextInput
            style={textInputStyle}
            value={email}
            onChangeText={value => this.props.userDataUpdate({ prop: 'email', value })}
          />
        </View>
        <View style={[borderTop, nextChild]}>
          <Text style={textChild}>Nomor Hp</Text>
          <TouchableOpacity onPress={() => Actions.changePhoneNumber()}>
            <Text style={textInputStyle}>{phone}</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  onSubmit () {
    const { first_name, last_name, email, about_me, id_facebook, id_instagram, id_twitter, birth_date } = this.props

    let data = {
      first_name,
      last_name,
      email,
      about_me,
      id_facebook,
      id_instagram,
      id_twitter,
      birth_date
    }

    this.props.editProfile(data)
  }

  render () {
    const {
      container,
      placeholderImage,
      containerImg,
      containerContent,
      borderTop,
      nextChild,
      textChild,
      buttonStyle,
      textButtonStyle,
      textInputStyle
    } = styles

    if (!this.props) { return <Spinner /> }

    return (
      <ScrollView>
        <View style={container}>
          <View style={containerImg}>
            <View style={placeholderImage} />
            <TouchableOpacity style={{ paddingTop: 20 }}>
              <Text style={{ color: '#000' }}>Change profile picture</Text>
            </TouchableOpacity>
          </View>
          {this.renderUlasan({ textChild, nextChild, borderTop, containerContent })}
          {this.renderProfile({ textChild, nextChild, borderTop, containerContent, textInputStyle })}
          {this.renderTextArea({ textChild, nextChild, borderTop, containerContent })}
          {this.renderProfileNext({ textChild, nextChild, borderTop, containerContent, textInputStyle })}
          <TouchableOpacity style={buttonStyle} onPress={this.onSubmit.bind(this)}>
            <Text style={textButtonStyle}>Simpan</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  containerImg: {
    alignItems: 'center'
  },
  containerContent: {
    marginTop: 20,
    marginLeft: 15,
    marginRight: 15,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ddd',
    alignSelf: 'stretch',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1
  },
  placeholderImage: {
    marginTop: 20,
    width: 120,
    height: 120,
    borderRadius: 100,
    backgroundColor: '#3bbeb8'
  },
  borderTop: {
    borderTopWidth: 1,
    borderColor: '#ddd'
  },
  nextChild: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingLeft: 10,
    paddingBottom: 10,
    paddingRight: 10
  },
  textChild: {
    fontSize: 13
  },
  buttonStyle: {
    borderRadius: 5,
    margin: 15,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#3bbeb8'
  },
  textButtonStyle: {
    color: '#fff',
    fontFamily: 'HelveticaNeue-Bold'
  },
  textInputStyle: {
    flex: 2,
    fontSize: 13,
    textAlign: 'right'
  }
})

const mapStateToProps = ({ user }) => {
  const { first_name, last_name, email, about_me, id_facebook, id_instagram, id_twitter, birth_date, phone, review_renter, review_lender } = user

  return {
    first_name,
    last_name,
    email,
    about_me,
    id_facebook,
    id_twitter,
    id_instagram,
    birth_date,
    phone,
    review_renter,
    review_lender
  }
}

export default connect(mapStateToProps, { getUserData, userDataUpdate, editProfile })(EditProfile)
