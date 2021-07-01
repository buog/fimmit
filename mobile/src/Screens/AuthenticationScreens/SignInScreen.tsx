import React, {useRef} from 'react';
import {
    StyleSheet,
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    Alert
} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import auth from '@react-native-firebase/auth';

const styles = StyleSheet.create({
    login: {
        flex: 1,
        justifyContent: "center",
        padding: 20,
    },
    header: {
        marginLeft: 15,
    },
    title: {
        fontWeight: "bold",
        fontSize: 25,
        textAlign: "center"
    },
    textInput: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        fontSize: 17,
        borderRadius: 10,
        marginVertical: 5,
        borderBottomColor: "white",
        borderBottomWidth: 3,
        color: "gray",
        fontWeight: "500"
    },
    loginBtn: {
        width: "100%",
        backgroundColor: "#7367FF",
        padding: 15,
        borderRadius: 25,
    },
    buttonText: {
        textAlign: "center",
        fontWeight: "bold",
        color: "white",
        fontSize: 15,
    }
});

const SignInScreen = ({navigation}:any) => {
    const [email, onChangeEmail] = React.useState("");
    const [password, onChangePassword] = React.useState("");

    const passwordInputRef = useRef();

    const loginUser = () => {
        auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          console.log('User account created & signed in!');
        })
        .catch(error => {
          if (error.code === 'auth/email-already-in-use') {
            console.log('That email address is already in use!');
          }
      
          if (error.code === 'auth/invalid-email') {
            console.log('That email address is invalid!');
          }
      
          console.error(error);
        });
    }

    return (
        <SafeAreaView style = {{flex: 1, backgroundColor: "white"}}>
            <TouchableOpacity style = {styles.header} onPress = {() => navigation.navigate("main")}>
                <FontAwesome5Icon name = "chevron-left" size = {30} color = "#e8e8e8"/>
            </TouchableOpacity>
            <View style = {styles.login}>
                <View>
                    <Text style = {styles.title}>💪 fimmit</Text>
                </View>
                <View style = {{paddingVertical: 50,}}>
                    <TextInput
                        style = {styles.textInput}
                        onChangeText={text => onChangeEmail(text)}
                        value={email}
                        placeholder = "Email"
                        autoCapitalize = "none"
                        autoFocus = {true}
                    />
                    <TextInput
                        style = {styles.textInput}
                        onChangeText={text => onChangePassword(text)}
                        value={password}
                        placeholder = "Password"
                        secureTextEntry={true}
                        autoCapitalize = "none"
                        autoFocus = {false}
                        ref = {passwordInputRef}
                    />
                </View>
                <TouchableOpacity style = {styles.loginBtn} onPress = {loginUser}>
                    <Text style = {styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default SignInScreen;