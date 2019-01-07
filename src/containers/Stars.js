import React from "react";
import {View,FlatList,TextInput} from "react-native";
import {connect} from 'react-redux';

import Notifications from './notifications/RepoCount';
import Repo from '../components/EachRepo';
import {getRepositories} from '../redux/actionCreators/repositories';
class Stars extends React.Component {
    static navigationOptions = (props)=>{
        return {
            tabBarIcon: ({ tintColor }) => (

                <Notifications />
            ),
            headerTitleStyle :{textAlign: 'center',alignSelf:'center'},
            headerStyle:{
                backgroundColor:'white',
            },
        }
    };
    constructor(props){
        super(props);
        this.state = {
            search:''
        }
    }
    componentDidMount(){
        this.props.getRepositories();
    }

    render() {
        let data = this.props.repos;
                return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <FlatList
                    data={data}
                    renderItem={({item, key}) => <Repo key={key} data={item}/>}
                />
            </View>
        );
    }
}

function mapStateToProps(state){
    return {
        repos: state.repositories.repos,
    }
}

export default connect(mapStateToProps,{getRepositories})(Stars);
