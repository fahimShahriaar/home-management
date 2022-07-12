import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Calendar from "./Calendar";

export default function UtilityOperation() {
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
      <View style={styles.mealOperationContainer}>
        <Pressable
          style={styles.addMealBox}
          onPress={() => setShowDatePicker(!showDatePicker)}
        >
          <View>
            <Text style={{ color: "whitesmoke" }}>Add Utility</Text>
          </View>
        </Pressable>
        <Pressable
          style={styles.updateMealBox}
          onPress={() => setShowDatePicker(!showDatePicker)}
        >
          <View>
            <Text style={{ color: "whitesmoke" }}>Update Utility</Text>
          </View>
        </Pressable>
        <Pressable
          style={styles.utilityHistory}
          onPress={() => setShowDatePicker(!showDatePicker)}
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
  mealOperationContainer: {
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
