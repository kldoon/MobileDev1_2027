import { Text, View, StyleSheet } from 'react-native';
import StudentAddress from './StudentAddress.jsx'

function StudentCard(props) {
  const stdId = props.stdId;
  const stdName = props.stdName;
  const isGraduated = props.isGraduated;
  const avg = (props.m1 + props.m2 + props.m3) / 3;

  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}><Text style={styles.info}>Student ID:</Text> {stdId}</Text>
      <Text style={styles.text}>
        <Text style={{ ...styles.info, color: '#00aa55', fontSize: 12 }}>
          Student Name:
        </Text> {stdName}
      </Text>
      <Text style={styles.text}><Text style={styles.info}>Student Avg:</Text> {avg}</Text>
      <Text style={[styles.info, styles.moreInfo]}>Student is {isGraduated === false ? 'NOT ' : ''}graduated</Text>
      <StudentAddress 
        address={props.address}
      />
    </View>
  );
}

export default StudentCard;

const styles= StyleSheet.create({
  wrapper: {
    borderWidth: 1,
    borderColor: "#777777",
    width:"100%",
    paddingVertical: 10,
    paddingHorizontal: 30
  },
  info:{
    fontWeight: "bold",
    textTransform: "uppercase"
  },
  text:{
    fontSize: 12
  },
  moreInfo: {
    textTransform: 'capitalize',
    color:"#0000FF"
  }
})