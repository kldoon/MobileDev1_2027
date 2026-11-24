import { View, ScrollView, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useState } from 'react';

const FindProduct = () => {
  const [products, setProducts] = useState([]);
  const [data, setData] = useState({
    name: "",
    city: "",
    quantity: 0,
    desc: ""
  });

  const handleDataChange = (value, field) => {
    setData({ ...data, [field]: value });
  }

  const handleSubmit = () => {
    // craete a copy of the array, and add new item to it
    const tmp = [...products, data];
    setProducts(tmp);
    setData({
      name: "",
      city: "",
      quantity: 0,
      desc: ""
    });
  }

  // const getItem= (p) => {
  //  return <Text style={styles.item}>
  //     {p.name}  |  {p.city}  |  {p.quantity}  | {p.desc}
  //   </Text>
  // }

  return (
    <View style={{ flex: 1 }}>
      <Text>Add New Product</Text>
      <View style={styles.inputGroup}>
        <ScrollView horizontal style={{ height: 40 }}>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Text>
        </ScrollView>
        <Text>Product Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Search for Product"
          value={data.name}
          onChangeText={val => handleDataChange(val, "name")}
          maxLength={30}
        />
      </View>
      <View style={styles.inputGroup}>
        <Text>City</Text>
        <TextInput
          style={styles.input}
          placeholder="Where do you live?"
          value={data.city}
          onChangeText={val => handleDataChange(val.toUpperCase(), "city")}
        />
      </View>
      <View style={styles.inputGroup}>
        <Text>Quantity</Text>
        <TextInput
          style={styles.input}
          placeholder="How many items?"
          inputMode="numeric"
          value={data.quantity}
          onChangeText={val => handleDataChange(Number(val), "quantity")}
        />
      </View>
      <View style={styles.inputGroup}>
        <Text>Description</Text>
        <TextInput
          style={styles.input}
          placeholder="Describe your product?"
          multiline
          numberOfLines={3}
          value={data.desc}
          onChangeText={val => handleDataChange(val, "desc")}
        />
      </View>
      <Button title="Add" onPress={handleSubmit} />
      <ScrollView>
        {
          // products.map(getItem)
          products.map((p, index) => <View key={index}>
            <Text style={styles.item}>
              {p.name}  |  {p.city} | {p.quantity}  | {p.desc}
            </Text>
          </View>
          )
        }
      </ScrollView>
    </View>
  )
};

export default FindProduct;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#a1a1a1",
    padding: 5,
    borderRadius: 5
  },
  inputGroup: {
    marginBottom: 10
  },
  item: {
    margin: 5,
    borderColor: "#a3a3a3",
    borderWidth: 1,
    backgroundColor: "#03e3e3e"
  }
})