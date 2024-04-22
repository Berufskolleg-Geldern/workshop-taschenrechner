import { Pressable, StyleSheet, Text, View, Image, Vibration, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import * as Haptics from 'expo-haptics';

export default function Button({ text, pressHandler, type }) {
    const ONE_SECOND_IN_MS = 1000;

  const PATTERN = [
    1 * ONE_SECOND_IN_MS,
    2 * ONE_SECOND_IN_MS,
    3 * ONE_SECOND_IN_MS,
  ];

  const PATTERN_DESC =
    Platform.OS === 'android'
      ? 'wait 1s, vibrate 2s, wait 3s'
      : 'wait 1s, vibrate, wait 2s, vibrate, wait 3s';



    if (text === "back") {
        return <Pressable onPress={() => {pressHandler();Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)}} style={[styles.button, {backgroundColor: "#2F2F39"}]}><Image source={require("../assets/delete-left-white.png")} style={[{width: 30, height: 30, color: "#fff"}]} /></Pressable>
    }


    if (type === "t1") {
        return (
            <Pressable onPress={() => {pressHandler();Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)}} style={[styles.button]}><Text style={[styles.text]}>{text}</Text></Pressable>
        );
    }

    if (type === "t2") {
        return <Pressable onPress={() => {pressHandler();Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)}} style={[styles.button, {backgroundColor: "#4D5CFB"}]}><Text style={[styles.text]}>{text}</Text></Pressable>
    }

    if (type === "t3") {
        return (
            <Pressable onPress={() => {pressHandler();Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)}} style={[styles.button, {backgroundColor: "#2F2F39"}]}><Text style={[styles.text]}>{text}</Text></Pressable>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        width: 75, height: 75, padding: 10, backgroundColor: "#4E505F", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", borderRadius: 20
    },
    text: {
        color: "#fff",
        display: "flex",
        fontSize: 25,
        fontWeight: "600"
    }

});