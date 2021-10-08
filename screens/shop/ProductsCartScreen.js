import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Colors from "../../constants/Colors";
import {
    makeSelectCartData,
    makeSelectCartTotalAmount,
} from "../../store/selectors/cartSelector";

const ProductsCartScreen = props => {
    // console.log("props cart total amount", props.cartDataTotalAmount);
    // console.log("cartData", props.cartData);
    return (
        <View style={styles.container}>
            <View style={styles.cardCont}>
                <Text style={styles.textCont}>
                    <Text style={styles.total}>Total: </Text>
                    <Text style={styles.amount}>
                        ${props.cartDataTotalAmount}
                    </Text>
                </Text>
                <Button
                    title="Order Now"
                    color={Colors.secondaryColor}
                    disabled={props.cartDataTotalAmount === 0 && true}
                />
            </View>
            <View>
                <Text>Cart Items</Text>
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
    total: {},
    amount: { color: Colors.primaryColor },
});
const mapStateToProps = createStructuredSelector({
    cartData: makeSelectCartData(),
    cartDataTotalAmount: makeSelectCartTotalAmount(),
});
const mapDispatchToProps = (dispatch = {});
export default connect(mapStateToProps, mapDispatchToProps)(ProductsCartScreen);
