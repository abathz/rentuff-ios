import React from 'react'
import { Text, StyleSheet, View, Animated } from 'react-native'
import { Actions, Scene, Router, Stack, Modal } from 'react-native-router-flux'

import SplashScreen from 'container/SplashScreen'
import MainScene from 'container/MainScene'

import AuthPage from 'container/Auth/AuthPage'
import UserSignUpFirst from 'container/Auth/UserSignUpFirst'
import UserSignUpSecond from 'container/Auth/UserSignUpSecond'
import UserSignUpThird from 'container/Auth/UserSignUpThird'
import UserSignUpFourth from 'container/Auth/UserSignUpFourth'
import UserSignUpFifth from 'container/Auth/UserSignUpFifth'
import UserSignUpSixth from 'container/Auth/UserSignUpSixth'
import UserLogin from 'container/Auth/UserLogin'

import Profile from 'container/Profile/Profile'
import EditProfile from 'container/Profile/EditProfile'
import ChangePhoneNumber from 'container/Profile/ChangePhoneNumber'
import VerificationPhoneNumber from 'container/Profile/VerificationPhoneNumber'

import Categories from 'container/Lender/Categories'
import StuffByCategory from 'container/Lender/StuffByCategory'

import RenterTransaction from 'container/Transaction/RenterTransaction'
import LenderTransaction from 'container/Transaction/LenderTransaction'

const TabIcon = ({ focused, title }) => {
  return (
    <Text style={{ color: focused ? '#3bbeb8' : 'black' }}>{title}</Text>
  )
}

const TabIconTop = ({ focused, title }) => {
  return (
    <View style={{ paddingTop: 30 }}>
      <Text style={{ color: focused ? '#fff' : '#ddd' }}>{title}</Text>
    </View>
  )
}

const RouterComponent = () => {
  const {
    titleStyle,
    navigationBarStyle,
    tabBarStyle
  } = styles

  return (
    <Router>
      <Modal hideNavBar>
        <Scene key="splashscreen" component={SplashScreen} hideNavBar />
        <Stack key="auth">
          <Scene key="home" component={AuthPage} hideNavBar panHandlers={null} />
          <Scene key="userLogin" component={UserLogin} hideNavBar />
          <Scene key="userSignUpFirst" component={UserSignUpFirst} hideNavBar />
          <Scene key="userSignUpSecond" component={UserSignUpSecond} hideNavBar />
          <Scene key="userSignUpThird" component={UserSignUpThird} hideNavBar />
          <Scene key="userSignUpFourth" component={UserSignUpFourth} hideNavBar />
          <Scene key="userSignUpFifth" component={UserSignUpFifth} hideNavBar />
          <Scene key="userSignUpSixth" component={UserSignUpSixth} hideNavBar />
        </Stack>
        <Scene key="tabbar" tabs tabBarStyle={{ top: 0, borderTopWidth: 0 }} showLabel={false} panHandlers={null}>
          <Scene key="osu" title="USO" component={MainScene} icon={TabIcon} titleStyle={titleStyle} navigationBarStyle={navigationBarStyle} />
          <Scene key="tabSewakan" title="Sewakan" icon={TabIcon}>
            <Scene key="sewakan" title="Sewakan" component={Categories} titleStyle={titleStyle} navigationBarStyle={navigationBarStyle}/>
            <Scene key="stuffByCategory" component={StuffByCategory} onLeft={Actions.pop} tintColor="#fff" titleStyle={titleStyle} navigationBarStyle={navigationBarStyle}/>
          </Scene>
          <Scene key="tabTransaksi" title="Transasksi" icon={TabIcon}>
            <Scene key="tabbarTransaction" tabs tabBarStyle={tabBarStyle} showLabel={false} tabBarPosition="top" swipeEnabled={true}>
              <Scene key="tab1" title="Pemimjam" icon={TabIconTop}>
                <Scene key="renterTransaksi" title="Pemimjam" hideNavBar component={RenterTransaction} titleStyle={titleStyle} navigationBarStyle={navigationBarStyle} />
              </Scene>
              <Scene key="tab2" title="Pemilik Barang" icon={TabIconTop}>
                <Scene key="lenderTransaksi" title="Pemilik Barang" hideNavBar component={LenderTransaction} titleStyle={titleStyle} navigationBarStyle={navigationBarStyle} />
              </Scene>
            </Scene>
          </Scene>
          <Scene key="tabProfile" title="Profile" component={Profile} icon={TabIcon} titleStyle={titleStyle} navigationBarStyle={navigationBarStyle} />
        </Scene>
        <Stack key="modal">
          <Scene key="editProfile" title="Edit Profile" component={EditProfile} leftTitle="Cancel" onLeft={Actions.pop} tintColor="#fff" navigationBarStyle={navigationBarStyle}/>
          <Scene key="changePhoneNumber" title="Change Phone Number" component={ChangePhoneNumber} tintColor="#fff" navigationBarStyle={navigationBarStyle}/>
          <Scene key="verificationPhoneNumber" title="Verification" component={VerificationPhoneNumber} tintColor="#fff" navigationBarStyle={navigationBarStyle}/>
        </Stack>
      </Modal>
    </Router>
  )
}

const styles = StyleSheet.create({
  titleStyle: {
    color: '#fff'
  },
  navigationBarStyle: {
    backgroundColor: '#3bbeb8',
    borderBottomWidth: 0
  },
  tabBarStyle: {
    height: 64,
    backgroundColor: '#3bbeb8',
    borderTopWidth: 0
  }
})

export default RouterComponent
