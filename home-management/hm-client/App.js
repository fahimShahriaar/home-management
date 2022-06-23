import { StyleSheet, View } from "react-native";
import FlexBox from "./Components/FlexBox";
import PracticeOne from "./Components/PracticeOne";
import PracticeTwo from "./Components/PracticeTwo";
import Signup from "./Components/Signup";

export default function App() {
  return (
    <View style={styles.appContainer}>
      {/* <PracticeOne /> */}
      {/* <PracticeTwo /> */}
      {/* <FlexBox /> */}
      <Signup />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingVertical: 50,
    paddingHorizontal: 10,
    flex: 1,
  },
});
