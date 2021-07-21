import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { ScaledSheet } from "react-native-size-matters";

const LIstItem = ({ item, navigation }) => {
    return (
        <TouchableOpacity
            onPress={() =>
                navigation.navigate("Detail", {
                    item: item,
                })
            }
        >
            <View style={styles.imageWrapper}>
                <Image
                    style={styles.image}
                    source={{
                        uri: item.images.downsized_still.url,
                    }}
                    resizeMode="cover"
                />
            </View>
        </TouchableOpacity>
    );
};

export default LIstItem;

const styles = ScaledSheet.create({
    image: {
        width: "100%",
        height: "100%",
    },
    imageWrapper: {
        margin: 5,
        width: "160@s",
        height: "160@s",
        borderRadius: 16,
        overflow: "hidden",
    },
});
