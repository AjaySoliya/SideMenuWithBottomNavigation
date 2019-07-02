import React, {Component} from "react";
import {
    View,
    StyleSheet,
    Text,
    SafeAreaView,
    AsyncStorage,
    Alert
} from 'react-native';
import { Header, Card, CardSection, Input, Button } from '../../component';
import { appColor, blueColor } from '../../utils/constants';
import { StackActions, NavigationActions } from 'react-navigation';
export default class Login extends Component {
    constructor(props) {
        super(props);
        console.disableYellowBox = true;
        this.state = {
            email: '',
            password: '',
        };
    }

    handleChange = (value, field) => {
        this.setState({[field]: value});
    };

    onLoginPress = () => {
        const { email,password } = this.state;
        if(email !== "" && password !== ""){
            AsyncStorage.setItem('isUserLogin','YES')
            this.props.navigation.dispatch(StackActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({ routeName: 'SideMenu' })],
            }));
        }else{
            Alert.alert(
                'Message',
                'Please enter all detail',
                [
                  {text: 'OK', onPress: () => console.log('OK Pressed')},
                ],
                {cancelable: false},
              );
        }
    };

    render() {
        const { email, password } = this.state;
        return (
            <SafeAreaView style={{flex: 1, backgroundColor: appColor}}>
            <View style={styles.mainViewStyle}>
                <Header headerTitle='Login' onMenuPress={this.onMenuPress}/>
                <View style={{ justifyContent: 'center', flexDirection: 'column', flex:1}}>
                    <Card style={styles.textFiledCardStyle}>
                        <CardSection style={styles.textFiledCardSectionStyle}>
                            <Input
                                placeholder="Enter your email"
                                onChangeText={(text) => this.handleChange(text, 'email')}
                                value={email}
                                keyboardType='email-address'
                                autoCorrect={false}
                                autoCapitalize='none'
                            />
                        </CardSection>
                    </Card>
                    <Card style={styles.textFiledCardStyle}>
                        <CardSection style={styles.textFiledCardSectionStyle}>
                            <Input
                                placeholder="Enter your password"
                                onChangeText={(text) => this.handleChange(text, 'password')}
                                value={password}
                                autoCorrect={false}
                                autoCapitalize='none'
                                secureTextEntry
                                keyboardType='default'
                            />
                        </CardSection>
                    </Card>
                    <Button isRadioButton style={{ backgroundColor: 'clear', borderWidth:1, borderColor: appColor, }} onPress={this.onLoginPress}>Login</Button>
                </View>    
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
    textFiledCardStyle: {
        height: 60,
        borderRadius: 10,
        shadowColor: blueColor,
        shadowOpacity: 0.2,
        marginLeft: 40,
        marginRight: 40,
        elevation: 10,
    },
    textFiledCardSectionStyle: {
        height: 60,
        alignItems: 'center',
        paddingLeft: 10
    },
});
