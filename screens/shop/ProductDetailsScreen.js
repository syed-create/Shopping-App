import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    Button,
} from "react-native";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import Colors from "../../constants/Colors";
import actionFunction from "../../store/actions/actions";
import { makeSelectProductsData } from "../../store/selectors/productSelector";
import * as CartConstants from "../../store/constants/cartConstants";

const ProductDetailsScreen = props => {
    const { productId } = props.route.params;

    const productDetails = props.productDetails.find(
        product => product.id === productId
    );
    return (
        <ScrollView style={styles.container}>
            <Image
                source={{ uri: productDetails.imageUrl }}
                style={styles.image}
            />
            <View style={styles.actions}>
                <Button
                    color={Colors.primaryColor}
                    title="Add To Cart"
                    onPress={() => {
                        props.dispatchAddToCart({
                            product: productDetails,
                        });
                    }}
                />
            </View>
            <Text style={styles.price}>${productDetails.price}</Text>
            <Text style={styles.description}>{productDetails.description}</Text>
        </ScrollView>
    );
};

const mapStateToProps = createStructuredSelector({
    productDetails: makeSelectProductsData(),
});
const mapDispatchToProps = dispatch => ({
    dispatchAddToCart: (...payload) =>
        dispatch(actionFunction(CartConstants.ADD_TO_CART, ...payload)),
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductDetailsScreen);

const styles = StyleSheet.create({
    container: { backgroundColor: "white" },
    image: { height: 300, width: "100%" },
    actions: { marginVertical: 10, alignItems: "center" },
    price: {
        marginVertical: 20,
        fontSize: 20,
        color: "#888",
        textAlign: "center",
        fontFamily: "open-sans-bold",
    },
    description: {
        textAlign: "center",
        marginHorizontal: 10,
        fontFamily: "open-sans",
    },
});
