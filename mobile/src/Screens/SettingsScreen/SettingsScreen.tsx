import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    SafeAreaView,
    TouchableOpacity
} from 'react-native';

import FeatherIcon from 'react-native-vector-icons/Feather';

import auth from '@react-native-firebase/auth';

const styles = StyleSheet.create({
});

const SettingsScreen = ({navigation}: any) => {
  const logout = () => {
    console.log("logout")
    auth().signOut();
  }

  return (
    <View style = {{backgroundColor: "white", flex: 1}}>
        <SafeAreaView style = {{flex: 1}}>
            <View style = {{flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
                <TouchableOpacity onPress = {() => navigation.navigate("profile")}>
                  <FeatherIcon name="chevron-left" size = {40} color = "lightgray"/>
                </TouchableOpacity>
                <Text style = {{flex: 1,fontWeight: "600", fontSize: 17, textAlign: "center"}}>Settings</Text>
                <View style = {{width: 40}}>
                </View>
            </View>
            <View style = {{flex: 1}}>
              <TouchableOpacity style = {{flexDirection: "row", alignItems: "center", marginVertical: 10}}>
                <FeatherIcon name = "alert-octagon" size = {20} color = "#3C3C3D" style = {{marginHorizontal: 10}}/>
                <Text style = {{fontSize: 16, fontWeight: "500"}}>Help</Text>
                <View style = {{flex: 1}}></View>
                <FeatherIcon name = "chevron-right" size = {25} color = "#3C3C3D" style = {{marginHorizontal: 10}}/>
              </TouchableOpacity>
              <TouchableOpacity style = {{flexDirection: "row", alignItems: "center", marginVertical: 10}}>
                <FeatherIcon name = "clipboard" size = {20} color = "#3C3C3D" style = {{marginHorizontal: 10}}/>
                <Text style = {{fontSize: 16, fontWeight: "500"}}>About</Text>
                <View style = {{flex: 1}}></View>
                <FeatherIcon name = "chevron-right" size = {25} color = "#3C3C3D" style = {{marginHorizontal: 10}}/>
              </TouchableOpacity>
              <TouchableOpacity style = {{flexDirection: "row", alignItems: "center", marginVertical: 10}}>
                <FeatherIcon name = "zap" size = {20} color = "#3C3C3D" style = {{marginHorizontal: 10}}/>
                <Text style = {{fontSize: 16, fontWeight: "500"}}>FAQ</Text>
                <View style = {{flex: 1}}></View>
                <FeatherIcon name = "chevron-right" size = {25} color = "#3C3C3D" style = {{marginHorizontal: 10}}/>
              </TouchableOpacity>
              <View style = {{flex: 1}}></View>
              <TouchableOpacity style = {{flexDirection: "row", alignItems: "center", marginVertical: 10}} onPress = {logout}>
                <FeatherIcon name = "power" size = {20} color = "#3C3C3D" style = {{marginHorizontal: 10}}/>
                <Text style = {{fontSize: 16, fontWeight: "500"}}>Logout</Text>
                <View style = {{flex: 1}}></View>
                <FeatherIcon name = "chevron-right" size = {25} color = "#3C3C3D" style = {{marginHorizontal: 10}}/>
              </TouchableOpacity>
            </View>
        </SafeAreaView>
    </View>
  );
}

export default SettingsScreen;