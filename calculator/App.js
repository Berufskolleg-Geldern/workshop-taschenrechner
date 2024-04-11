import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Button from './components/Button';

export default function App() {
  return (
    <View style={styles.container}>

      <Text>6,291 / 5</Text>
      <Text>1,5258.2</Text>

      <View>
        <Button />
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
