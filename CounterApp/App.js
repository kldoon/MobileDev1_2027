import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react';

export default function App() {
  // let counter = 0;
  const [counter, setCounter] = useState(0);

  const addOne = () => {
    // counter = counter + 1;
    setCounter(counter + 1);
  };

  const reset = () => {
    // counter = 0;
    setCounter(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.counter}>{counter}</Text>
      <Button title="+1" onPress={addOne} />
      <Text>...</Text>
      <Button
        title="Reset"
        onPress={reset}
        // disabled={counter === 0 ? true : false}
        // disabled={counter === 0}
        disabled={!counter}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  counter: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
  },
});
