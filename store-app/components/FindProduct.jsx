import {View, Text, TextInput, StyleSheet} from 'react-native';
import { useState } from 'react';

const FindProduct = () => {
  const [pName, setPName] = useState("Keybaord");

  const handleProductNameChange = (val) => {
    setPName(val);
    // console.log(val);
  }

  return (
    <View>
      <Text>Find Product</Text>
      <View style={styles.inputGroup}>
        <Text>Product Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Search for Product"
          onChangeText={handleProductNameChange}
          value={pName}
        />
      </View>
      <View style={styles.inputGroup}>
        <Text>City</Text>
        <TextInput
          style={styles.input}
          placeholder="Where do you live?"
        />
      </View>
    </View>
  )
};

export default FindProduct;

const styles= StyleSheet.create({
  input:{
    borderWidth: 1,
    borderColor: "#a1a1a1",
    padding: 5,
    borderRadius: 5
  },
  inputGroup:{
    marginBottom: 10
  }
})