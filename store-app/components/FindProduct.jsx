import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useState } from 'react';

const FindProduct = () => {

  // Composite state
  const [data, setData] = useState({
    name: "",
    city: "",
    quantity: 0,
    desc: ""
  });

  const handleDataChange = (value, field) => {
    // if(field === "name"){
    //   setData({...data, name: value});  
    // } else if (field === "city"){
    //   setData({...data, city: value});
    // } else if(field === "quantity"){
    //   setData({...data, quantity: value});
    // } else if(field === "desc"){
    //   setData({...data, desc: value});
    // }

    setData({ ...data, [field]: value });
    // This is like the following code

    // const person={name:'Ahmad', age:20}
    // person.age=30
    // person['age']=30
  }

  const handleSubmit = () => {
    console.log(data);
  }

  return (
    <View>
      <Text>Find Product</Text>
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
      <Button title="Search" onPress={handleSubmit} />
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
  }
})