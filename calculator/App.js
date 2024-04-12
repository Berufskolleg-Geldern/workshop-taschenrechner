import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Pressable, StyleSheet, Text, View, Vibration } from 'react-native';
import Button from './components/Button';
import { ScrollView } from 'react-native';

export default function App() {
  const [display, setDisplay] = React.useState("0");
  const [last, setLast] = React.useState("");



  return (
    <View style={styles.container}>
      <View style={[{width: "85%", marginBottom: 30}]}>
      <Text style={[{color: "rgba(255, 255, 255, 0.6)", fontSize: 40, alignSelf: "flex-end", marginBottom: 20}]}>{last}</Text>
      <ScrollView style={[{alignSelf: "flex-end" }]} horizontal><Text style={[{color: "#fff", fontSize: 60, alignSelf: "flex-end", height: 70, textAlign: "right"}]} numberOfLines={1}>{display}</Text></ScrollView></View> 
      <View style={[{ display: "flex", flexDirection: "column", gap: 20 }]}>
        <View style={[{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "85%", alignSelf: "center" }]}>
          <Button type="t1" text="C" pressHandler={() => setDisplay("")} />
          <Button type="t1" text="+ / -" pressHandler={() => {display.startsWith("-") ? setDisplay(display.slice(1)) : setDisplay("-" + display)}} />
          <Button type="t1" text="%" pressHandler={() => setDisplay(display + "%")}/>
          <Button type="t2" text="/" pressHandler={() => setDisplay(display + "/")} />
        </View>
        <View style={[{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "85%", alignSelf: "center" }]}>
          <Button type="t3" text="7" pressHandler={() => setDisplay(display + "7")} />
          <Button type="t3" text="8" pressHandler={() => setDisplay(display + "8")} />
          <Button type="t3" text="9" pressHandler={() => setDisplay(display + "9")} />
          <Button type="t2" text="*" pressHandler={() => setDisplay(display + "*")}/>
        </View>
        <View style={[{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "85%", alignSelf: "center" }]}>
          <Button type="t3" text="4" pressHandler={() => setDisplay(display + "4")}/>
          <Button type="t3" text="5" pressHandler={() => setDisplay(display + "5")}/>
          <Button type="t3" text="6" pressHandler={() => setDisplay(display + "6")}/>
          <Button type="t2" text="-" pressHandler={() => setDisplay(display + "-")}/>
        </View>
        <View style={[{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "85%", alignSelf: "center" }]}>
          <Button type="t3" text="1" pressHandler={() => setDisplay(display + "1")}/>
          <Button type="t3" text="2" pressHandler={() => setDisplay(display + "2")}/>
          <Button type="t3" text="3" pressHandler={() => setDisplay(display + "3")}/>
          <Button type="t2" text="+" pressHandler={() => setDisplay(display + "+")}/>
        </View>
        <View style={[{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "85%", alignSelf: "center" }]}>
          <Button type="t3" text="." pressHandler={() => setDisplay(display + ".")}/>
          <Button type="t3" text="0" pressHandler={() => setDisplay(display + "0")}/>
          <Button type="t3" text="back" pressHandler={() => setDisplay(display.substring(0, display.length -1))} />
          <Button type="t2" text="=" pressHandler={() => {try {setLast(display);setDisplay(eval(display.replace("%", " * 0.01"))) } catch {setDisplay(display)}}} />
        </View> 
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#18171E',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
