import React from "react";
import { Text, View } from "react-native";
import { ScaledSheet } from "react-native-size-matters";

const UserData = ({ userName, userId, userPick }) => {
    return (
        <View style={styles.container}>
            <View style={styles.pick}></View>
            <View style={styles.user}>
                <Text style={styles.name}>By: {userName}</Text>
                <Text style={styles.id}>{userId}</Text>
            </View>
        </View>
    );
};

export default UserData;

const styles = ScaledSheet.create({
    container: {
        flexDirection: "row",
        alignSelf: 'flex-start',
        paddingLeft: '5@s',
    },
    name: {
        color: "#fff",
        fontSize: "18@s",
        textTransform: "capitalize",
    },
    user: {
        alignItems: 'flex-start'
    },
    id: {
        color: "#fff",
        fontSize: "12@s",
    },
});
