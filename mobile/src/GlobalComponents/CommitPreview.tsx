import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: "100%",
        padding: 5,
        marginVertical: 5,
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
    tag: {
        padding: 5,
        paddingHorizontal: 10,
  
        margin: 5,
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
    }
});

const CommitPreview = () => {
  return (
    <TouchableOpacity style = {styles.container}>
        <View style = {{flexDirection: "row", alignItems: "center"}}>
            <View style = {styles.tag}><Text style = {{fontSize: 15,}}>🏋️ Weights</Text></View>
            <View style = {styles.tag}><Text style = {{fontSize: 15,}}>🏃 Cardio</Text></View>
        </View>
        <Text style = {{padding: 10, fontSize: 15,}}>
            {`This is some description about the workout.

3x3 benchpress 225
3x10 squats
3x10 dips
3x10 cowbell`}

        </Text>
        <View style = {{padding: 10,}}>
            <View style = {{flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingVertical: 5,}}>
                <Text style = {{fontSize: 15}}>🍗 Consumed Calories</Text>
                <Text>3000 cal</Text>
            </View>
            <View style = {{flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingVertical: 5,}}>
                <Text style = {{fontSize: 15}}>🕒 Total workout time</Text>
                <Text>3:30</Text>
            </View>
        </View>
        <Text style = {{textAlign: "right", color: "gray"}}>Jan 1st 2021</Text>
    </TouchableOpacity>
  );
}

export default CommitPreview;