import React from "react";
import {View,FlatList,TextInput} from "react-native";
import {connect} from 'react-redux';

import Notifications from './notifications/RepoCount';
import Repo from '../components/EachRepo';
import BaseStyle from '../constants/baseStyle';
import {getRepositories} from '../redux/actionCreators/repositories';

class Repositories extends React.Component {
    static navigationOptions = (props)=>{
        return {
            // tabBarLabel: `Repositories`,
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
        if(this.state.search){
            data = data.filter(each=>{
                return each.full_name.includes(this.state.search)
            });
        }
          return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <TextInput
                    placeholder='Search by repo name'
                    style={{borderWidth:1, width:BaseStyle.DEVICE_WIDTH}}
                    value={this.state.value}
                    onChangeText={(search)=>{this.setState({search})}}
                />
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

export default connect(mapStateToProps,{getRepositories})(Repositories);
