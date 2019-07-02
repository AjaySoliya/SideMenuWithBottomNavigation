import React from 'react';
import {TextInput, View, Text} from 'react-native';
import { blueColor } from '../utils/constants';

const Input = ({ value, onChangeText, placeholder, secureTextEntry, onEndEditing, errorMessage, keyboardType, editable, selectTextOnFocus, isFromProfile }) => {
    const { textInputStyle, textInputProfileStyle ,containerStyle} = styles;
    return (
        <View style={{flex: 1, height: 60, marginRight:5}}>
            <View style={{ height: errorMessage ? 35 : 60}}>
                <TextInput
                    secureTextEntry={secureTextEntry}
                    placeholder={placeholder}
                    autocorrect={false}
                    value={value}
                    onChangeText={onChangeText}
                    onEndEditing={onEndEditing}
                    style={textInputStyle}
                    placeholderTextColor={blueColor}
                    keyboardType={keyboardType}
                    editable={editable}
                    selectTextOnFocus={selectTextOnFocus}
                />
            </View>
            {(errorMessage !== '' &&
                <Text style={{ color: '#FF5F5F', fontSize: 16 }} >{errorMessage}</Text>
            )}
        </View>

    );
};

const styles = {
    textInputStyle: {
        fontSize: 16,
        flex: 1,
        color: blueColor,
    }, 
    textInputProfileStyle: {
        fontSize: 16,
        flex: 1,
        color: blueColor,
        backgroundColor: '#D9D9D9'
    },
    containerStyle: {
        height:70,
        paddingleft: 20,
        flex:1,
        flexDirection: 'row',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'grey',
        backgroundColor: '#D9D9D9'
    }
};

export {Input};
