import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
const CartItem = props => {
    const { total, title, quantity } = props;
    return (
        <View style={styles.container}>
            <Text style={styles.textCont}>
                <Text style={styles.quantity}>{quantity} </Text>
                <Text style={styles.title}>{title}</Text>
            </Text>
            <View style={styles.actions}>
                <Text style={[styles.textCont, styles.title]}>${Number(total).toFixed(2)}    </Text>
                <TouchableOpacity onPress={props.onDelete}>
                    <Ionicons name="md-trash" size={23} color="red" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default CartItem;

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems:'center',
        marginVertical:10,
    },
    actions: {
        flexDirection: "row",
    },
    textCont: { fontFamily: "open-sans-bold" },
    quantity: { color: "#ccc" },
    title: { fontSize: 16 },
});
