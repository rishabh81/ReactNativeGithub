import React from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux'

const repoCount = ({count})=>{
    return (<View style={{flex:1, height:50, width:50}}>
        <Text style={{color:'#fff'}}>{count}</Text>
    </View>);
}

function mapStateToProps(state) {
    return {
        count: state.overview.repoCount
    }
}

export default connect(mapStateToProps)(repoCount);
