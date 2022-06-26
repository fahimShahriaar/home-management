import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, View } from "react-native";
// import FlexBox from "./Components/FlexBox";
// import PracticeOne from "./Components/PracticeOne";
// import PracticeTwo from "./Components/PracticeTwo";
import Signup from "./Components/Signup";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.appContainer}>
        <Stack.Navigator>
          <Stack.Screen
            name="Signup"
            component={Signup}
            options={{ headerShown: false }}
          />
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
