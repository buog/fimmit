import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//icons
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import Fontiso from 'react-native-vector-icons/Fontisto';

//components
import ProfileScreen from './Screens/ProfileScreen/ProfileScreen';
import FeedScreen from './Screens/FeedScreen/FeedScreen';
import NotificationScreen from './Screens/NotificationScreen/NotifcationScreen';
import ExploreScreen from './Screens/ExploreScreen/ExploreScreen';


const Tab = createBottomTabNavigator();

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
      name="Profile" component={ProfileScreen}
      options = {{
        tabBarIcon: ({ color, size }) => (
          <FontAwesome5Icon name="user-alt" color={color} size={size} />
        ),
      }}/>
      
    </Tab.Navigator>
  );
}

export default MainStack;