import React from "react";
import { Image, StyleSheet, View } from "react-native";

export default function ApiScreen() {
    return (
        <View style={styles.container}>
        </View>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 9 / 10,
        backgroundColor: "#F9FAFB",
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 24,
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#1F2937",
        marginBottom: 8,
        textAlign: "center",
    },
    subtitle: {
        fontSize: 18,
        color: "#4B5563",
        marginBottom: 20,
        textAlign: "center",
    },
    card: {
        backgroundColor: "#DBEAFE",
        borderRadius: 16,
        padding: 20,
        width: "100%",
        alignItems: "center",
    },
    description: {
        fontSize: 16,
        color: "#374151",
        marginBottom: 10,
        lineHeight: 22,
        textAlign: "center",
    },
    highlight: {
        fontWeight: "bold",
        color: "#2563EB",
    },
    gesture: {
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 20,
    },
    imagem: {
        width: 250,
        height: 143,
        borderRadius: 16,
        borderWidth: 3,
        borderColor: "#2563EB",
    },
    instrucao: {
        color: "#6B7280",
        marginTop: 10,
        fontSize: 16,
        fontStyle: "italic",
        textAlign: "center",
    },
});