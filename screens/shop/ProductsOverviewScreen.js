import React from "react";
import { StyleSheet, FlatList, Button } from "react-native";
import {
    HeaderButtons,
    HiddenItem,
    Item,
    OverflowMenu,
} from "react-navigation-header-buttons";
import { connect, useDispatch } from "react-redux";
import { createStructuredSelector } from "reselect";
import ProductCard from "../../components/shop/ProductCard";
import CustomHeaderButton from "../../components/UI/HeaderButton";
import actionFunction from "../../store/actions/actions";
import { ADD_TO_CART } from "../../store/constants/cartConstants";
import { makeSelectProductsData } from "../../store/selectors/productSelector";

const ProductsOverviewScreen = props => {
    const { productsData, navigation } = props;
    const dispatch = useDispatch();
    // console.log("props", navigation);

    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                    <Item
                        title="Cart"
                        iconName="md-cart"
                        onPress={() => navigation.navigate('Cart')}
                    />
                </HeaderButtons>
            ),
        });
    }, [navigation]);

    const renderProductsData = itemData => {
        return (
            <ProductCard
                title={itemData.item.title}
                image={itemData.item.imageUrl}
                price={itemData.item.price}
                onShowDetail={() => {
                    props.navigation.navigate("Product Details", {
                        productId: itemData.item.id,
                        productTitle: itemData.item.title,
                    });
                }}
                onAddToCart={() => {
                    dispatch(
                        actionFunction(ADD_TO_CART, { product: itemData.item })
                    );
                }}
            />
        );
    };

    return <FlatList data={productsData} renderItem={renderProductsData} />;
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

const mapStateToProps = createStructuredSelector({
    productsData: makeSelectProductsData(),
});
// const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, null)(ProductsOverviewScreen);
