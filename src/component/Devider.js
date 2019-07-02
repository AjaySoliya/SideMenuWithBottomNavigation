import React from 'react';
import {View} from 'react-native';


const Devider = (props) => {
    return (
        <View style={[styles.containerViewStyle, props.style]}>
            {props.children}
        </View>
    );
};

const styles = {
    containerViewStyle: {
        backgroundColor: 'white',
        height: 0.5
    }
};

export {Devider};
