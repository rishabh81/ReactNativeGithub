import React from 'react';
import {Connect} from 'react-redux'

const starsCount = ({count})=>{
    return (<View>
        <Text>{count}</Text>
    </View>);
}

function mapStateToProps(state) {
    return {
        count: state.overview.stars
    }
}

export default connect(mapStateToProps)(starsCount);
