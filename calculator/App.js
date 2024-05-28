import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "./components/Button";
import { ScrollView } from "react-native";

/**
 * Main component of the calculator app.
 * @returns {JSX.Element} The rendered component.
 */
export default function App() {
  return (
    <View style={styles.container}>
      <View style={[styles.textHolder]}>
        <Text style={[styles.lastText]}>Hier das Ergebnis der letzen Rechnung</Text>
        <ScrollView style={[styles.sideScroll]} horizontal>
          <Text style={[styles.resultText]} numberOfLines={1}>
            Hier die aktuelle Rechnung
          </Text>
        </ScrollView>
      </View>

      <View style={[styles.gridContainer]}>
        <View style={[styles.row]}>
          <Button type="t1" text="C" pressHandler={() => setDisplay("")} />
          <Button
            type="t1"
            text="+ / -"
            pressHandler={() => {
              display.startsWith("-")
                ? setDisplay(display.slice(1))
                : setDisplay("-" + display);
            }}
          />
          <Button
            type="t1"
            text="%"
            pressHandler={() => setDisplay(display + "%")}
          />
         
        </View>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#18171E",
    alignItems: "center",
    justifyContent: "center",
  },

  gridContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "85%",
    alignSelf: "center",
  },
  sideScroll: {
    alignSelf: "flex-end",
  },
  resultText: {
    color: "#fff",
    fontSize: 60,
    alignSelf: "flex-end",
    height: 70,
    textAlign: "right",
  },
  lastText: {
    color: "rgba(255, 255, 255, 0.6)",
    fontSize: 40,
    alignSelf: "flex-end",
    marginBottom: 20,
  },
  textHolder: {
    width: "85%",
    marginBottom: 30,
  },
});
