import { useState } from "react";
import { Button, Image, StyleSheet, TextInput, View } from "react-native";

const Signup = () => {
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");

  function handleSignup() {
    console.log(mobile);
    console.log(password);
    fetch("http://192.168.68.128:8080/user/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ mobile, password }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error))
      .finally(() => console.log("hello"));
  }

  return (
    <View style={styles.signupContainer}>
      <View style={styles.form}>
        <Image
          style={styles.tinyLogo}
          source={require("../assets/hm-logo.png")}
        />
        <View>
          <TextInput
            style={styles.textInput}
            placeholder="Your mobile"
            keyboardType="numeric"
            maxLength={11}
            onChangeText={(enteredText) => setMobile(enteredText)}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Your Password"
            secureTextEntry={true}
            onChangeText={(enteredText) => setPassword(enteredText)}
          />
        </View>
        <View style={styles.submitButton}>
          <Button title="Signup" onPress={handleSignup} />
        </View>
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  signupContainer: {
    // borderWidth: 1,
    // height: "100%",
    paddingHorizontal: 40,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    // borderWidth: 1,
    borderRadius: 5,
    // height: "40%",
    width: "100%",
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "skyblue",
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  // passwordInput: {
  //   borderWidth: 1,
  //   borderColor: "skyblue",
  //   padding: 5,
  //   marginVertical: 5,
  // },
  submitButton: {
    marginVertical: 5,
  },
  tinyLogo: {
    width: "100%",
    height: 150,
    borderWidth: 1,
  },
});
