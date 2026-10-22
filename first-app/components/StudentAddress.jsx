import { View, Text } from 'react-native';

const StudentAddress = (props) => {
  return (
    <View>
      <Text>**********</Text>
      <Text>City: {props.city}</Text>
      <Text>Street: {props.street}</Text>
      <Text>Postal Code: {props.postal}</Text>
      <Text>**********</Text>
    </View>
  )
};


export default StudentAddress;