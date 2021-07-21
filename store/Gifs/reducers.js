import { SAVE_GIFS, SAVE_TERM, SET_LOADED } from "./actions";

const defaultState = {
    gifs: [],
    term: "",
    loaded: "false",
};

export const gifsReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SAVE_GIFS:
            return { ...state, gifs: action.payload };
        case SAVE_TERM:
            return { ...state, term: action.payload };
        case SET_LOADED:
            return { ...state, loaded: action.payload };
        default:
            return state;
    }
};
