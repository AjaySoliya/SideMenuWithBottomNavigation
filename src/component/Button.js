import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

const Button = (props) => {
    const {buttonStyle, textStyle, radioButtonStyle} = styles;
    const isRadioButton = props.isRadioButton || false;
    return (
        <TouchableOpacity onPress={props.onPress} style={[isRadioButton ? radioButtonStyle : buttonStyle, props.style]}>
            <Text style={[textStyle]}>
                {props.children}
            </Text>
        </TouchableOpacity>
    );
};

const styles = {
    textStyle: {
        alignSelf: 'center',
        color: 'grey',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttonStyle: {
        margin:30,
        height: 60,
        alignSelf: 'stretch',
        backgroundColor: 'clear',
        borderRadius: 5,
        borderWidth: 0,
        borderColor: 'clear',
        justifyContent: 'center'
    },
    radioButtonStyle: {
        margin:30,
        height: 60,
        alignSelf: 'stretch',
        backgroundColor: 'clear',
        borderRadius: 30,
        borderWidth: 0,
        borderColor: 'clear',
        justifyContent: 'center',
        backgroundColor: 'green'
    }
};

export {Button};
