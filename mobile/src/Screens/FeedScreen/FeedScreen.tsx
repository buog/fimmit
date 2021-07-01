import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    SafeAreaView,
    ScrollView,
    TouchableOpacity
} from 'react-native';

import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import CommitPreview from '../../GlobalComponents/CommitPreview';
import CreateCommitModal from '../../GlobalComponents/CreateCommitModal';

const styles = StyleSheet.create({
});

const FeedScreen = () => {
    const [createCommitModal, setCreateCommitModal] = useState(false);
    return (
        <View style = {{flex: 1, backgroundColor: "white"}}>
        <SafeAreaView style = {{flex: 1,}}>
                <View style = {{paddingBottom: 15, paddingHorizontal: 10, flexDirection: "row", alignItems: "center", borderBottomWidth: 2, borderBottomColor: "#f5f5f5"}}>
                    <Text style = {{fontSize: 25, fontWeight: "bold", color: "#00FFBF"}}>💪 fimmit</Text>
                    <View style = {{flex: 1}}></View>
                    <TouchableOpacity onPress = {() => setCreateCommitModal(true)}>
                        <FeatherIcon name = "plus-square" size = {30} color = "#3C3C3D"/>
                    </TouchableOpacity>
                </View>
                <ScrollView showsVerticalScrollIndicator = {false}>
                    {Array.from(Array(10).keys()).map((commit, index) => {
                        return(
                            <View style = {{flex: 1, backgroundColor: "white", marginVertical: 10, borderBottomWidth: 2, borderBottomColor: "#f5f5f5"}} key = {index}>
                                <View style = {{paddingVertical: 15,}}>
                                    <View style = {{flexDirection: "row", alignItems: "center", marginHorizontal: 10,}}>
                                            <FontAwesomeIcon
                                                name = "user-circle" size = {25} color = "gray"/>
                                        <Text style = {{paddingHorizontal: 5, fontSize: 15, fontWeight: "500"}}>jklee4365</Text>
                                    </View>
                                    <CommitPreview />
                                    <View style = {{margin: 5, flexDirection: "row", marginHorizontal: 15, alignItems: "center"}}>
                                        <Text style = {{fontSize: 20, color: "gray"}}>👍 </Text>
                                        <Text style = {{fontSize: 17, color: "gray", marginRight: 20,}}>5</Text>
                                        <Text style = {{fontSize: 20, color: "gray"}}>💬 </Text>
                                        <Text style = {{fontSize: 17, color: "gray", marginRight: 20,}}>2</Text>
                                    </View>
                                </View>
                            </View>
                        )
                    })}
                </ScrollView>
            </SafeAreaView>
            <CreateCommitModal
                displayModal = {createCommitModal}
                setDisplayModal = {setCreateCommitModal}/>
        </View>
    );
}

export default FeedScreen;