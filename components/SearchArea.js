import React from "react";
import { View, TextInput } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import CancelButton from "./CancelButton";
import { useSelector, useDispatch } from "react-redux";
import { saveGifs, saveTerms } from "../store/Gifs/actions";

const SearchArea = ({ fetchGifs }) => {
    const dispatch = useDispatch();
    const term = useSelector((state) => state.gifs.term);

    function onEdit(newTerm) {
        dispatch(saveTerms(newTerm));
        if (!!newTerm) {
            fetchGifs();
        } else {
            dispatch(saveGifs([]));
            fetchGifs(true);
        }
    }

    const cancelHandel = () => {
        dispatch(saveGifs([]));
        onEdit("");
    };
    
    return (
        <View style={styles.container}>
            <View style={styles.search}>
                <FontAwesome
                    name="search"
                    size={20}
                    color="rgba(255, 255, 255, 0.87)"
                    style={styles.searchIcon}
                />
                <TextInput
                    style={styles.textInput}
                    value={term}
                    placeholder={"Search GIPHY"}
                    onChangeText={(text) => onEdit(text)}
                    placeholderTextColor="rgba(255,255,255,0.6)"
                />

                {term.length > 0 && (
                    <Ionicons
                        name="close-circle"
                        size={24}
                        color="white"
                        style={styles.closeCircle}
                        onPress={cancelHandel}
                    />
                )}
            </View>
            {term.length > 0 && <CancelButton onPress={cancelHandel} />}
        </View>
    );
};

const styles = ScaledSheet.create({
    container: {
        marginTop: "8@vs",
        marginBottom: "16@vs",
        width: "100%",
        position: "relative",
        alignItems: "center",
        flexDirection: "row",
    },
    searchIcon: {
        marginLeft: "8@s",
    },
    textInput: {
        marginLeft: "5@s",
        flexShrink: 1,
        width: "100%",
        height: "55@vs",
        padding: 5,
        overflow: "hidden",
        color: "rgba(255, 255, 255, 0.87)",
    },
    search: {
        borderWidth: 1,
        borderColor: "rgba(255, 255, 255, 0.12)",
        borderRadius: 16,
        backgroundColor: "#17181A",
        flexShrink: 1,
        alignItems: "center",
        flexDirection: "row",
    },
    closeCircle: {
        marginRight: 18,
    },
});

export default SearchArea;
