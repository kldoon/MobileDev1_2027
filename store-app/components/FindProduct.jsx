import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import { useState } from 'react';

const FindProduct = () => {
  const [pName, setPName] = useState("");
  const [city, setCity] = useState("");
  const [pQ, setPQ] = useState(0);
  const [pDesc, setPDesc] = useState("");

  const handleProductNameChange = (val) => {
    setPName(val);
    // console.log(val);
  }

  const handleSubmit = () => {
    console.log(pName);
    console.log(city);
    console.log(pQ);
    console.log(pDesc);    
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
          // secureTextEntry={true}   // make it password input
          maxLength={30}

        />
      </View>
      <View style={styles.inputGroup}>
        <Text>City</Text>
        <TextInput
          style={styles.input}
          placeholder="Where do you live?"
          // onChangeText={setCity}
          onChangeText={val => setCity(val.toUpperCase())}
        />
      </View>
      <View style={styles.inputGroup}>
        <Text>Quantity</Text>
        <TextInput
          style={styles.input}
          placeholder="How many items?"
          inputMode="numeric"
          onChangeText={val => setPQ(Number(val))}
        />
      </View>
      <View style={styles.inputGroup}>
        <Text>Description</Text>
        <TextInput
          style={styles.input}
          placeholder="Describe your product?"
          multiline
          numberOfLines={3}
          onChangeText={setPDesc}
        />
      </View>
      <Button title="Search" onPress={handleSubmit}/>
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