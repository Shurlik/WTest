import React from "react";
import {Text, View, Image, Dimensions} from "react-native";
import BackButton from "../components/BackButton.js";
import ListItem from "../components/ListItem.js";
import UserData from "../components/UserData.js";
import ViewsData from "../components/ViewsData";
import {ScaledSheet} from "react-native-size-matters";
import {useSelector} from "react-redux";
import MasonryList from '@react-native-seoul/masonry-list'; //based on ScrollView (

const DetailScreen = (props) => {
    const username = props.route.params.item.username;
    const gifs = useSelector((state) => state.gifs.gifs);

    const [width, height] = [parseInt(props.route.params.item.images.downsized_still.width), parseInt(props.route.params.item.images.downsized_still.height)]

    return (
        <View style={styles.container}>
            <View style={styles.bigImage}>
                <Image
                    style={{
                        width: Dimensions.get("screen").width / Dimensions.get("screen").height > width / height ? "60%" : "100%", // Try to fix lo-o-o-o-ng images
                        aspectRatio: width / height
                    }}
                    source={{
                        uri: props.route.params.item.images.downsized_large.url,
                    }}
                    resizeMode="cover"
                />
                <ViewsData/>
            </View>
            <UserData
                userName={username}
                // userId={} // Dont know how to get this data ((
                // userPick={}
            />
            <View style={styles.related}>
                <Text style={styles.relatedTitle}>Related GIFs</Text>
            </View>
            <MasonryList
                data={gifs}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => (
                    <ListItem item={item} navigation={props.navigation} key={item.id}/>
                )}
                numColumns={2}
                showsVerticalScrollIndicator={false}
            />
            <BackButton navigation={props.navigation}/>
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
        borderRadius: 24,
        overflow: "hidden",
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
