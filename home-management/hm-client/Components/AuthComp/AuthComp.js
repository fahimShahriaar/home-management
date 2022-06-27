import { useState } from "react";
import { Button, Image, StyleSheet, TextInput, View } from "react-native";
import Login from "./Login";
import Signup from "./Signup";

const AuthComp = ({ navigation }) => {
  const [isSignup, setIsSignup] = useState(false);
  return (
    <View style={{ flex: 1 }}>
      {isSignup && (
        <Signup
          navigation={navigation}
          signupState={[isSignup, setIsSignup]}
          isSignUp={isSignup}
          setIsSignup={setIsSignup}
        />
      )}
      {!isSignup && (
        <Login
          navigation={navigation}
          signupState={[isSignup, setIsSignup]}
          isSignUp={isSignup}
          setIsSignup={setIsSignup}
        />
      )}
    </View>
  );
};

export default AuthComp;

const styles = StyleSheet.create({});
