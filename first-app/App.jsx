import { StyleSheet, Text, View } from 'react-native';
import StudentCard from './components/StudentCard.jsx';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
      <Text>First React APP</Text>

      <StudentCard
        stdId={6478645}
        stdName="Ahmad Saeed"
        isGraduated={false}
        m1={90}
        m2={85}
        m3={70}
        city="Hebron"
        street="Univeristy"
        postal="365456"
      />
      <StudentCard
        stdId={1234567}
        stdName="Sarah Jameel"
        isGraduated={true}
        m1={91}
        m2={95}
        m3={87}
        city="Ramallah"
        street="Masion"
        postal="22221"
      />
      <StudentCard
        stdId={9879878}
        stdName="Ayman Mohammad"
        isGraduated={false}
        m1={92}
        m2={75}
        m3={79}
        city="Dura"
        street="Stadium street"
        postal="89798"
      />
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
