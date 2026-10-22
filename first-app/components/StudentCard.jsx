import { Text, View } from 'react-native';
import StudentAddress from './StudentAddress.jsx'

function StudentCard(props) {
  const stdId = props.stdId;
  const stdName = props.stdName;
  const isGraduated = props.isGraduated;
  const avg = (props.m1 + props.m2 + props.m3) / 3;

  return (
    <View>
      <Text>==========================</Text>
      <Text>Student ID: {stdId}</Text>
      <Text>Student Name: {stdName}</Text>
      <Text>Student Avg: {avg}</Text>
      <Text>Student is {isGraduated === false ? 'NOT ' : ''}graduated</Text>
      <StudentAddress
        city={props.city}
        street={props.street}
        postal={props.postal}
      />
      <Text>==========================</Text>
    </View>
  );
}

export default StudentCard;