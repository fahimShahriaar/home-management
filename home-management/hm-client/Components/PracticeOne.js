import {
  Button,
  Button as RNButton,
  StyleSheet,
  Text,
  TextInput as RNTextInput,
  View,
} from "react-native";
import {
  Button as MaterialButton,
  AppBar,
  TextInput,
} from "@react-native-material/core";

const PracticeOne = () => {
  return (
    <View>
      <Text style={{ marginTop: 10 }}></Text>
      <View>
        <RNTextInput style={styles.rnInput} placeholder="Your course goal!" />
        <Button title="Add Goal" />
      </View>
      <Text style={{ marginVertical: 20 }}></Text>
      <View>
        <TextInput placeholder="Your course goal" />
        <MaterialButton
          style={{ backgroundColor: "#3a86ff" }}
          title="Add Goal"
          onPress={() => alert("Your goal")}
        />
      </View>
    </View>
  );
};

export default PracticeOne;

const styles = StyleSheet.create({
  rnInput: {
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "#98c1d9",
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 10,
  },
});
