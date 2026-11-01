import { StyleSheet, Text, Button, View } from 'react-native';
import { useState } from 'react';

import StudentCard from './components/StudentCard.jsx';

export default function App() {
  const std1Name = 'Ahmad Saeed';
  const std2Name = 'Sarah Jameel';
  const std3Name = 'Ayman Mohammad';

  const std1Marks = [90, 85, 70];
  // let std2M1 = 91;
  const [std2M1, setStd2M1] = useState(91);
  
  // let std2M2 = 95;
  const [std2M2, setStd2M2] = useState(95);
  
  let std2M3 = 87;
  let std1IsGraduated = false;
  if (std1Marks[0] >= 60 && std1Marks[1] >= 60 && std1Marks[2] >= 60) {
    std1IsGraduated = true;
  }

  /* 
  const handleChangeStd2Marks = () => {

  };
  */

  function handleChangeStd2Marks() {
    console.log('Button has been clicked');
    // std2M1 = 71;
    setStd2M1(71);

    // std2M2 = 80;
    setStd2M2(80);

    console.log(std2M1);
    console.log(std2M2);
  }

  return (
    <View style={styles.container} /*class="container"*/>
      <Text>Hello World</Text>
      <Text>First React APP</Text>
      <StudentCard
        stdId={6478645}
        stdName={std1Name}
        isGraduated={std1IsGraduated}
        m1={std1Marks[0]}
        m2={std1Marks[1]}
        m3={std1Marks[2]}
        address={{ city: 'Hebron', street: 'Univeristy', postal: '365456' }}
      />
      <StudentCard
        stdId={1234567}
        stdName={std2Name}
        isGraduated={true}
        m1={std2M1}
        m2={std2M2}
        m3={std2M3}
        address={{ city: 'Ramallah', street: 'Masion', postal: '45345' }}
      />
      <Button onPress={handleChangeStd2Marks} title="Change student 2 Marks" />
      <StudentCard
        stdId={9879878}
        stdName={std3Name}
        isGraduated={false}
        m1={92}
        m2={75}
        m3={79}
        address={{ city: 'Dura', street: 'Stadium street', postal: '867867' }}
      />
    </View>
  );
}

// <style>
// .title{
//   font-size: 20px
// }
// </style>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff5db',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const students = [
  {
    stdId: 6478645,
    stdName: 'Ahmad Saeed',
    marks: [90, 85, 70],
    isGraduated: true,
    address: {
      city: 'Hebron',
      street: 'Univeristy',
      postal: '365456',
    },
  },
  {
    stdId: 1234567,
    stdName: 'Sarah Jameel',
    marks: [91, 95, 87],
    isGraduated: true,
    address: {
      city: 'Ramallah',
      street: 'Masion',
      postal: '45345',
    },
  },
  {
    stdId: 9879878,
    stdName: 'Ayman Mohammad',
    marks: [92, 75, 79],
    isGraduated: false,
    address: {
      city: 'Dura',
      street: 'Stadium street',
      postal: '867867',
    },
  },
];
