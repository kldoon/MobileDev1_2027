import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useState } from 'react';

const FindProduct = () => {
  const [products, setProducts] = useState([]);
  // ["aaa","bbb","ccc"]
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
    //products.push(data.name);
    // craete a copy of the array, and add new item to it
    const tmp = [...products, data];

    setProducts(tmp);
  }



  return (
    <View>
      <Text>Add New Product</Text>
      <View style={styles.inputGroup}>
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
      <View>
        {
          // products.map((p)=>{return <Text>
          //   {p.name}  |  {p.city}  |  {p.quantity}  | {p.desc}
          // </Text>})
          products.map((p) => <Text style={styles.item}>
            {p.name}  |  {p.city}  |  {p.quantity}  | {p.desc}
          </Text>)
        }

        {
          // <Text>{JSON.stringify(products)}</Text>
        }
      </View>
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