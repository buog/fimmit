import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    SafeAreaView
} from 'react-native';

const styles = StyleSheet.create({
});

const NotificationScreen = () => {
  return (
    <View style = {{flex: 1, backgroundColor: "white"}}>
        <SafeAreaView style = {{flex: 1,}}>
          <Text>hi</Text>
        </SafeAreaView>
    </View>
  );
}

export default NotificationScreen;