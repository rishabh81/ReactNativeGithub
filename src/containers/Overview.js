import React from "react";
import {Text,
        View,
        StyleSheet,
        Image,
        TouchableOpacity,
        ScrollView
} from "react-native";
import {connect} from 'react-redux';

import BaseStyle from '../constants/baseStyle'
import PopularRepo from '../components/PopularRepo'

class Overview extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                <View style={[{flex:1.5},styles.section]}>
                    <View style={{flexDirection:'row'}}>
                        <Image style={styles.userImg} source={{uri:'https://avatars3.githubusercontent.com/u/7427552?s=460&v=4'}}/>
                        <View style={styles.subSection}>
                            <View style={styles.personalInfoContainer}>
                                <Text style={styles.titleBoldText}>{this.props.overview.name}</Text>
                                <Text style={styles.mediumText}>{this.props.overview.userName}</Text>
                            </View>
                            <View>
                                <Text style={styles.mediumText}>{this.props.overview.organisation}</Text>
                                <Text style={styles.mediumText}>{this.props.overview.location}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.personalInfoContainer}>
                        <Text style={styles.mediumText}>{this.props.overview.description}</Text>
                    </View>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Follow</Text>
                    </TouchableOpacity>

                </View>
                <View style={[{flex:2}, styles.section]}>
                    <Text style={styles.titleText}>Popular Repositories</Text>
                    <View style={styles.repoContainer}>
                        {
                            (this.props.overview.popularRepos).map((each,index) => <PopularRepo key={index} title={each.title}/>)
                        }
                    </View>
                </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor:'#1A1F19',
        justifyContent: 'center',
        alignItems: 'center'
    },
    section:{
        width: BaseStyle.DEVICE_WIDTH,
        borderTopWidth: .5,
        padding: (BaseStyle.DEVICE_HEIGHT/100)*2,
    },
    button:{
        width: (BaseStyle.DEVICE_WIDTH/100)*90,
        borderWidth: 1,
        padding: (BaseStyle.DEVICE_HEIGHT/100)*1.5,
        alignSelf: 'center',
        alignItems: 'center'
    },
    buttonText:{
        fontWeight: BaseStyle.BOLD,
        fontSize:BaseStyle.FONT_SIZE_SMALL,
        color:BaseStyle.BLACK
    },
    subSection: {
        padding: (BaseStyle.DEVICE_HEIGHT/100)
    },
    personalInfoContainer:{
        paddingTop: (BaseStyle.DEVICE_HEIGHT/100)*3,
        paddingBottom: (BaseStyle.DEVICE_HEIGHT/100)*2
    },
    descContainer:{
        paddingVertical: (BaseStyle.DEVICE_HEIGHT/100)*2
    },
    userImg:{
        height: (BaseStyle.DEVICE_HEIGHT/100)*20,
        width: (BaseStyle.DEVICE_WIDTH/100)*40,
        borderRadius: (BaseStyle.DEVICE_WIDTH/100)*1
    },
    titleBoldText:{
        fontSize:BaseStyle.FONT_SIZE_TITLE,
        fontWeight: BaseStyle.BOLD,
        color:BaseStyle.BLACK

    },
    titleText:{
        fontSize:BaseStyle.FONT_SIZE_TITLE,
        color:BaseStyle.BLACK

    },
    mediumText:{
        fontSize:BaseStyle.FONT_SIZE_SMALL,
    },
    repoContainer:{
        borderWidth:1,
        borderBottomWidth: 0,
    }
});

function mapStateToProps(state) {
    return {
        overview: state.overview
    };
}

export default connect(mapStateToProps)(Overview)
