import React, { useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    SafeAreaView,
    ScrollView
} from 'react-native';

import auth from '@react-native-firebase/auth';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FeatherIcon from 'react-native-vector-icons/Feather';
import CommitGrid from '../../GlobalComponents/CommitGrid';
import CommitPreview from '../../GlobalComponents/CommitPreview';

const styles = StyleSheet.create({
});

const ProfileScreen = () => {
    useEffect(() => {
        const user = auth().currentUser;
        console.log(user);
    }, [])
  return (
    <View style = {{backgroundColor: "white", flex: 1, padding: 5,}}>
      <SafeAreaView style = {{flex: 1,}}>
            <View style = {{paddingBottom: 15, flexDirection: "row", justifyContent: "flex-end"}}>
                <FeatherIcon name = "plus-square" size = {30} color = "#3C3C3D" style = {{marginHorizontal: 10}}/>
                <FeatherIcon name = "settings" size = {28} color = "#3C3C3D" style = {{marginHorizontal: 10}}/>
            </View>
            <ScrollView showsVerticalScrollIndicator = {false}>
                <View>
                    <View style = {{alignItems: "center", marginBottom: 10,}}>
                        <FontAwesomeIcon
                            name = "user-circle" size = {75} color = "gray"/>
                        <Text style = {{fontSize: 20, paddingVertical: 2.5, fontWeight: "500", textAlign: "center"}}>James</Text>
                        <Text style = {{fontSize: 15, color: "gray", textAlign: "center"}}>jklee4365</Text>
                        <Text style = {{textAlign: "center", paddingTop: 10,}}>I bench 1 plate! LETS GO!</Text>
                    </View>
                    <View style = {{flexDirection: "row", margin: 10,}}>
                        <View style = {{flex: 1, alignItems: "center"}}>
                            <Text style = {{fontWeight: "500", fontSize: 17,}}>50</Text>
                            <Text>👀 Followers</Text>
                        </View>
                        <View style = {{flex: 1, alignItems: "center"}}>
                            <Text style = {{fontWeight: "500", fontSize: 17,}}>50</Text>
                            <Text>👣 Following</Text>
                        </View>
                        <View style = {{flex: 1, alignItems: "center"}}>
                            <Text style = {{fontWeight: "500", fontSize: 17,}}>150</Text>
                            <Text>💪 Commits</Text>
                        </View>
                    </View>
                </View>
                <View>
                    <CommitGrid />
                </View>
                <View style = {{flex: 1, alignItems: "center", margin: 10}}>
                    <CommitPreview />
                    <CommitPreview />
                    <CommitPreview />
                    <CommitPreview />
                </View>
            </ScrollView>
      </SafeAreaView>
    </View>
  );
}

export default ProfileScreen;