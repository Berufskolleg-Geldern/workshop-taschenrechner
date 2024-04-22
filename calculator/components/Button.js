import { Pressable, StyleSheet, Text, Image } from "react-native";
import * as Haptics from "expo-haptics";

/**
 * Represents a button component.
 * @param {Object} props - The props for the button component.
 * @param {string} props.text - The text to be displayed on the button.
 * @param {function} props.pressHandler - The function to be called when the button is pressed.
 * @param {string} props.type - The type of the button.
 * @returns {JSX.Element} The button component.
 */
export default function Button({ text, pressHandler, type }) {
  if (text === "back") {
    return (
      <Pressable
        onPress={() => {
          pressHandler();
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        }}
        style={[styles.button, styles.button3]}
      >
        <Image
          source={require("../assets/delete-left-white.png")}
          style={[styles.imageStyle]}
        />
      </Pressable>
    );
  }

  if (type === "t1") {
    return (
      <Pressable
        onPress={() => {
          pressHandler();
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        }}
        style={[styles.button]}
      >
        <Text style={[styles.text]}>{text}</Text>
      </Pressable>
    );
  }

  if (type === "t2") {
    return (
      <Pressable
        onPress={() => {
          pressHandler();
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        }}
        style={[styles.button, styles.button2]}
      >
        <Text style={[styles.text]}>{text}</Text>
      </Pressable>
    );
  }

  if (type === "t3") {
    return (
      <Pressable
        onPress={() => {
          pressHandler();
          Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
        }}
        style={[styles.button, styles.button3]}
      >
        <Text style={[styles.text]}>{text}</Text>
      </Pressable>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    width: 75,
    height: 75,
    padding: 10,
    backgroundColor: "#4E505F",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  text: {
    color: "#fff",
    display: "flex",
    fontSize: 25,
    fontWeight: "600",
  },
  button2: {
    backgroundColor: "#4D5CFB",
  },
  button3: {
    backgroundColor: "#2F2F39",
  },
  imageStyle: {
    width: 30,
    height: 30,
  },
});
