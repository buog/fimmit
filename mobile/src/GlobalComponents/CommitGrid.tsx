import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    FlatList
} from 'react-native';

const styles = StyleSheet.create({
    commit: {
        width: 10,
        height: 10,
        backgroundColor: "#f5f5f5",
        borderRadius: 2.5,
        margin: 1,
    },
    commitFill: {
        backgroundColor: "#00FFBF"
    }
});

const CommitGrid = () => {
    const renderItem = ({ item }: any) => (
        <View key = {item}>
            <View style = {styles.commit}></View>
            <View style = {styles.commit}></View>
            <View style = {[styles.commit, styles.commitFill]}></View>
            <View style = {styles.commit}></View>
            <View style = {styles.commit}></View>
            <View style = {[styles.commit, styles.commitFill]}></View>
            <View style = {styles.commit}></View>
        </View>
    );
  return (
    <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        inverted data={Array.from(Array(200).keys())}
        renderItem={renderItem}
        keyExtractor={(item: any) => item} />
      
  );
}

export default CommitGrid;