import React, { Component } from "react";

import { StyleSheet, Text, View, Image, TextInput, TouchableWithoutFeedback, KeyboardAvoidingView, Keyboard } from 'react-native';
import { Button } from 'react-native-elements';
import { f, auth, db } from '../config/firebase';
import colors from "../colors";

export default class SignIn extends Component {
    static navigationOptions = {
        title: 'Sign In',
        headerTitleStyle: { fontSize: 25 },
        headerStyle: { backgroundColor: colors.normal },
        headerTintColor: '#FFF'
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
        auth.createUserWithEmailAndPassword(email, password).then((userObj) => {
            this.setState({
                userEmail: '<Text></Text>',
                userPassword: '<Text></Text>'
            });
        }).catch((error) => {
            console.log('Error', error);
        });
    }

    loginUser = async (email, password) => {
        if (email != '' && password != '') {
            // can write login code
            /*try {
                let user = await auth.signInWithAndPassword(email, password);
                if (user) {
                    this.props.navigation.navigate('Home');
                }
            } catch {
                console.log('error');
            }*/
            //just test design
            this.props.navigation.navigate('Home');
        } else {
            // return to login form and alert message you missed user or password
            console.log(' Missing email or password');
        }
    }

    logoutUser = () => {
        auth.signOut().then(() => {
            this.setState({ isLoggedOut: true })
        }).catch((error) => {
            console.log('Error', error);
        });
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
                                <Text style={styles.textBig}>Sign in</Text>
                                <Text style={styles.textSmall}>with your email and password</Text>
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
                                buttonStyle={styles.loginButton}
                                onPress={() => this.loginUser(this.state.userEmail, this.state.userPassword)}
                                title="Continues"
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
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    },
    logoImage: {
        width: 250,
        height: 250,
    },
    loginFormView: {
        flex: 2
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
    loginButton: {
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
    }
});
