import React, { Component } from "react";
import { StyleSheet, Text, View } from 'react-native';
import colors from '../colors';

export default class About extends Component {
    static navigationOptions = {
        title: 'About',
        headerTitleStyle: { fontSize: 25 },
        headerStyle: { backgroundColor: colors.normal },
        headerTintColor: '#FFF'
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logoHeader}>
                    <Text style={{ textAlign: 'center' }}>About!</Text>
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
