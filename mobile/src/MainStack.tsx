import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

//icons
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import Fontiso from 'react-native-vector-icons/Fontisto';

//components
import ProfileScreen from './Screens/ProfileScreen/ProfileScreen';
import FeedScreen from './Screens/FeedScreen/FeedScreen';
import NotificationScreen from './Screens/NotificationScreen/NotifcationScreen';
import ExploreScreen from './Screens/ExploreScreen/ExploreScreen';
import SettingsScreen from './Screens/SettingsScreen/SettingsScreen';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const ProfileStack = () => {
  return(
    <Stack.Navigator screenOptions={{ headerShown: false}}>
      <Stack.Screen name="profile" component = {ProfileScreen} />
      <Stack.Screen name="settings" component = {SettingsScreen} />
    </Stack.Navigator>
  )
}


const MainStack = () => {
  return (
      <Tab.Navigator tabBarOptions = {{
        activeTintColor: "#00FFBF",
        inactiveTintColor: "lightgray",
        showLabel: false,
        tabStyle: {backgroundColor: "white"}
        }}>
      <Tab.Screen
      name="feed" component={FeedScreen}
      options = {{
        tabBarIcon: ({ color, size }) => (
          <FontAwesome5Icon name="home" color={color} size={size} />
        ),
      }}/>
      <Tab.Screen
      name="explore" component={ExploreScreen}
      options = {{
        tabBarIcon: ({ color, size }) => (
          <FontAwesome5Icon name="search" color={color} size={size} />
        ),
      }}/>
      <Tab.Screen name="notification" component={NotificationScreen}
        options = {{
          tabBarIcon: ({ color, size }) => (
            <Fontiso name="bell-alt" color={color} size={size} />
          ),
        }}/>
      <Tab.Screen
        name="profile" component={ProfileStack}
        options = {{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5Icon name="user-alt" color={color} size={size} />
          ),
      }}/>
      
    </Tab.Navigator>
  );
}

export default MainStack;