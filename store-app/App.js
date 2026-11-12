import { StyleSheet, Text, View } from 'react-native';
import FindProduct from './components/FindProduct.jsx';
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Store App
      </Text>
      <FindProduct />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  title: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },
});
