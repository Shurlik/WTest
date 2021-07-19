import React from 'react'
import {createAppContainer, StackViewTransitionConfigs} from "react-navigation";
// import {createStackNavigator} from "react-navigation-stack";
import {createStackNavigator, CardStyleInterpolators} from '@react-navigation/stack';
import DetailScreen from "../screens/DetailScreen";
import SearchScreen from "../screens/SearchScreen";
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();
const addConfig = {
    // gestureResponseDistance: {
    //     horizontal: '100%',
    // },
    gestureDirection: 'horizontal',
    gestureEnabled: true,
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    detachPreviousScreen: false,
}

const MainNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="SearchScreen"
                headerMode="hidden"
                screenOptions={() => addConfig}>
                <Stack.Screen name="Search" component={SearchScreen}/>
                <Stack.Screen name="Detail" component={DetailScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}


export default MainNavigation

