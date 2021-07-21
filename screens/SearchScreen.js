import React, { useEffect } from "react";
import { View, FlatList, Text, ActivityIndicator } from "react-native";
import { GIF_URL, TREND_GIF_URL } from "../utils/api";
import SearchArea from "../components/SearchArea";
import ListItem from "../components/ListItem";
import { ScaledSheet } from "react-native-size-matters";
import { useSelector, useDispatch } from "react-redux";
import { saveGifs, setLoaded } from "../store/Gifs/actions";

const SearchScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const gifs = useSelector((state) => state.gifs.gifs);
    const term = useSelector((state) => state.gifs.term);
    const loaded = useSelector((state) => state.gifs.loaded);

    async function fetchGifs(rand) {
        dispatch(setLoaded(false));
        const link =
            rand === undefined ? `${GIF_URL}&q=${term}` : `${TREND_GIF_URL}`; // if from start or field is empty - loading trend gifs
        try {
            const resJson = await fetch(link);
            const res = await resJson.json();
            dispatch(saveGifs(res.data));
        } catch (error) {
            console.warn(error);
        }
        dispatch(setLoaded(true));
    }

    useEffect(() => {
        fetchGifs(true);
    }, []);

    return (
        <View style={styles.container}>
            <SearchArea fetchGifs={fetchGifs} />
            {!loaded && (
                <View style={{ flex: 1, justifyContent: "center" }}>
                    <ActivityIndicator
                        size={"large"}
                        color="rgba(255,255,255,.5)"
                    />
                </View>
            )}
            {loaded && (
                <View>
                    {gifs.length === 0 && !!term && (
                        <View style={styles.emptySearch}>
                            <Text style={{ color: "white" }}>
                                No results for:{" "}
                                <Text
                                    style={{
                                        fontWeight: "bold",
                                        color: "white",
                                    }}
                                >
                                    “{"{"}
                                    {term}
                                    {"}"}”
                                </Text>
                            </Text>
                        </View>
                    )}
                    <FlatList
                        data={gifs}
                        renderItem={({ item }) => (
                            <ListItem item={item} navigation={navigation} />
                        )}
                        numColumns={2}
                    />
                </View>
            )}
        </View>
    );
};

export default SearchScreen;

const styles = ScaledSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        paddingHorizontal: "8@s",
        backgroundColor: "#000",
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
    },
    imageWrapper: {
        margin: 10,
        width: "150@s",
        height: "150@s",
        borderRadius: 16,
        overflow: "hidden",
    },
    emptySearch: {
        flexShrink: 1,
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
    },
});
