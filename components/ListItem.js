import React from "react";
import {View, Image, TouchableOpacity} from "react-native";
import {ScaledSheet} from "react-native-size-matters";

const ListItem = ({item, navigation}) => {
    const [width, height] = [parseInt(item.images.downsized_still.width), parseInt(item.images.downsized_still.height)]
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
                    style={{...styles.image, aspectRatio: width/height}}
                    source={{
                        uri: item.images.downsized_still.url,
                    }}
                    resizeMode="contain"
                />
            </View>
        </TouchableOpacity>
    );
};

const styles = ScaledSheet.create({
    image: {
        alignSelf: 'stretch',
        resizeMode: 'cover',

    },
    imageWrapper: {
        alignSelf: 'stretch',
        flex: 1,
        margin: 5,
        borderRadius: 16,
        overflow: "hidden",
    },
});

export default ListItem;
