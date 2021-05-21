
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../pages/Home';
import Login from '../pages/Login';
import SignUp from '../pages/Signup';
import CreateProfile from '../pages/CreateProfile';

import Feed from '../pages/Feed';
import Ranking from '../pages/Ranking';
import MyProfile from '../pages/MyProfile';
import ProfileDetails from '../pages/ProfileDetails';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const options = {
  headerShown: false
}

const Logged = () => (
  <Tab.Navigator>
    <Tab.Screen name='Feed' component={Feed} />
    <Tab.Screen name='Ranking' component={Ranking} />
    <Tab.Screen name='MyProfile' component={MyProfile} />
    <Tab.Screen name='ProfileDetails' component={ProfileDetails} />
  </Tab.Navigator>
)

const Routes = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName='CreateProfile'>
      <Stack.Screen name='Home' component={Home} options={options} />
      <Stack.Screen name='Login' component={Login} options={options} />
      <Stack.Screen name='SignUp' component={SignUp} options={options} />
      <Stack.Screen name='CreateProfile' component={CreateProfile} options={options} />
      <Stack.Screen name='Logged' component={Logged} options={options} />
    </Stack.Navigator>
  </NavigationContainer>
)

export default Routes;