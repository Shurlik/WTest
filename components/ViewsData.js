import React from "react";
import { Text, View } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import { AntDesign } from "@expo/vector-icons";

const ViewsData = ({ views }) => {
    return (
        <View style={styles.container}>
            <AntDesign name="eye" size={27} color="#fff" />
            <Text style={styles.views}>
                {"XXXXXXX"} views
            </Text>
            {/* <Text style={styles.views}>{"XXXXXXX"} views</Text> //Cant find how to get views ((( */} 
        </View>
    );
};

export default ViewsData;

const styles = ScaledSheet.create({
    container: {
        flexDirection: "row",
        backgroundColor: "rgba(23, 24, 26, 0.38)",
        borderRadius: 24,
        paddingHorizontal: "12@s",
        paddingVertical: "10@vs",
        position: "absolute",
        bottom: "5@vs",
        alignSelf: "center",
    },
    views: {
        marginLeft: "8@s",
        color: "#fff",
        fontSize: "16@s",
    },
});
