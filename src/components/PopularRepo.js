import React from "react";
import {View, Text, StyleSheet} from 'react-native'
import BaseStyle from "../constants/baseStyle";

export default ({title})=>{
    return (
        <View style={styles.repoContainer}>
            <Text style={styles.repoText}>
                {title}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    repoContainer:{
        borderBottomWidth:1,
        padding: (BaseStyle.DEVICE_HEIGHT/100)*2,
    },
    repoText:{
        fontWeight: BaseStyle.BOLD,
        fontSize:BaseStyle.FONT_SIZE_SUB_TITLE,
        color:BaseStyle.BLUE
    },
});
