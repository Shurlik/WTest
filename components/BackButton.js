import React from "react";
import { View, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { ScaledSheet } from "react-native-size-matters";

const BackButton = ({ navigation }) => {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => navigation.goBack()}
        >
            <View>
                <AntDesign
                    name="left"
                    size={25}
                    color="black"
                    style={styles.back}
                />
            </View>
        </TouchableOpacity>
    );
};

export default BackButton;

const styles = ScaledSheet.create({
    container: {
        width: "48@s",
        height: "48@s",
        position: "absolute",
        top: "15@vs",
        left: "15@s",
        backgroundColor: "#fff",
        borderRadius: 72,
        justifyContent: "center",
        alignItems: "center",
    },
    back: {
        paddingRight: "3@s",
    },
});
