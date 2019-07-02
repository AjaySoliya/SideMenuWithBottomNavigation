import React,{ Component } from 'react';
import {
  AsyncStorage,
  StyleSheet,
  ScrollView,
  View,
  Image,
  SafeAreaView,
  Text,
  blueColor,
} from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import { appColor, avatarImage } from '../../utils/constants';
import { Devider } from '../../component';
import { SideMenuView } from '../../component/SideMenuView';

export default class Menu extends Component {

    constructor(props) {
      super(props);
      console.disableYellowBox = true;
  }

  onMenuPress = (menuTapped) =>{
    if(menuTapped === 'Home'){
      this.props.navigation.navigate('HomeScreen')
    }else if(menuTapped === 'GoogleMap'){
      this.props.navigation.navigate('GoogleMapScreen')
    }else if(menuTapped === 'Profile'){
      this.props.navigation.navigate('ProfileScreen')
    }else{
      AsyncStorage.setItem('isUserLogin','')
      this.goToNextView('LoginScreen')
    }
  }

  goToNextView = (screeName) => {
    this.props.navigation.dispatch(StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: screeName })],
    }));
    return;
}

  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: appColor}}>
      <View style={{flex: 1, backgroundColor: 'blue'}}>
      <ScrollView scrollsToTop={false} style={styles.menu}>
        
        <View style={styles.avatarContainer}>
          <Image
            style={styles.avatar}
            source={avatarImage}
          />
          <View>
            <Text style={styles.name}>Ajay Soliya</Text>
            <Text style={styles.email}>test@gmail.com</Text>
          </View>
        </View>
        <Devider style={{ backgroundColor: appColor, width: '100%', height:0.5 }} />
        <SideMenuView menuTitle='Home' onPress={() => this.onMenuPress('Home')}/>
        <SideMenuView menuTitle='Google Map' onPress={() => this.onMenuPress('GoogleMap')}/>
        <SideMenuView menuTitle='Profile' onPress={() => this.onMenuPress('Profile')}/>
        <SideMenuView menuTitle='Logout' onPress={() => this.onMenuPress('Logout')}/>
      </ScrollView>
      </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    width: window.width,
    height: window.height,
    backgroundColor: '#fff',
    padding: 0,
  },
  avatarContainer: {
    marginBottom: 10,
    marginTop: 10,
    marginRight: 10,
    marginLeft: 10,
    flexDirection: 'row'
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  name: {
    left: 10,
    top: 10,
    fontSize: 18,
    color:blueColor
  },
  email:{
    left: 10,
    top: 15,
    fontSize: 16,
    color: '#8D8D8D'
  },
});
