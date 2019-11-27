import React, { Component } from "react";

import { StyleSheet, Text, Image, View, TextInput, TouchableWithoutFeedback, KeyboardAvoidingView, Keyboard } from 'react-native';
import { Button } from 'react-native-elements';
import { f, auth, db } from '../config/firebase';
import colors from "../colors";

export default class Register extends Component {
    static navigationOptions = {
        title: 'Create Account',
        headerTitleStyle: { fontSize: 25 },
        headerStyle: { backgroundColor: colors.normal },
        headerTintColor: '#FFF',
    };

    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            isLoggedOut: false,
            userEmail: '',
            userPassword: '',
        }

        f.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ isLoggedIn: true });
            } else {
                this.setState({ isLoggedOut: true });
            }
        })

    }

    registerUser = (email, password) => {

        if (email != '' && password != '') {
            /*auth.createUserWithEmailAndPassword(email, password).then((userObj) => {
                this.setState({
                    userEmail: '<Text></Text>',
                    userPassword: '<Text></Text>'
                });
                this.props.navigation.navigate('Profile');
            }).catch((error) => {
                console.log('Error', error);
            });*/
        } else {
            this.props.navigation.navigate('RegisterRequire');
        }
    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.containerView} behavior="padding">
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.loginScreenContainer}>
                        <View style={styles.logoHeader}>
                            <Image style={styles.logoImage} source={require('../assets/splash.png')} />
                        </View>
                        <View style={styles.loginFormView}>
                            <View style={styles.textTitles}>
                                <Text style={styles.textBig}>Create</Text>
                                <Text style={styles.textSmall}>an account with your email and password</Text>
                            </View>
                            <TextInput
                                placeholder="Email"
                                placeholderColor="#c4c3cb"
                                style={styles.loginFormTextInput}
                                onChangeText={(text) => this.setState({ userEmail: text })}
                            />
                            <TextInput
                                placeholder="Password"
                                placeholderColor="#c4c3cb"
                                style={styles.loginFormTextInput} secureTextEntry={true}
                                onChangeText={(text) => this.setState({ userPassword: text })}
                            />
                            <Button
                                buttonStyle={styles.registerButton}
                                onPress={() => this.registerUser(this.state.userEmail, this.state.userPassword)}
                                title="Next"
                            />

                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    containerView: {
        flex: 1,
        justifyContent: 'center',
        marginLeft: 20,
        marginRight: 20,
    },
    loginScreenContainer: {
        flex: 1,
    },
    logoHeader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    logoImage: {
        width: 250,
        height: 250,
    },
    logoText: {
        fontSize: 40,
        fontWeight: "800",
        marginTop: 150,
        marginBottom: 30,
        textAlign: 'center',
    },
    loginFormView: {
        flex: 1
    },
    loginFormTextInput: {
        height: 43,
        fontSize: 14,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#eaeaea',
        backgroundColor: '#fafafa',
        paddingLeft: 10,
        marginTop: 5,
        marginBottom: 5,

    },
    registerButton: {
        backgroundColor: colors.normal,
        borderRadius: 5,
        height: 45,
        marginTop: 10,
    },
    textBig: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    textSmall: {
        fontSize: 16,
        fontWeight: 'normal',
        marginBottom: 20,
    },
});
