import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function Button({ text, pressHandler }) {

    return (
        <Pressable onPress={() => pressHandler()} style={[styles.button]}><Text style={[styles.text]}>C</Text></Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        width: 50, height: 50, padding: 10, backgroundColor: "#4E505F", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", borderRadius: 15
    },
    text: {
        color: "#fff",
        display: "flex"
    }

});