import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

function NewComponent() {
  return (
    <Text>
      New Component
    </Text>
  )
}

// Component function
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
      <Text>First React APP</Text>      
      <NewComponent />

      <StatusBar style="auto" />
    </View>
  );
}

// Normal function
// function sum(x,y){
//   return x+y;
// }

// sum(10,20)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});