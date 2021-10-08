import { createStackNavigator } from "@react-navigation/stack";
import Colors from "../constants/Colors";
import ProductsOverviewScreen from "../screens/shop/ProductsOverviewScreen";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import ProductDetailsScreen from "../screens/shop/ProductDetailsScreen";
import { Button, View } from "react-native";
import {
    HeaderButtons,
    Item,
    OverflowMenuProvider,
} from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/UI/HeaderButton";
import ProductsCartScreen from "../screens/shop/ProductsCartScreen";
const Stack = createStackNavigator();
const defaultScreenOptions = {
    headerStyle: {
        backgroundColor: Colors.primaryColor,
    },
    headerTitleStyle: {
        fontFamily: "open-sans-bold",
    },
    headerTintColor: "white",
};
function ProductNavigator() {
    return (
        <NavigationContainer>
            <OverflowMenuProvider>
                <Stack.Navigator screenOptions={defaultScreenOptions}>
                    <Stack.Screen
                        name="Products"
                        component={ProductsOverviewScreen}
                        // options={{
                        //     headerRight: () => (
                        //         <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                        //             <Item
                        //                 title="Cart"
                        //                 iconName="md-cart"
                        //                 onPress={() => alert("Add to cart")}
                        //             />
                        //         </HeaderButtons>
                        //     ),
                        // }}
                    />
                    <Stack.Screen
                        name="Product Details"
                        component={ProductDetailsScreen}
                        options={({ route }) => ({
                            title: route.params.productTitle,
                        })}
                    />
                    <Stack.Screen name="Cart" component={ProductsCartScreen} />
                </Stack.Navigator>
            </OverflowMenuProvider>
        </NavigationContainer>
    );
}
export default ProductNavigator;
// export default createAppContainer(ProductNavigator);
// const ProductNavigator = createStackNavigator(
//     {
//         ProductsOverview: ProductsOverviewScreen,
//     },
//     {
//         defaultNavigationOptions: {
//             headerStyle: {
//                 backgroundColor: "red",
//             },
//         },
//     }
// );
