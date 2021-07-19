import React from 'react'
import {Text, View, Button} from 'react-native'
import {ScaledSheet} from 'react-native-size-matters';

const DetailScreen = (props) => {
    return (
        <View style={styles.container}>
            <Text>Detail Screen</Text>
            <Button title={'Go Back'} onPress={() => props.navigation.goBack()}/>
        </View>
    )
}

export default DetailScreen

const styles = ScaledSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
