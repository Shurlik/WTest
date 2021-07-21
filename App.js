import React from "react";
import MainNavigation from "./navigation/PageNavigation";
import { Provider } from "react-redux";
import store from './store/store'

export default function App() {
    return (
        <Provider store={store}>
            <MainNavigation />
        </Provider>
    );
}
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
