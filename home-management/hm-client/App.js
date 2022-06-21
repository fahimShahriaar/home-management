import { StyleSheet, View } from "react-native";
import PracticeOne from "./Components/PracticeOne";
import PracticeTwo from "./Components/PracticeTwo";

export default function App() {
  return (
    <View style={styles.appContainer}>
      {/* <PracticeOne /> */}
      <PracticeTwo />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
  },
});
