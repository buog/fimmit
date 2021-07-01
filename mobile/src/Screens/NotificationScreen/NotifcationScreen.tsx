import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    SafeAreaView
} from 'react-native';

import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

const styles = StyleSheet.create({
  notificationCard: {
    flexDirection: "row",
    backgroundColor: "white",
    padding: 10,
    marginVertical: 10,
    alignItems: "center",
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

const NotificationScreen = () => {
  return (
    <View style = {{flex: 1, backgroundColor: "white"}}>
        <SafeAreaView style = {{flex: 1, margin: 5,}}>
          <View style = {{flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
            <Text style = {{flex: 1,fontWeight: "600", fontSize: 17, textAlign: "center"}}>Notifications</Text>
          </View>
          <View style = {styles.notificationCard}>
            <FontAwesomeIcon
              name = "user-circle" size = {25} color = "gray"/>
            <Text style = {{paddingLeft: 10,}}><Text style = {{fontWeight: "600"}}>James Lee </Text>liked your commit.</Text>
          </View>
        </SafeAreaView>
    </View>
  );
}

export default NotificationScreen;