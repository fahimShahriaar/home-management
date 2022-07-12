import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Calendar from "./Calendar";

export default function UtilityOperation({ navigation }) {
  const [showDatePicker, setShowDatePicker] = useState(false);
  return (
    <View>
      <Text
        style={{
          marginTop: 20,
          textAlign: "center",
          color: "green",
          fontWeight: "bold",
        }}
      >
        Utility Operation
      </Text>
      <View style={styles.utilityOperationContainer}>
        <Pressable
          style={styles.addUtilityBox}
          onPress={() => navigation.navigate("AddUtility")}
        >
          <View>
            <Text style={{ color: "whitesmoke", textAlign: "center" }}>
              Add Utility
            </Text>
          </View>
        </Pressable>
        <Pressable
          style={styles.updateUtilityBox}
          onPress={() => navigation.navigate("UpdateUtility")}
        >
          <View>
            <Text style={{ color: "whitesmoke", textAlign: "center" }}>
              Update Utility
            </Text>
          </View>
        </Pressable>
        <Pressable
          style={styles.utilityHistoryBox}
          onPress={() => navigation.navigate("UtilityHistory")}
        >
          <View>
            <Text style={{ color: "whitesmoke", textAlign: "center" }}>
              Utility History
            </Text>
          </View>
        </Pressable>
      </View>
      {showDatePicker && (
        <Calendar
          showDatePicker={showDatePicker}
          setShowDatePicker={setShowDatePicker}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  utilityOperationContainer: {
    flexDirection: "row",
    padding: 10,
  },
  addUtilityBox: {
    backgroundColor: "#ec4899",
    flex: 1,
    height: 100,
    width: 100,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
  updateUtilityBox: {
    backgroundColor: "cornflowerblue",
    flex: 1,
    height: 100,
    width: 100,
    borderRadius: 100,
    // borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
  utilityHistoryBox: {
    backgroundColor: "#0d9488",
    flex: 1,
    height: 100,
    width: 100,
    borderRadius: 100,
    // borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
});
