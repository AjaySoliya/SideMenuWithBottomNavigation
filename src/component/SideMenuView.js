import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import { Devider } from '../component';
import { appColor } from '../utils/constants';

const SideMenuView = (props) => {
    return (
        <View style={[styles.containerStyle, props.style]}>
            <TouchableOpacity onPress={props.onPress} style={{ height:60, justifyContent: 'center' }}>
            <Text style={styles.textStyle}>
                {props.menuTitle}
            </Text>
            </TouchableOpacity>
            <Devider style={{ backgroundColor: appColor, width: '100%', height:0.5 }} />
        </View>
    );
};

const styles = {
    containerStyle: {
        borderBottomWidth: 0,
        backgroundColor: 'clear',
        borderColor: '#ddd',
    },
    textStyle: {
        fontSize: 18,
        fontColor: 'grey',
        textAlign: 'center',
    },
};

export {SideMenuView};
