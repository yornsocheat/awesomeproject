import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from 'react-native';
import { ListItem } from 'react-native-elements';
import colors from '../colors';

const list = [
    {
        title: 'Profile',
        icon: 'perm-identity'
    },
    {
        title: 'Help',
        icon: 'help-outline'
    },
    {
        title: 'Privacy',
        icon: 'info-outline'
    },
    {
        title: 'About',
        icon: 'info-outline'
    },
    {
        title: 'Logout',
        icon: 'exit-to-app'
    },
]

export default class Settings extends Component {
    static navigationOptions = {
        title: 'Settings',
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
                <View style={styles.listItems}>
                    {
                        list.map((item, i) => (
                            <ListItem
                                key={i}
                                title={item.title}
                                leftIcon={{ name: item.icon }}
                                bottomDivider
                                chevron
                                onPress={() => this.props.navigation.navigate(item.title)}
                            />
                        ))
                    }
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
