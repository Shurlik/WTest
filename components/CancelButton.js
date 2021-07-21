import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { ScaledSheet } from "react-native-size-matters";

const CancelButton = ({ onPress }) => {
    return (
        <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
            <View style={styles.button}>
                <Text style={{ fontWeight: "bold" }}>Cancel</Text>
            </View>
        </TouchableOpacity>
    );
};

export default CancelButton;

const styles = ScaledSheet.create({
    button: {
        width: "80@s",
        height: "55@vs",
        backgroundColor: "#fff",
        color: "rgba(17, 24, 39, 0.87)",
        fontSize: "15@s",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,
        marginLeft: "8@s",
    },
});
