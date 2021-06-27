import React from 'react';
import {
    StyleSheet,
    View,
    SafeAreaView,
    Text,
    TouchableOpacity,
    ScrollView
} from 'react-native';

import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import CommitPreview from '../../GlobalComponents/CommitPreview';

const styles = StyleSheet.create({
  profileCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
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

const ExploreScreen = () => {
  return (
    <View style = {{flex: 1, backgroundColor: "white"}}>
      <SafeAreaView style = {{flex: 1,}}>
        <View style = {{paddingBottom: 15, flexDirection: "row", alignItems: "center", marginHorizontal: 5,}}>
            <View style = {{flexDirection: "row", backgroundColor: "#f5f5f5", padding: 10, borderRadius: 5,flex: 1}}>
              <FontAwesome5Icon name="search" size = {20} color = "lightgray"/>
              <Text style = {{fontSize: 17, paddingHorizontal: 10, color:"lightgray", fontWeight: "500"}}>Search</Text>
            </View>
        </View>
        <ScrollView showsVerticalScrollIndicator= {false} style = {{padding: 5,}}>
        {Array.from(Array(10).keys()).map((commit, index) => {
          return(
            <View style = {{marginVertical: 15}} key = {index}>
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
              <CommitPreview />
            </View>
          )
        })}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

export default ExploreScreen;