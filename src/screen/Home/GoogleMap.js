import React, {Component} from "react";
import {
    View,
    StyleSheet,
    Text,
    SafeAreaView
} from 'react-native';
import { Header } from '../../component/Header';
import { appColor } from '../../utils/constants';
import { DrawerActions } from 'react-navigation-drawer';

export default class GoogleMap extends Component {
    constructor(props) {
        super(props);
        console.disableYellowBox = true;
    }

    onMenuPress = () =>{
        this.props.navigation.dispatch(DrawerActions.toggleDrawer())
    }

    render() {
        return (
            <SafeAreaView style={{flex: 1, backgroundColor: appColor}}>
            <View style={styles.mainViewStyle}>
                <Header headerTitle='Google Map Screen' isDisplayMenu onMenuPress={this.onMenuPress}/>
                <Text style={{ justifyContent: 'center',alignItems: 'center' }}>Google Map</Text>
            </View>
            </SafeAreaView>
        );
    }   
}

const styles = StyleSheet.create({
    mainViewStyle: {
        flex: 1,
        backgroundColor: 'white',
    },
    
});
