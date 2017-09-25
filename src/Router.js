import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { Actions, Scene, Router, Stack, Modal, Tabs, Lightbox } from 'react-native-router-flux'

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
import CreateNewLending from 'container/Lender/CreateNewLending'
import DeliveryMethod from 'container/Lender/DeliveryMethod'
import MapViews from 'components/MapViews'

import AccountBank from 'container/AccountBank'

import RenterTransaction from 'container/Transaction/RenterTransaction'
import LenderTransaction from 'container/Transaction/LenderTransaction'

const TabIcon = ({ focused, tabBarLabel }) => {
  return (
    <Text style={{ color: focused ? '#3bbeb8' : 'black' }}>{tabBarLabel}</Text>
  )
}

const TabIconTop = ({ focused, tabBarLabel }) => {
  return (
    <Text style={{ color: focused ? '#3bbeb8' : 'black' }}>{tabBarLabel}</Text>
  )
}

const RouterComponent = () => {
  const {
    titleStyle,
    navigationBarStyle,
    tabBarStyle,
    labelStyle
  } = styles

  return (
    <Router>
      <Lightbox>
        <Modal hideNavBar>
          <Scene hideNavBar>
            <Scene key="splashscreen" component={SplashScreen} hideNavBar />
            <Stack key="auth">
              <Scene key="home" component={AuthPage} hideNavBar />
              <Scene key="userLogin" component={UserLogin} hideNavBar />
              <Scene key="userSignUpFirst" component={UserSignUpFirst} hideNavBar />
              <Scene key="userSignUpSecond" component={UserSignUpSecond} hideNavBar />
              <Scene key="userSignUpThird" component={UserSignUpThird} hideNavBar />
              <Scene key="userSignUpFourth" component={UserSignUpFourth} hideNavBar />
              <Scene key="userSignUpFifth" component={UserSignUpFifth} hideNavBar />
              <Scene key="userSignUpSixth" component={UserSignUpSixth} hideNavBar />
            </Stack>
            <Tabs key="tabbar" tabs tabBarStyle={{ top: 0, borderTopWidth: 0 }} showLabel={false}>
              <Scene tabBarLabel="USO" title="USO" component={MainScene} icon={TabIcon} titleStyle={titleStyle} navigationBarStyle={navigationBarStyle} panHandlers={null} />
              <Stack tabBarLabel="Sewakan" icon={TabIcon}>
                <Scene key="sewakan" title="Sewakan" component={Categories} titleStyle={titleStyle} navigationBarStyle={navigationBarStyle} panHandlers={null} />
                <Scene key="stuffByCategory" component={StuffByCategory} onLeft={Actions.pop} tintColor="#fff" titleStyle={titleStyle} navigationBarStyle={navigationBarStyle} />
                <Scene key="createNewLending" component={CreateNewLending} hideTabBar leftTitle="Cancel" tintColor="#fff" titleStyle={titleStyle} navigationBarStyle={navigationBarStyle} />
                <Scene key="delivery" title="Metode Pengiriman" component={DeliveryMethod} hideTabBar tintColor="#fff" titleStyle={titleStyle} navigationBarStyle={navigationBarStyle} />
                <Scene key="mapView" component={MapViews} hideTabBar tintColor="#fff" titleStyle={titleStyle} navigationBarStyle={navigationBarStyle} />
              </Stack>
              <Stack tabBarLabel="Transasksi" icon={TabIcon} panHandlers={null}>
                <Tabs key="tabbarTransaction" tabs tabBarStyle={tabBarStyle} labelStyle={labelStyle} tabBarPosition="top" showLabel={true} swipeEnabled>
                  <Scene tabBarLabel="Peminjam" icon={() => { return <Text>foo</Text> }}>
                    <Scene hideNavBar component={RenterTransaction}/>
                  </Scene>
                  <Scene tabBarLabel="pemilik barang" icon={TabIconTop}>
                    <Scene hideNavBar component={LenderTransaction}/>
                  </Scene>
                </Tabs>
              </Stack>
              <Stack tabBarLabel="Profile" title="Profile" component={Profile} icon={TabIcon} titleStyle={titleStyle} navigationBarStyle={navigationBarStyle} panHandlers={null}>
                <Scene component={AccountBank}/>
              </Stack>
            </Tabs>
          </Scene>
          <Stack key="modal">
            <Scene key="editProfile" title="Edit Profile" component={EditProfile} leftTitle="Cancel" onLeft={Actions.pop} tintColor="#fff" navigationBarStyle={navigationBarStyle} />
            <Scene key="changePhoneNumber" title="Change Phone Number" component={ChangePhoneNumber} tintColor="#fff" navigationBarStyle={navigationBarStyle} />
            <Scene key="verificationPhoneNumber" title="Verification" component={VerificationPhoneNumber} tintColor="#fff" navigationBarStyle={navigationBarStyle} />
          </Stack>
        </Modal>
      </Lightbox>
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
  },
  labelStyle: {
    paddingTop: 22,
    fontSize: 13
  }
})

export default RouterComponent
