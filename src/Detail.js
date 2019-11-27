import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Detail extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <View style={styles.logoHeader}>
                    <Text style={{ textAlign: 'center' }}>Detail!</Text>
                    <Image
                        source={{ uri: 'http://healthykh.com/img/apple-icon-180x180.png' }}
                        style={{ resizeMode: 'cover', width: 100, height: 100 }}
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
    },
});
