import React, { useState } from "react";
import { Button, Image, StyleSheet, TextInput, View, Text } from "react-native";

export default function Login({ navigation, signupState }) {
  const [isSignup, setIsSignup] = signupState;
  console.log(isSignup);
  setIsSignup(true);
  console.log(isSignup);
  return (
    <View style={styles.signupContainer}>
      <View style={styles.form}>
        <Image
          style={styles.tinyLogo}
          source={require("../../assets/hm-logo.png")}
        />
        <View>
          <TextInput
            style={styles.textInput}
            placeholder="Your Mobile"
            keyboardType="numeric"
            maxLength={11}
            // onChangeText={(enteredText) => setMobile(enteredText)}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Your Password"
            secureTextEntry={true}
            // onChangeText={(enteredText) => setPassword(enteredText)}
          />
          <View style={styles.submitButton}>
            <Button title="Login" onPress={() => console.log("clicked")} />
          </View>
        </View>
        <View style={{ marginTop: 15 }}>
          <Text style={{ textAlign: "center" }}>
            Don't Have a account?{" "}
            <Text
              onPress={() => {
                console.log("go to signup");
                setIsSignup(false);
                navigation.navigate("Auth");
                console.log("issignup", isSignup);
              }}
              style={{ color: "blue", textDecorationLine: "underline" }}
            >
              Signup
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  signupContainer: {
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
  submitButton: {
    marginVertical: 5,
  },
  tinyLogo: {
    width: "100%",
    height: 150,
    borderWidth: 1,
  },
});
