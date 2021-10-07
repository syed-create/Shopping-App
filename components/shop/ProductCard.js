import React from "react";
import {
    Button,
    Image,
    StyleSheet,
    Text,
    TouchableNativeFeedback,
    View,
} from "react-native";
import Colors from "../../constants/Colors";

const ProductCard = props => {

    return (
        <View style={styles.productContainer}>
            <View style={styles.main}>
                <TouchableNativeFeedback
                    onPress={props.onShowDetail}
                    useForeground
                >
                    <View>
                        <Image
                            source={{ uri: props.image }}
                            style={styles.image}
                        />
                        <View style={styles.details}>
                            <Text style={styles.title}>{props.title}</Text>
                            <Text style={styles.price}>${props.price}</Text>
                        </View>
                        <View style={styles.actions}>
                            <Button
                                color={Colors.primaryColor}
                                title="Show Details"
                                onPress={props.onShowDetail}
                            />
                            <Button
                                color={Colors.primaryColor}
                                title="Add To Cart"
                                onPress={props.onAddToCart}
                            />
                        </View>
                    </View>
                </TouchableNativeFeedback>
            </View>
        </View>
    );
};

export default ProductCard;

const styles = StyleSheet.create({
    main: { overflow: "hidden", borderRadius: 10 },
    productContainer: {
        height: 300,
        margin: 20,
        overflow: "hidden",
        borderRadius: 10,
        backgroundColor: "white",
        shadowColor: "black",
        shadowOpacity: 0.26,
        elevation: 5,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
    },
    image: { height: "60%", width: "100%" },
    details: {
        height: "15%",
    },
    title: {
        textAlign: "center",
        fontSize: 18,
        marginVertical: 4,
        fontFamily: "open-sans-bold",
    },
    price: {
        textAlign: "center",
        color: "#888",
        fontSize: 14,
        fontFamily: "open-sans",
    },
    actions: {
        paddingHorizontal: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: "25%",
    },
});
