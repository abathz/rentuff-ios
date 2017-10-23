import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  View,
  Text,
  Picker,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import { getAccountBankUser, addAccountBankUser, userDataUpdate } from 'actions'
import { Spinner } from 'components/common'

class AccountBankUser extends Component {
  componentWillMount () {
    this.props.getAccountBankUser()
  }

  handleSubmit () {
    const {
      idBank,
      accountName,
      accountNumber,
      password
    } = this.props

    let data = {
      id_bank: idBank,
      account_name: accountName,
      account_number: accountNumber,
      password
    }

    this.props.addAccountBankUser(data)
  }

  renderListBank () {
    const { listBank } = this.props
    return listBank.map(data => {
      return (
        <Picker.Item key={data.id_bank} label={data.bank_name} value={data.id_bank} />
      )
    })
  }

  render () {
    const {
      listBank,
      idBank,
      accountNumber,
      accountName,
      password
    } = this.props

    const {
      container,
      pickerContainer,
      inputContainer,
      textInput,
      containerButtonSubmit,
      buttonSubmit,
      textButton,
      label
    } = styles

    if (!listBank) return <Spinner/>

    return (
      <View style={{ flex: 1 }}>
        <View style={container}>
          <View style={pickerContainer}>
            <Text style={label}>Nama Bank</Text>
            <Picker
              selectedValue={idBank}
              onValueChange={(value) => this.props.userDataUpdate({ prop: 'idBank', value })}>
              {this.renderListBank()}
            </Picker>
          </View>
          <View style={inputContainer}>
            <Text style={label}>Nomor Rekening</Text>
            <TextInput
              style={textInput}
              value={accountNumber}
              onChangeText={value => this.props.userDataUpdate({ prop: 'accountNumber', value })}
            />
          </View>
          <View style={inputContainer}>
            <Text style={label}>Nama Pemilik Rekening</Text>
            <TextInput
              style={textInput}
              value={accountName}
              onChangeText={value => this.props.userDataUpdate({ prop: 'accountName', value })}
            />
          </View>
          <View style={inputContainer}>
            <Text style={label}>Password</Text>
            <TextInput
              secureTextEntry
              style={textInput}
              value={password}
              onChangeText={value => this.props.userDataUpdate({ prop: 'password', value })}
            />
          </View>
        </View>
        <View style={containerButtonSubmit}>
          <TouchableOpacity style={buttonSubmit} onPress={this.handleSubmit.bind(this)}>
            <Text style={textButton}>{listBank.status === -1 ? 'Simpan' : 'Update'}</Text>
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
  pickerContainer: {
    marginTop: 40
  },
  inputContainer: {
    marginBottom: 20
  },
  label: {
    fontSize: 13,
    marginBottom: 5
  },
  textInput: {
    backgroundColor: '#ddd',
    padding: 5,
    fontSize: 12
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

const mapStateToProps = ({ user }) => {
  const {
    listBank,
    idBank,
    accountNumber,
    accountName,
    password
  } = user

  return {
    listBank,
    idBank,
    accountNumber,
    accountName,
    password
  }
}

export default connect(mapStateToProps, { getAccountBankUser, addAccountBankUser, userDataUpdate })(AccountBankUser)
