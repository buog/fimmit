import React, { useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';

import auth from '@react-native-firebase/auth';
import { StackNavigationProp } from '@react-navigation/stack';

const styles = StyleSheet.create({
    splashView: {
        backgroundColor: "white",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    title: {
        fontWeight: "bold",
        fontSize: 25,
    },
});

const SplashScreen = ({ navigation }: any) => {

    useEffect(() => {
        if(navigation){
            navigateToAuthOrMainScreen();
        }
    }, [navigation])

    const navigateToAuthOrMainScreen = () => {
        setTimeout(() => {
            const user = auth().currentUser;
            if(!user){
                navigation.reset({
                    index: 0,
                    routes: [{name: 'auth'}]
                });
            } else{
                navigation.reset({
                    index: 0,
                    routes: [{name: 'auth'}]
                });
            }
        }, 1000)
    }

  return (
    <View style = {styles.splashView}>
      <Text style = {styles.title}>💪 fimmit</Text>
    </View>
  );
}

export default SplashScreen;