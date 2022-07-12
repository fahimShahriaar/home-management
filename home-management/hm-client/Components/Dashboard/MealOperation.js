import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Calendar from "./Calendar";

export default function MealOperation({ navigation }) {
  const [showDatePicker, setShowDatePicker] = useState(false);
  //   console.log(showDatePicker);
  return (
    <View>
      <View style={styles.mealOperationContainer}>
        <Pressable
          style={styles.addMealBox}
          onPress={() => navigation.navigate("AddMeal")}
        >
          <View>
            <Text style={{ color: "whitesmoke" }}>Add Meal</Text>
          </View>
        </Pressable>
        <Pressable
          style={styles.updateMealBox}
          onPress={() => navigation.navigate("UpdateMeal")}
        >
          <View>
            <Text style={{ color: "whitesmoke" }}>Update Meal</Text>
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
    // justifyContent: "space-around",
  },
  addMealBox: {
    backgroundColor: "#0d9488",
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
});
