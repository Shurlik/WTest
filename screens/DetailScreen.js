import React from "react";
import { Text, View, Image, FlatList } from "react-native";
import BackButton from "../components/BackButton.js";
import ListItem from "../components/ListItem.js";
import UserData from "../components/UserData.js";
import ViewsData from "../components/ViewsData";
import { ScaledSheet } from "react-native-size-matters";
import { useSelector } from "react-redux";

const DetailScreen = (props) => {
    const username = props.route.params.item.username;
    const gifs = useSelector((state) => state.gifs.gifs);

    return (
        <View style={styles.container}>
            <View style={styles.bigImage}>
                <Image
                    style={styles.image}
                    source={{
                        uri: props.route.params.item.images.downsized_large.url,
                    }}
                    resizeMode="cover"
                />
                <ViewsData />
            </View>
            <UserData
                userName={username}
                // userId={} // Dont know how to get this data ((
                // userPick={}
            />
            <View style={styles.related}>
                <Text style={styles.relatedTitle}>Related GIFs</Text>
            </View>
            <FlatList
                data={gifs}
                renderItem={({ item }) => (
                    <ListItem item={item} navigation={props.navigation} />
                )}
                numColumns={2}
            />
            <BackButton navigation={props.navigation} />
        </View>
    );
};

export default DetailScreen;

const styles = ScaledSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#000",
        paddingHorizontal: "8@s",
    },
    bigImage: {
        marginTop: "8@vs",
        width: "330@s",
        height: "250@s",
        borderRadius: 24,
        overflow: "hidden",
    },
    image: {
        width: "100%",
        height: "100%",
    },
    related: {
        alignSelf: "flex-start",
        paddingLeft: "5@s",
    },
    relatedTitle: {
        marginTop: "27@vs",
        color: "#fff",
        fontSize: "17@s",
    },
});
