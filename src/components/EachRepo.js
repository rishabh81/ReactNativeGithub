import React from "react";
import {View, Text, StyleSheet} from 'react-native'
import BaseStyle from "../constants/baseStyle";

export default ({data})=>{
    return (
        <View style={styles.repoContainer}>
            <Text style={{fontSize: BaseStyle.FONT_SIZE_SUB_TITLE,color:BaseStyle.BLUE}}>{data.full_name}</Text>
            <Text style={styles.desc}>{data.description}</Text>
            <View style={{flexDirection: 'row', padding: (BaseStyle.DEVICE_WIDTH/100)}}>
                <Text style={styles.languageText}>{data.watchers_count}</Text>
                <Text style={styles.languageText}>{data.language}</Text>
            </View>
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
    desc:{
        fontSize: BaseStyle.FONT_SIZE_SMALL
    },
    languageText:{
        marginHorizontal: (BaseStyle.DEVICE_WIDTH/100),
        fontSize: BaseStyle.FONT_SIZE_SMALL
    }
});
