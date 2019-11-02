import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './components/LoginScreen';

export default class App extends React.Component {
    render() {
        return (
            <LoginScreen />
        );
    }
}

const styles = StyleSheet.create({
    containerView: {
        flex: 1,
        justifyContent: 'center',
    },
});
