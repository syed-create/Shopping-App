import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
    makeSelectCartData,
    makeSelectCartTotalAmount,
} from "../../store/selectors/cartSelector";

const ProductsCartScreen = props => {
    // console.log("props cart total amount", props.cartDataTotalAmount);
    // console.log("cartData", props.cartData);
    return (
        <View>
            <Text>Total cart amount: ${props.cartDataTotalAmount}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});
const mapStateToProps = createStructuredSelector({
    cartData: makeSelectCartData(),
    cartDataTotalAmount: makeSelectCartTotalAmount(),
});
const mapDispatchToProps = (dispatch = {});
export default connect(mapStateToProps, mapDispatchToProps)(ProductsCartScreen);
