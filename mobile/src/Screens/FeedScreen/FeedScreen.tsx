import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    SafeAreaView,
    ScrollView
} from 'react-native';

import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import CommitPreview from '../../GlobalComponents/CommitPreview';

const styles = StyleSheet.create({
});

const FeedScreen = () => {
  return (
    <View style = {{flex: 1, backgroundColor: "white"}}>
       <SafeAreaView style = {{flex: 1,}}>
            <View style = {{paddingBottom: 15, paddingHorizontal: 10, flexDirection: "row", alignItems: "center"}}>
                <Text style = {{fontSize: 25, fontWeight: "bold", color: "#00FFBF"}}>💪 fimmit</Text>
                <View style = {{flex: 1}}></View>
                <FeatherIcon name = "plus-square" size = {30} color = "#3C3C3D"/>
            </View>
            <ScrollView showsVerticalScrollIndicator = {false}>
                {Array.from(Array(10).keys()).map((commit, index) => {
                    return(
                        <View style = {{flex: 1, marginHorizontal: 5, marginVertical: 20,}} key = {index}>
                            <View style = {{flexDirection: "row", alignItems: "center"}}>
                                <FontAwesomeIcon
                                    name = "user-circle" size = {25} color = "gray"/>
                                <Text style = {{paddingHorizontal: 5, fontSize: 15, fontWeight: "500"}}>jklee4365</Text>
                            </View>
                            <CommitPreview />
                            <View style = {{margin: 5, flexDirection: "row"}}>
                                <FontAwesomeIcon
                                    name = "heart" size = {25} color = "red"/>
                                <Text style = {{fontSize: 20, paddingHorizontal: 10}}>💬</Text>
                            </View>
                        </View>
                    )
                })}
            </ScrollView>
        </SafeAreaView>
    </View>
  );
}

export default FeedScreen;