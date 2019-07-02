import React, {Component} from 'react';
import {
    View,
    ActivityIndicator,
    StatusBar,
    StyleSheet,
} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import GoogleMap from '../screen/Home/GoogleMap';
import Home from '../screen/Home/Home';
import Profile from '../screen/Home/Profile';
import Login from '../screen/Register/Login';
import Signup from '../screen/Register/Signup';
import SideMenu from '../screen/SideMenu/SideMenu';

const HomeScreen = props => (
    <SideMenu navigation={props.navigation} />
  );
const HomeNavigationStack = createStackNavigator({
    HomeScreen: { screen: HomeScreen },
    GoogleMap: { screen: GoogleMap, title: 'GoogleMap' },
    Home: { screen: Home, title: 'Home' },
    Profile: { screen: Profile, title: 'Profile' },
  },{ headerMode: "none", navigationOptions: { gesturesEnabled: false } },
  );
  
  const LoginScreen = props => (
    <Login navigation={props.navigation} />
  );
  const LoginNavigationStack = createStackNavigator({
    LoginScreen: { screen: LoginScreen },
    Signup: { screen: Signup, title: 'Signup' },
  },{ headerMode: "none", navigationOptions: { gesturesEnabled: false } },
  );

export default class Mediator extends Component {

    constructor(props) {
        super(props);
        console.log("fesfbghjbfgj");
        
        console.disableYellowBox = true;
        // this.checkForInitialScreen();
        this.state = { loading: true,screenName: 'login' };
    }

    
    

    render() {
        return (
            <View style={styles.container}>
            {
                this.state.screenName === "loader" && (<ActivityIndicator/>)
            }
            {
                this.state.screenName === "login" && (<LoginNavigationStack/>)
            }
            {
                this.state.screenName === "Home" && (<HomeNavigationStack/>)
            }
            <StatusBar barStyle="default"/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});