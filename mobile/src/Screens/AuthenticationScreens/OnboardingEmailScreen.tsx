import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    TextInput
} from 'react-native';

//icons
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

const styles = StyleSheet.create({
    emailOnboardingView: {
        flex: 1,
        padding: 10,
    },
    headerText: {
        fontSize: 25,
        color: "#3C3C3D",
        marginLeft: 5,
    },
    textInput: {
        backgroundColor: "white",
        paddingVertical: 15,
        paddingHorizontal: 10,
        fontSize: 17,
        borderRadius: 10,
        marginTop: 15,
        borderBottomColor: "lightgray",
        borderBottomWidth: 1.5,
    },
    continueButton: {
        marginTop: 25,
        backgroundColor: "#7367FF",
        padding: 10,
        borderRadius: 25,
    },
    continueButtonText: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 20,
        color: "white"
    },
    validText: {
        marginLeft: 10,
        marginTop: 5,
        color: "#ff5c5c"
    }
});

const OnboardingEmailScreen = ({navigation}: any) => {
    const [email, onChangeEmail] = React.useState("");

    const submitEmail = () => {
        navigation.navigate('password', {
            email,
        });
    }

    return (
        <SafeAreaView style = {{flex: 1, backgroundColor: "white",}}>
            <View style = {styles.emailOnboardingView}>
                <TouchableOpacity onPress = {() => navigation.navigate("main")}>
                    <FontAwesome5Icon name = "chevron-left" size = {30} color = "#e8e8e8"/>
                </TouchableOpacity>
                <View style = {{paddingHorizontal: 25, paddingVertical: 10,}}>
                    <Text style = {styles.headerText}>Enter your Email</Text>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={text => {onChangeEmail(text)}}
                        value={email}
                        maxLength = {320}
                        placeholder = "Email Address"
                        autoCapitalize = "none"
                        autoFocus = {true}
                    />
                    <TouchableOpacity style = {styles.continueButton} onPress = {submitEmail}>
                        <Text style = {styles.continueButtonText}>Continue</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default OnboardingEmailScreen;