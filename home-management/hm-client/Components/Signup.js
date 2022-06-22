import { Button, StyleSheet, TextInput, View } from "react-native";

const Signup = () => {
  return (
    <View style={styles.signupContainer}>
      <View style={styles.form}>
        <View>
          <TextInput style={styles.mobileInput} placeholder="Your mobile" />
          <TextInput style={styles.mobileInput} placeholder="Your Password" />
        </View>
        <Button title="Signup" />
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  signupContainer: {
    // borderWidth: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    // borderWidth: 1,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    borderRadius: 5,
    height: "30%",
    width: "100%",
    justifyContent: "space-evenly",
  },
  mobileInput: {
    borderWidth: 1,
    borderColor: "skyblue",
    padding: 5,
    marginVertical: 5,
  },
});
