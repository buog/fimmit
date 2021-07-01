import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    SafeAreaView,
    TouchableOpacity
} from 'react-native';

import FeatherIcon from 'react-native-vector-icons/Feather';

const styles = StyleSheet.create({
});

const SettingsScreen = () => {
  return (
    <View style = {{backgroundColor: "white", flex: 1}}>
        <SafeAreaView>
            <View style = {{flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
                <TouchableOpacity>
                  <FeatherIcon name="chevron-left" size = {40} color = "lightgray"/>
                </TouchableOpacity>
                <Text style = {{flex: 1,fontWeight: "600", fontSize: 17, textAlign: "center"}}>Settings</Text>
            </View>
        </SafeAreaView>
    </View>
  );
}

export default SettingsScreen;