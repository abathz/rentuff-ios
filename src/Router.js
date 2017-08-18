import React from 'react'
import { Text } from 'react-native'
import { Scene, Router } from 'react-native-router-flux'

import AuthPage from 'container/Auth/AuthPage'
import UserSignUpFirst from 'container/Auth/UserSignUpFirst'
import UserSignUpSecond from 'container/Auth/UserSignUpSecond'
import UserSignUpThird from 'container/Auth/UserSignUpThird'
import UserSignUpFourth from 'container/Auth/UserSignUpFourth'
import UserSignUpFifth from 'container/Auth/UserSignUpFifth'
import UserSignUpSixth from 'container/Auth/UserSignUpSixth'
import UserLogin from 'container/Auth/UserLogin'

import MainScene from 'container/MainScene'

const TabIcon = ({ focused, title }) => {
  return (
    <Text style={{ color: focused ? 'red' : 'black' }}>{title}</Text>
  )
}

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="main" hideNavBar>
        <Scene key="auth">
          <Scene key="home" component={AuthPage} hideNavBar />
          <Scene key="userLogin" component={UserLogin} hideNavBar />
          <Scene key="userSignUpFirst" component={UserSignUpFirst} hideNavBar />
          <Scene key="userSignUpSecond" component={UserSignUpSecond} hideNavBar />
          <Scene key="userSignUpThird" component={UserSignUpThird} hideNavBar />
          <Scene key="userSignUpFourth" component={UserSignUpFourth} hideNavBar />
          <Scene key="userSignUpFifth" component={UserSignUpFifth} hideNavBar />
          <Scene key="userSignUpSixth" component={UserSignUpSixth} hideNavBar />
        </Scene>
        <Scene key="tabbar" tabs showLabel={false}>
          <Scene key="osu" title="USO" icon={TabIcon} hideNavBar>
            <Scene key="tab1" component={MainScene} title="Welcome" initial />
          </Scene>
          <Scene key="yaya" title="Yaya" icon={TabIcon} hideNavBar>
            <Scene key="tab1" component={MainScene} title="Welcomeeeeee" />
          </Scene>
          <Scene key="tatata" title="tatata" icon={TabIcon} hideNavBar>
            <Scene key="tab1" component={MainScene} title="Weeeeelcome" />
          </Scene>
        </Scene>
      </Scene>
    </Router>
  )
}

export default RouterComponent
