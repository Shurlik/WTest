export const SAVE_GIFS = "SAVE_GIFS";
export const SAVE_TERM = "SAVE_TERM";
export const SET_LOADED = "SET_LOADED";

export const saveTerms = (items) => (dispatch) => {
    dispatch({
        type: SAVE_TERM,
        payload: items,
    });
};

export const saveGifs = (loaded) => (dispatch) => {
    dispatch({
        type: SAVE_GIFS,
        payload: loaded,
    });
};
export const setLoaded = (loaded) => (dispatch) => {
    dispatch({
        type: SET_LOADED,
        payload: loaded,
    });
};


