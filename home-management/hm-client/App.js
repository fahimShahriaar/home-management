import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, View } from "react-native";
// import FlexBox from "./Components/FlexBox";
// import PracticeOne from "./Components/PracticeOne";
// import PracticeTwo from "./Components/PracticeTwo";
// import AuthComp from "./Components/AuthComp/AuthComp";
import Login from "./Components/AuthComp/Login";
import Signup from "./Components/AuthComp/Signup";
import ReactComp from "./ReactComp";

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "rgb(255, 45, 85)",
    // background: "white",
  },
};

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <View style={styles.appContainer}>
        <Stack.Navigator initialRouteName="Signup">
          <Stack.Screen
            name="Signup"
            component={Signup}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Dashboard" component={ReactComp} />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    // paddingVertical: 50,
    // paddingHorizontal: 10,
    flex: 1,
  },
});

{
  /* <PracticeOne /> */
}
{
  /* <PracticeTwo /> */
}
{
  /* <FlexBox /> */
}
{
  /* <Signup /> */
}
