import { StyleSheet, Text, View } from "react-native";

const FlexBox = () => {
  return (
    <View style={styles.viewContainer}>
      <View style={styles.orangeView}></View>
      <View style={styles.greenView}></View>
      <View style={styles.blueView}></View>
    </View>
  );
};

export default FlexBox;

const styles = StyleSheet.create({
  viewContainer: {
    flexDirection: "row",
    width: "80%",
    borderWidth: 1,
    height: 300,
    justifyContent: "space-between",
    // alignItems: "center",
  },
  orangeView: {
    backgroundColor: "orange",
    // width: 100,
    // height: 100,
    padding: 10,
    flex: 1,
  },
  greenView: {
    backgroundColor: "lightgreen",
    // width: 100,
    // height: 100,
    padding: 10,
    flex: 2,
  },
  blueView: {
    backgroundColor: "skyblue",
    // width: 100,
    // height: 100,
    padding: 10,
    flex: 1,
  },
});
