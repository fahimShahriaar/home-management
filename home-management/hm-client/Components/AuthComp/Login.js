import { Button, Image, StyleSheet, TextInput, View, Text } from "react-native";

const global = require("../../global");

import React, { useContext, useState } from "react";
import { AppContext } from "../../Store/AppContext";

export default function Login({ navigation }) {
  // Get User State from Context
  const { userInfoState } = useContext(AppContext);
  const [userInfo, setUserInfo] = userInfoState;
  // console.log("userInfo", userInfo);

  // const [userInfo, setUserInfo] = userInfoState;
  // console.log(userInfoState);

  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    // console.log(mobile, password);
    fetch(`http://${global.IP}:8080/user/login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ mobile, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.success) {
          // do something
          const newData = { user: data.user, mealInfo: data.mealInfo };
          setUserInfo(newData);
          navigation.navigate("Dashboard");
        } else {
          alert(`Failed!`);
        }
      })
      .catch((error) => console.error(error));
  }

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
            selectionColor="#2196F3"
            placeholder="Your Mobile"
            keyboardType="numeric"
            maxLength={11}
            onChangeText={(enteredText) => setMobile(enteredText)}
          />
          <TextInput
            style={styles.textInput}
            selectionColor="#2196F3"
            placeholder="Your Password"
            secureTextEntry={true}
            onChangeText={(enteredText) => setPassword(enteredText)}
          />
          <View style={styles.submitButton}>
            {/* <Button title="Login" onPress={handleLogin} /> */}
            <Button
              title="Login"
              onPress={() => navigation.navigate("Dashboard")}
            />
          </View>
        </View>
        <View style={{ marginTop: 15 }}>
          <Text style={{ textAlign: "center" }}>
            Don't Have a account?{" "}
            <Text
              onPress={() => {
                console.log("go to signup");
                navigation.navigate("Signup");
              }}
              style={{
                color: "#2196F3",
                textDecorationLine: "underline",
                fontWeight: "bold",
              }}
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
    borderColor: "lightgray",
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
