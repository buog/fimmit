import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Modal,
    SafeAreaView,
    TouchableOpacity,
    TextInput,
    ScrollView
} from 'react-native';

import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import UserPreview from './UserPreview';

const styles = StyleSheet.create({
  input: {
    fontSize: 17, paddingHorizontal: 10, color:"gray", fontWeight: "500"
  }
});

const SearchModal = (props: any) => {
  const [text, onChangeText] = React.useState("");
  return (
    <Modal
        animationType="fade"
        transparent={false}
        visible={props.displayModal}>
            <SafeAreaView>
              <View style = {{flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
                <TouchableOpacity onPress = {() => props.setDisplayModal(false)}>
                  <FeatherIcon name="chevron-left" size = {40} color = "lightgray"/>
                </TouchableOpacity>
                <View style = {{flexDirection: "row", backgroundColor: "#f5f5f5", padding: 10, borderRadius: 5,flex: 1, marginRight: 10,}}>
                  <FontAwesome5Icon name="search" size = {20} color = "lightgray"/>
                  <TextInput
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                    placeholder="Search"
                  />
                </View>
              </View>
              <ScrollView showsVerticalScrollIndicator = {false}>
                {Array.from(Array(10).keys()).map((value, index) => {
                  return(
                    <View style = {{margin: 10}} key = {index}>
                      <UserPreview />
                    </View>
                  )
                })}
              </ScrollView>
            </SafeAreaView>
    </Modal>
  );
}

export default SearchModal;