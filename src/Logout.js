import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Logout extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logoHeader}>
                    <Text style={{ textAlign: 'center' }}>Logout!</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
});
