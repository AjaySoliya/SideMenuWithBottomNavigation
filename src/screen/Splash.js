import React, {Component} from "react";
import {
    View,
    StyleSheet,
    Text,
    ImageBackground,
    AsyncStorage
} from 'react-native';
import { splash } from '../utils/constants';
import { StackActions, NavigationActions } from 'react-navigation';
 
export default class Splash extends Component {
    constructor(props) {
        super(props);
        console.disableYellowBox = true;
        this.state = {
            isLoading: true
         }
    }

    async componentDidMount() {
        const data = await this.performTimeConsumingTask();
        if (data !== null) {
          this.setState({ isLoading: false });
        }
      }

    performTimeConsumingTask = async() => {
    return new Promise((resolve) =>
        setTimeout(
        () => { 
                AsyncStorage.getItem('isUserLogin').then((isUserLogin) => {
                    if (isUserLogin === 'YES') {
                        this.goToNextView('SideMenu')
                    } else{
                        this.goToNextView('LoginScreen')
                    }
                }).catch((err)=>{
                    this.goToNextView('LoginScreen')
                })
            },
        2000
        )
    );
    }

    goToNextView = (screeName) => {
        this.props.navigation.dispatch(StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: screeName })],
        }));
        return;
    }

    render() {
        if (this.state.isLoading) {
            return (
                <ImageBackground source={splash} style={{ flex:1 }}  />
            )
        }
    }   
}

const styles = StyleSheet.create({
    mainViewStyle: {
        flex: 1,
        backgroundColor: 'red',
    },
    
});
