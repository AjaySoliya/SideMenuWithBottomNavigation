import { createDrawerNavigator } from 'react-navigation';
import HomeScreen from '../Home/Home';
import GoogleMapScreen from '../Home/GoogleMap';
import ProfileScreen from '../Home/Profile';
import Menu from './Menu';

export default SideMenu = createDrawerNavigator({
    HomeScreen,
    GoogleMapScreen,
    ProfileScreen,
    //IntroScreen
},{
    initialRouteName: 'HomeScreen',
    contentComponent: Menu,
    //drawerWidth: Constant.screenWidth*0.7
});
