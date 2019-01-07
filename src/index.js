import React from 'react';
import {View} from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import {Provider} from 'react-redux';

import Overview  from './containers/Overview'
import Repositories from './containers/Repositories'
import Stars from './containers/Stars'
import store from './redux/reducers'
import AppHeader from './components/AppHeader'
const TabNavigator = createBottomTabNavigator({
    Overview, Repositories, Stars,
},{
    header: { visible: true },
    tabBarPosition: 'top',
    tabBarOptions: {
        tabStyle: {
         backgroundColor: 'black'
        },
        safeAreaInset:{
            top:'always'
        }
    },
});

const Navigator =  createAppContainer(TabNavigator);

export default class App extends React.Component{
    render() {
        return (
            <Provider store={store}>
                <View style={{flex:1}}>
                    <AppHeader/>
                    <Navigator/>
                </View>
            </Provider>
        )
    }
}
