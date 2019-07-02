import React from 'react';
import { Text, View, Image, TouchableOpacity} from 'react-native';
import { menu, appColor } from '../utils/constants';
const Header = (props) => {
    const {textStyle} = styles;
    const isDisplayMenu = props.isDisplayMenu || false;
  return (
        <View style= {{ backgroundColor: appColor, height:50, flexDirection: 'row', alignItems: 'center',}}>
        {isDisplayMenu && (<TouchableOpacity onPress={props.onMenuPress} style= {{ width: 40, height:30 }} >
            <Image source={menu} style= {{ width: 40, height:30}}/>
        </TouchableOpacity>)}

        <Text style={textStyle}>{props.headerTitle}</Text>
        </View>
    );
};

const styles = {
    textStyle: {
        fontSize: 18,
        alignSelf: 'center',
        marginLeft: 20,
        fontColor: 'grey'
    },
};

export {Header};
