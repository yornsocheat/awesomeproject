import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './src/Home';
import DetailScreen from './src/Detail';
import OrderScreen from './src/Order';
import CartScreen from './src/Cart';

import NotificationScreen from './src/Notification';
import SellerScreen from './src/Seller';
import SignInScreen from './src/SignIn';
import RegisterScreen from './src/Register';
import RegisterRequireScreen from './src/RegisterRequire';
import RegisterOptionalScreen from './src/RegisterOptional';
import RegisterActivatedScreen from './src/RegisterActivated';

import SettingsScreen from './src/Settings';
import ProfileScreen from './src/Profile';
import PrivacyScreen from './src/Privacy';
import AboutScreen from './src/About';
import HelpScreen from './src/Help';
import LogoutScreen from './src/Logout';

//createSwitchNavigator vs createStackNavigator
const HomeNavigator = createStackNavigator({
    Home: HomeScreen,
    Detail: DetailScreen,
    Order: OrderScreen,
    Cart: CartScreen,
    SignIn: SignInScreen,
    Register: RegisterScreen,
    RegisterRequire: RegisterRequireScreen,
    RegisterOptional: RegisterOptionalScreen,
    RegisterActivated: RegisterActivatedScreen,
}, { headerLayoutPreset: 'center' });

const SettingsNavigator = createStackNavigator({
    Settings: SettingsScreen,
    Profile: ProfileScreen,
    Privacy: PrivacyScreen,
    About: AboutScreen,
    Help: HelpScreen,
    Logout: LogoutScreen,
}, { headerLayoutPreset: 'center' });

const navRout = {
    Home: {
        screen: HomeNavigator
    },
    Notification: {
        screen: NotificationScreen
    },
    Seller: {
        screen: SellerScreen
    },
    Settings: {
        screen: SettingsNavigator
    },
};
const navConfig = {
    defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
            const { routeName } = navigation.state;
            let IconComponent = Ionicons;
            let iconName;
            if (routeName === 'Home') {
                iconName = `md-home`;
            } else if (routeName === 'Notification') {
                iconName = `md-notifications`;
            } else if (routeName === 'Seller') {
                iconName = `md-people`;
            } else if (routeName === 'Settings') {
                iconName = `md-settings`;
            }

            // You can return any component that you like here!
            return <IconComponent name={iconName} size={35} color={tintColor} />;
        },
    }),
    tabBarOptions: {
        activeTintColor: 'green',
        inactiveTintColor: 'gray',
        showLabel: false,
    },
};
const AppNavigator = createBottomTabNavigator(navRout, navConfig);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
    render() {
        return (
            <SafeAreaProvider>
                <AppContainer />
            </SafeAreaProvider>
        );
    }
}

const styles = StyleSheet.create({
    containerView: {
        flex: 1,
        justifyContent: 'center',
    },
});
