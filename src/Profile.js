import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from 'react-native';
import colors from '../colors';

export default class Profile extends Component {
    static navigationOptions = {
        title: 'Profile',
        headerTitleStyle: { fontSize: 25 },
        headerStyle: { backgroundColor: colors.normal },
        headerTintColor: '#FFF'
    };

    constructor(props) {
        super(props);
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={styles.logoHeader}>
                    <Text style={{ textAlign: 'center' }}>Profile!</Text>
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
