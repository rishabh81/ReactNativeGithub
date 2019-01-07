import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import BaseStyle from '../constants/baseStyle'

export default (props)=>{
    return (<View style={styles.headerContainer}>
            <Text style={styles.headerTitle}>Github</Text>
        </View>
        );
}

const styles = StyleSheet.create({
    headerContainer: {
        height:(BaseStyle.DEVICE_HEIGHT/100)*8,
        width: BaseStyle.DEVICE_WIDTH,
        backgroundColor: BaseStyle.BLACK,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerTitle: {
        color:'#fff',
        fontSize:BaseStyle.FONT_SIZE_TITLE,
    }
});
