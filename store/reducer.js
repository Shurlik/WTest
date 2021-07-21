import { combineReducers } from "redux";
import { gifsReducer } from "./Gifs/reducers";

export default combineReducers({
    gifs: gifsReducer,
});
