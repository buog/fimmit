import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    SafeAreaView,
    ScrollView,
    TouchableOpacity
} from 'react-native';

import auth from '@react-native-firebase/auth';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FeatherIcon from 'react-native-vector-icons/Feather';
import CommitGrid from '../../GlobalComponents/CommitGrid';
import CommitPreview from '../../GlobalComponents/CommitPreview';
import CreateCommitModal from '../../GlobalComponents/CreateCommitModal';

const styles = StyleSheet.create({
});

const ProfileScreen = ({navigation}: any) => {
    const [createCommitModal, setCreateCommitModal] = useState(false);
    useEffect(() => {
        const user = auth().currentUser;
        console.log(user);
    }, [])
    return (
        <View style = {{backgroundColor: "white", flex: 1}}>
        <SafeAreaView style = {{flex: 1,}}>
                <View style = {{paddingBottom: 15, flexDirection: "row", justifyContent: "flex-end"}}>
                    <TouchableOpacity onPress = {() => setCreateCommitModal(true)}>
                        <FeatherIcon name = "plus-square" size = {30} color = "#3C3C3D" style = {{marginHorizontal: 10}}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress = {() => navigation.navigate('settings')}>
                        <FeatherIcon name = "settings" size = {28} color = "#3C3C3D" style = {{marginHorizontal: 10}}/>
                    </TouchableOpacity>
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
                    <View style = {{paddingBottom: 20}}>
                        <CommitGrid />
                    </View>
                    <View>
                        {Array.from(Array(10).keys()).map((commit) => {
                            return(
                                <View style = {{flex: 1, backgroundColor: "white", marginVertical: 10, borderBottomWidth: 2, borderBottomColor: "#f5f5f5", alignItems: "center", paddingBottom: 20}}>
                                    <CommitPreview />
                                </View>
                            )
                        })}
                    </View>
                </ScrollView>
        </SafeAreaView>
            <CreateCommitModal
                displayModal = {createCommitModal}
                setDisplayModal = {setCreateCommitModal}/>
        </View>
    );
}

export default ProfileScreen;