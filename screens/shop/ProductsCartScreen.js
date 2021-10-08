import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Colors from "../../constants/Colors";
import CartItem from "../../components/shop/CartItem";

import {
    makeSelectCartData,
    makeSelectCartTotalAmount,
} from "../../store/selectors/cartSelector";
import actionFunction from "../../store/actions/actions";
import { DELETE_ITEM } from "../../store/constants/cartConstants";

const ProductsCartScreen = props => {
    const { cartDataTotalAmount: totalAmount, cartData } = props;
    const transformedCartItem = [];
    for (const key in cartData) {
        transformedCartItem.push({
            id: key,
            productTitle: cartData[key].productTitle,
            productPrice: cartData[key].productPrice,
            productQuantity: cartData[key].quantity,
            productSum: cartData[key].sum,
        });
    }
    transformedCartItem.sort((a, b) => (a.id > b.id ? 1 : -1));

    const renderCartItemList = itemData => {
        return (
            <CartItem
                total={itemData.item.productSum}
                title={itemData.item.productTitle}
                quantity={itemData.item.productQuantity}
                onDelete={() => {
                    props.removeItem({
                        id: itemData.item.id,
                        amount: itemData.item.productSum,
                    });
                }}
            />
        );
    };
    return (
        <View style={styles.container}>
            <View style={styles.cardCont}>
                <Text style={styles.textCont}>
                    <Text style={styles.total}>Total: </Text>
                    <Text style={styles.amount}>${totalAmount.toFixed(2)}</Text>
                </Text>
                <Button
                    title="Order Now"
                    color={Colors.secondaryColor}
                    disabled={transformedCartItem.length === 0 && true}
                />
            </View>
            <View>
                <FlatList
                    data={transformedCartItem}
                    renderItem={renderCartItemList}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { padding: 15, flex: 1, backgroundColor: "white" },
    cardCont: {
        padding: 10,
        borderRadius: 10,
        backgroundColor: "white",
        shadowColor: "black",
        shadowOpacity: 0.26,
        elevation: 5,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 15,
    },
    textCont: {
        fontFamily: "open-sans-bold",
        fontSize: 20,
    },
    textB: {
        fontFamily: "open-sans-bold",
        fontSize: 16,
    },
    textN: {
        fontFamily: "open-sans",
        fontSize: 15,
    },
    total: {},
    amount: { color: Colors.primaryColor },
    flexRowBetween: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,
    },
    // spaceBetween: { justifyContent: "space-between" },,
});
const mapStateToProps = createStructuredSelector({
    cartData: makeSelectCartData(),
    cartDataTotalAmount: makeSelectCartTotalAmount(),
});
const mapDispatchToProps = dispatch => ({
    removeItem: (...payload) =>
        dispatch(actionFunction(DELETE_ITEM, ...payload)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ProductsCartScreen);
