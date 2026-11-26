import { StyleSheet, Text, View, Image } from 'react-native';
import FindProduct from './components/FindProduct.jsx';
import icon from './assets/icon.jpg';
export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <Image
          style={{
            width: 50,
            height: 50,
          }}
          resizeMode="cover" // contain, repeat, stretch
          source={{
            uri: 'https://www.shutterstock.com/image-vector/vector-modern-flat-app-icon-260nw-350381579.jpg',
          }}
        />
        <Text style={styles.title}>Store App</Text>
        <Image
          style={{
            width: 50,
            height: 50,
            borderRadius: "50%"
          }}
          resizeMode="contain"
          source={icon}
        />
      </View>
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
    textAlign: 'center',
  },
});
