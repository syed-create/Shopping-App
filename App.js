import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";
import ProductNavigator from "./navigation/ShopNavigator";
import { rootReducer } from "./store/combineReducer";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import { enableScreens } from "react-native-screens";
import { composeWithDevTools } from "redux-devtools-extension";
const store = createStore(rootReducer, composeWithDevTools());

const fetchFonts = () => {
    return Font.loadAsync({
        "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
        "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    });
};

enableScreens();

export default function App() {
    const [fontLoaded, setFontLoaded] = useState(false);
    if (!fontLoaded) {
        return (
            <AppLoading
                startAsync={fetchFonts}
                onFinish={() => {
                    setFontLoaded(true);
                }}
                onError={console.warn}
            />
        );
    }

    return (
        <Provider store={store}>
            <ProductNavigator />
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
