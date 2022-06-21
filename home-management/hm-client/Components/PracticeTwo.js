import {
  Button,
  StyleSheet,
  Text,
  TextInput as RNTextInput,
  View,
} from "react-native";

const PracticeTwo = () => {
  return (
    <View>
      <View style={styles.formContainer}>
        <RNTextInput style={styles.goalInput} placeholder="Your course goal!" />
        <Button title="Add Goal" />
      </View>
      <View></View>
    </View>
  );
};

export default PracticeTwo;

const styles = StyleSheet.create({
  formContainer: {
    // borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  goalInput: {
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "#98c1d9",
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginRight: 5,
    width: "80%",
  },
});
