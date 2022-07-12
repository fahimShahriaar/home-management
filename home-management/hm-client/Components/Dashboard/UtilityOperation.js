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
        Utility
      </Text>
      <View style={styles.utilityOperationContainer}>
        <Pressable
          style={styles.addMealBox}
          onPress={() => navigation.navigate("AddUtility")}
        >
          <View>
            <Text style={{ color: "whitesmoke" }}>Add Utility</Text>
          </View>
        </Pressable>
        <Pressable
          style={styles.updateMealBox}
          onPress={() => navigation.navigate("UpdateUtility")}
        >
          <View>
            <Text style={{ color: "whitesmoke" }}>Update Utility</Text>
          </View>
        </Pressable>
        <Pressable
          style={styles.utilityHistory}
          onPress={() => navigation.navigate("UtilityHistory")}
        >
          <View>
            <Text style={{ color: "whitesmoke" }}>Utility History</Text>
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
  },
  addMealBox: {
    backgroundColor: "#ec4899",
    flex: 1,
    margin: 5,
    borderRadius: 5,
    padding: 5,
    alignItems: "center",
  },
  updateMealBox: {
    backgroundColor: "cornflowerblue",
    flex: 1,
    margin: 5,
    borderRadius: 5,
    padding: 5,
    alignItems: "center",
  },
  utilityHistory: {
    backgroundColor: "#0d9488",
    flex: 1,
    margin: 5,
    borderRadius: 5,
    padding: 5,
    alignItems: "center",
  },
});
