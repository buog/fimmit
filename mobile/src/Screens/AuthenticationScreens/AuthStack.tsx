import React from 'react';

//navigation
import { createStackNavigator } from '@react-navigation/stack';

import {
  StyleSheet,
} from "react-native";

import MainAuthView from './MainAuthScreen';
import OnboardingEmailScreen from './OnboardingEmailScreen';
import OnboardingPasswordScreen from './OnboardingPasswordScreen';
import OnboardingFullnameScreen from './OnboardingFullnameScreen';
import OnboardingUsernameScreen from './OnboardingUsernameScreen';

const Stack = createStackNavigator();

const AuthenticationStack = () => {
  return (
        <Stack.Navigator screenOptions={{ headerShown: false}}>
            <Stack.Screen name="main" component={MainAuthView} />
            <Stack.Screen name="email" component={OnboardingEmailScreen} />
            <Stack.Screen name="password" component={OnboardingPasswordScreen} />
            <Stack.Screen name="fullname" component={OnboardingFullnameScreen} />
            <Stack.Screen name="username" component={OnboardingUsernameScreen} />
        </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
});

export default AuthenticationStack;