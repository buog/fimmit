import React, { useState, useEffect } from 'react';
// import * as firebase from 'firebase';
import auth from '@react-native-firebase/auth';

//navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//views
import SplashView from './src/Screens/SplashScreen/SplashScreen';
import AuthenticationStack from './src/Screens/AuthenticationScreens/AuthStack';
import MainStack from './src/MainStack';

const App = () => {
  const Stack = createStackNavigator();
  const [user, setUser] = useState();
  const [initializing, setInitializing] = useState(true);

  function onAuthStateChanged(user: any) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if(initializing) return (<SplashView />);
  if(!user){
    return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false}}>
      <Stack.Screen
            name = "auth"
            component = {AuthenticationStack}
            options = {{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
    )
  }
  return(
    <NavigationContainer>
        <MainStack />
    </NavigationContainer>
  )
}
export default App;