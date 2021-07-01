import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Modal,
    KeyboardAvoidingView,
    TouchableOpacity,
    SafeAreaView,
    TextInput
} from 'react-native';


const styles = StyleSheet.create({
    cardModal: {
        backgroundColor: "white",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        padding: 10,
        //shadow
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        
        elevation: 24,
        //end shadow
    },
    createBtn: {
        backgroundColor: "#00FFBF",
        padding: 5,
        paddingHorizontal: 10,
        borderRadius: 25,
    },
    createBtnText: {
        fontSize: 17, color: "white",
        fontWeight: "bold",
    },
    tag:{
        padding: 5,
        paddingHorizontal: 10,
  
        margin: 2.5,
        marginVertical: 20,
        backgroundColor: "white",
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
    },
    bottomButton: {
        backgroundColor: "white",
        marginVertical: 10,
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
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    }
});

const CreateCommitModal = (props: any) => {
    const [description, setDescription] = useState("");
  return (
    <Modal
        animationType="slide"
        transparent={true}
        visible={props.displayModal}>
             <KeyboardAvoidingView style = {{flex: 1}} behavior={Platform.OS === "ios" ? "padding" : "height"}>
                <SafeAreaView />
                <TouchableOpacity style = {{flex: 1,}}  onPress={() => props.setDisplayModal(false)}>
                </TouchableOpacity>
                <View style = {styles.cardModal}>
                    <View style = {{flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 5}}>
                        <TouchableOpacity onPress = {() => props.setDisplayModal(false)}>
                            <Text style = {{fontSize: 17, fontWeight: "500", color: "gray"}}>Cancel</Text>
                        </TouchableOpacity>
                        <Text style = {{fontSize: 16, fontWeight: "500"}}>Create Commit</Text>
                        <TouchableOpacity style = {styles.createBtn}>
                            <Text style = {styles.createBtnText}>Create</Text>
                        </TouchableOpacity>
                    </View>
                    <View style = {{flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
                        <TouchableOpacity style = {styles.tag}><Text style = {{fontSize: 15,}}>🏃Cardio</Text></TouchableOpacity>
                        <TouchableOpacity style = {styles.tag}><Text style = {{fontSize: 15,}}>🏋️Weights</Text></TouchableOpacity>
                        <TouchableOpacity style = {styles.tag}><Text style = {{fontSize: 15,}}>⚽️Sports</Text></TouchableOpacity>
                        <TouchableOpacity style = {styles.tag}><Text style = {{fontSize: 15,}}>🧘Yoga</Text></TouchableOpacity>
                    </View>
                    <View style = {{backgroundColor: "#f5f5f5", paddingHorizontal: 10, borderRadius: 10, paddingVertical: 5,}}>
                        <TextInput
                            multiline={true}
                            numberOfLines={4}
                            onChangeText={(text: string) => setDescription(text)}
                            placeholder = "Describe your workout"
                            value={description}
                            maxHeight={200}
                            style = {{ height: 200}}/>
                    </View>
                    <View style = {{padding: 10,}}>
                        <View style = {styles.bottomButton}>
                            <Text style = {{fontSize: 16, color: "gray"}}>🕒 Workout time</Text>
                            <Text style = {{fontSize: 17, fontWeight: "500",color: "gray"}}>1 : 30</Text>
                        </View>
                        <View style = {styles.bottomButton}>
                            <Text style = {{fontSize: 16, color: "gray"}}>🍗 Consumed calories</Text>
                            <Text style = {{fontSize: 17, fontWeight: "500", color: "gray"}}>3000 cal</Text>
                        </View>
                        <View style = {styles.bottomButton}>
                            <Text style = {{fontSize: 16, color: "gray"}}>📍 Location</Text>
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
    </Modal>
  );
}

export default CreateCommitModal;