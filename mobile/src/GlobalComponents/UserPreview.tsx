import React from 'react';
import {
    StyleSheet,
    View,
    SafeAreaView,
    Text,
    TouchableOpacity,
    ScrollView
} from 'react-native';

import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
    profileCard: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "white",
        padding: 10,
        margin: 5,
        //shadow
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
    
        elevation: 3,
        borderRadius: 10,
        //shadow
    }
});

const UserPreview = () => {
  return (
    <TouchableOpacity style = {styles.profileCard}>
        <FontAwesomeIcon
            name = "user-circle" size = {50} color = "gray"/>
        <View style = {{paddingLeft: 10}}>
            <Text style = {{fontSize: 18}}>James Lee</Text>
            <Text style = {{color: "gray"}}>jklee4365</Text>
        </View>
        <View style ={{flex: 1}}></View>
        <View>
            <Text style = {{fontWeight: "500"}}>💪 150</Text>
        </View>
    </TouchableOpacity>
  );
}

export default UserPreview;