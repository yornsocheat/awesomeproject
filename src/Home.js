import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Button } from 'react-native-elements';
import colors from '../colors';

export default class Home extends Component {
    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        title: 'Home',
        headerTitleStyle: { fontSize: 25 },
        headerStyle: { backgroundColor: colors.normal },
        headerTintColor: '#FFF'
    };

    render() {
        return (

            <View style={styles.container}>
                <View style={styles.logoHeader}>
                    <Image style={styles.logoImage} source={require('../assets/splash.png')} />
                </View>
                <View style={styles.loginForm}>
                    <Button
                        buttonStyle={styles.loginButton}
                        title="Sign in with email"
                        onPress={() => this.props.navigation.navigate('SignIn')}
                    />
                    <Button
                        buttonStyle={styles.loginButtonGoogle}
                        title="Sign in with google"
                        onPress={() => this.props.navigation.navigate('Detail')}
                    />
                    <Button
                        buttonStyle={styles.loginButtonFacebook}
                        title="Sign in with facebook"
                        onPress={() => this.props.navigation.navigate('SignIn')}
                    />
                    <View style={styles.textOr}>
                        <Text style={styles.textGray}>----- or -----</Text>
                    </View>
                    <Button
                        buttonStyle={styles.loginButton}
                        title="Create Account"
                        onPress={() => this.props.navigation.navigate('Register')}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginLeft: 20,
        marginRight: 20,
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
    loginButton: {
        backgroundColor: colors.normal,
        borderRadius: 5,
        height: 45,
        marginTop: 10,
    },
    loginButtonFacebook: {
        backgroundColor: colors.facebook,
        borderRadius: 5,
        height: 45,
        marginTop: 10,
    },
    loginButtonGoogle: {
        backgroundColor: colors.google,
        borderRadius: 5,
        height: 45,
        marginTop: 10,
    },
    loginForm: {
        flex: 2,
        textAlignVertical: 'bottom'
    },
    textOr: {
        justifyContent: 'center',
        alignItems: 'center',
        color: '#CCCCCC',
        paddingTop: 20,
        paddingBottom: 15,
    },
    textGray: {
        color: '#CCCCCC',
    },
});

