import React from 'react'
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";

import DetailScreen from "../screens/DetailScreen";
import SearchScreen from "../screens/SearchScreen";


const MainNavigation = createStackNavigator({
        Search: SearchScreen,
        Detail: DetailScreen,
    }, {
        defaultNavigationOptions: { headerShown: false}
    }
);


export default createAppContainer(MainNavigation)

