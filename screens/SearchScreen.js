import React from 'react'
import {Text, Button, View} from 'react-native'
import {ScaledSheet} from "react-native-size-matters";

const SearchScreen = (props) => {
    return (
        <View style={styles.container}>
            <Text>Search Screen</Text>
            <Button title={'Go to Detail'} onPress={
                () => props.navigation.navigate('Detail')
            }/>
        </View>
    )
}

export default SearchScreen

const styles = ScaledSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})


