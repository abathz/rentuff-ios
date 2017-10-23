import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { Actions, Scene, Router, Stack, Modal, Tabs, Lightbox, Overlay } from 'react-native-router-flux'

import SplashScreen from 'container/SplashScreen'
import MainScene from 'container/MainScene'
import MapViews from 'components/MapViews'

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

import Setting from 'container/Setting/Setting'
import AccountBankUser from 'container/Setting/AccountBankUser'

import Categories from 'container/Lender/Categories'
import StuffByCategory from 'container/Lender/StuffByCategory'
import CreateNewLending from 'container/Lender/CreateNewLending'
import DeliveryMethod from 'container/Lender/DeliveryMethod'

import RenterStuffNonMotor from 'container/Renter/RenterStuffNonMotor'
import ResultNearbyStuff from 'container/Renter/ResultNearbyStuff'
import DetailsRenterStuff from 'container/Renter/DetailsRenterStuff'
import SelectDateRent from 'container/Renter/SelectDateRent'

import RenterTransaction from 'container/Transaction/RenterTransaction'
import LenderTransaction from 'container/Transaction/LenderTransaction'

const TabIcon = ({ focused, tabBarLabel }) => {
  return (
    <Text style={{ color: focused ? '#3bbeb8' : 'black' }}>{tabBarLabel}</Text>
  )
}

const TabIconTop = ({ focused, title }) => {
  return (
    <Text style={{ color: focused ? '#3bbeb8' : 'black' }}>{title}</Text>
  )
}

const title = () => {
  return `+++ Rentuff +++`
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
      <Overlay>
        <Modal hideNavBar>
          <Lightbox>
            <Stack key="root" hideNavBar>
              <Scene key="splashscreen" component={SplashScreen} hideNavBar initial/>
              <Stack key="auth" hideNavBar>
                <Scene key="home" component={AuthPage} />
                <Scene key="userLogin" component={UserLogin} />
                <Scene key="userSignUpFirst" component={UserSignUpFirst} />
                <Scene key="userSignUpSecond" component={UserSignUpSecond} />
                <Scene key="userSignUpThird" component={UserSignUpThird} />
                <Scene key="userSignUpFourth" component={UserSignUpFourth} />
                <Scene key="userSignUpFifth" component={UserSignUpFifth} />
                <Scene key="userSignUpSixth" component={UserSignUpSixth} />
              </Stack>
              <Tabs key="tabbar" tabs tabBarStyle={{ top: 0, borderTopWidth: 0 }} showLabel={false}>
                <Stack tabBarLabel="Sewa" icon={TabIcon}>
                  <Scene key="sewa" component={MainScene} title={title()} titleStyle={titleStyle} navigationBarStyle={navigationBarStyle} panHandlers={null} />
                  <Scene key="renterStuffNonMotor" component={RenterStuffNonMotor} onLeft={Actions.pop} tintColor="#fff" titleStyle={titleStyle} navigationBarStyle={navigationBarStyle} />
                </Stack>
                <Stack tabBarLabel="Sewakan" icon={TabIcon}>
                  <Scene key="sewakan" title="Sewakan" component={Categories} titleStyle={titleStyle} navigationBarStyle={navigationBarStyle} panHandlers={null} />
                  <Scene key="stuffByCategory" component={StuffByCategory} onLeft={Actions.pop} tintColor="#fff" titleStyle={titleStyle} navigationBarStyle={navigationBarStyle} />
                </Stack>
                <Stack tabBarLabel="Transasksi" icon={TabIcon} panHandlers={null}>
                  <Tabs key="tabbarTransaction" tabs tabBarStyle={tabBarStyle} labelStyle={labelStyle} tabBarPosition="top" showLabel={true} swipeEnabled>
                    <Scene key="renter" tabBarLabel="Peminjam" icon={TabIconTop} hideNavBar component={RenterTransaction} />
                    <Scene key="lending" tabBarLabel="Pemilik barang" hideNavBar component={LenderTransaction} />
                  </Tabs>
                </Stack>
                <Stack tabBarLabel="Profile" icon={TabIcon} titleStyle={titleStyle} navigationBarStyle={navigationBarStyle}>
                  <Scene key="profile" title="Profile" component={Profile} panHandlers={null} />
                </Stack>
              </Tabs>
              <Stack key="rootSetting">
                <Scene key="setting" title="Setelan" component={Setting} tintColor="#fff" back titleStyle={titleStyle} navigationBarStyle={navigationBarStyle} initial/>
                <Scene key="account" title="Rekening Penerima" component={AccountBankUser} hideTabBar tintColor="#fff" titleStyle={titleStyle} navigationBarStyle={navigationBarStyle} />
              </Stack>
              <Stack key="rootLender">
                <Scene key="createNewLending" component={CreateNewLending} hideTabBar back tintColor="#fff" titleStyle={titleStyle} navigationBarStyle={navigationBarStyle} initial/>
                <Scene key="delivery" title="Metode Pengiriman" component={DeliveryMethod} hideTabBar onLeft={Actions.pop} tintColor="#fff" titleStyle={titleStyle} navigationBarStyle={navigationBarStyle} />
              </Stack>
              <Stack key="rootRenter">
                <Scene key="resultNearby" title="Result" component={ResultNearbyStuff} back onLeft={Actions.pop} hideTabBar tintColor="#fff" titleStyle={titleStyle} navigationBarStyle={navigationBarStyle} initial/>
              </Stack>
              <Scene key="detailsStuff" hideTabBar component={DetailsRenterStuff} tintColor="#fff" titleStyle={titleStyle} navigationBarStyle={[navigationBarStyle, { backgroundColor: 'transparent' }]} />
              <Stack key="selectDateRent">
                <Scene component={SelectDateRent} hideTabBar onLeft={Actions.pop} tintColor="#fff" titleStyle={titleStyle} navigationBarStyle={navigationBarStyle} />
              </Stack>
              <Scene key="mapViewRenter" component={MapViews} hideTabBar onLeft={Actions.pop} tintColor="#fff" titleStyle={titleStyle} navigationBarStyle={navigationBarStyle} />
              <Scene key="mapView" component={MapViews} hideTabBar tintColor="#fff" titleStyle={titleStyle} navigationBarStyle={navigationBarStyle} />
            </Stack>
          </Lightbox>
          <Stack key="modal">
            <Scene key="editProfile" title="Edit Profile" component={EditProfile} leftTitle="Cancel" onLeft={Actions.pop} tintColor="#fff" navigationBarStyle={navigationBarStyle} />
            <Scene key="changePhoneNumber" title="Change Phone Number" component={ChangePhoneNumber} tintColor="#fff" navigationBarStyle={navigationBarStyle} />
            <Scene key="verificationPhoneNumber" title="Verification" component={VerificationPhoneNumber} tintColor="#fff" navigationBarStyle={navigationBarStyle} />
          </Stack>
        </Modal>
      </Overlay>
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
