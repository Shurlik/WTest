import React from "react";
import {StatusBar} from 'react-native'
import {
    createStackNavigator,
    CardStyleInterpolators,
} from "@react-navigation/stack";
import DetailScreen from "../screens/DetailScreen";
import SearchScreen from "../screens/SearchScreen";
import {NavigationContainer} from "@react-navigation/native";

const Stack = createStackNavigator();
const addConfig = {
    gestureDirection: "horizontal",
    gestureEnabled: true,
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
    detachPreviousScreen: false,
};

const MainNavigation = () => {
    return (
        <NavigationContainer>
            <StatusBar barStyle={'light-content'}/>
            <Stack.Navigator
                initialRouteName="SearchScreen"
                headerMode="hidden"
                screenOptions={() => addConfig}
            >
                <Stack.Screen name="Search" component={SearchScreen}/>
                <Stack.Screen name="Detail" component={DetailScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MainNavigation;
