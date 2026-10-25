import { View, Text, StyleSheet } from 'react-native';

const StudentAddress = (props) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>City: {props.address.city}</Text>
      <Text style={styles.text}>Street: {props.address.street}</Text>
      <Text style={styles.text}>Postal Code: {props.address.postal}</Text>
    </View>
  )
};


export default StudentAddress;

const styles = StyleSheet.create({
  wrapper: {
    borderTopColor: "#f77700",
    borderTopWidth: 3,
    width: "50%",
    marginTop: 5
  },
  text: {
    fontSize: 12
  }
})