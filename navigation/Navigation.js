import { createStackNavigator, createAppContainer } from 'react-navigation';

import SplashScreen from '../src/screen/Splash';
import LoginScreen from '../src/screen/Register/Login';
import HomeScreen from '../src/screen/Home/Home';
import GoogleMapScreen from '../src/screen/Home/GoogleMap';
import ProfileScreen from '../src/screen/Home/Profile';
import SideMenu from '../src/screen/SideMenu/SideMenu';

const AppNavigator = createStackNavigator({
   SplashScreen,
   LoginScreen,
   HomeScreen,
   GoogleMapScreen,
   ProfileScreen,
   SideMenu,
},{
    headerMode: 'none',
    initialRouteName: 'SplashScreen'
});

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;