import { StyleSheet, Text, View } from 'react-native';

function NewComponent() {
  const stdId = 1256464;
  const stdName = 'Ahmad Saeed';
  // const stdAvg = (90 + 95 + 85) / 3;
  const isGraduated = false;

  return (
    <View>
      <Text>==========================</Text>
      <Text>Student ID: {stdId}</Text>
      <Text>Student Name: {stdName}</Text>
      <Text>Student Avg: {(90 + 95 + 85) / 3}</Text>
      <Text>Student is {isGraduated === false ? 'NOT ' : ''}graduated</Text>
      <Text>==========================</Text>
    </View>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
      <Text>First React APP</Text>

      <NewComponent />
      <NewComponent />
      <NewComponent />
      <NewComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
